// Adding all the elements
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let newQuoteBtn = document.getElementById("new-quote");
let copyBtn = document.getElementById("copy");
let tweetBtn = document.getElementById("tweet");
let saveBtn = document.getElementById("save-image");

//function to fetch data from api
async function fetchData() {
  const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
  const options = { method: "GET", headers: { accept: "application/json" } };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

//saving the api respone in a function
async function displayQuote() {
  let apiResponse = await fetchData();
  quote.innerText = `"${apiResponse.data.content}"`;
  author.innerText = `- ${apiResponse.data.author}`;
}
displayQuote(); //running the function for first time

//EventListners for NewQuote
newQuoteBtn.addEventListener("click", () => {
  displayQuote();
});

//EventListners for CopyQuote
copyBtn.addEventListener("click", function () {
  navigator.clipboard
    .writeText(quote.innerText + " " + author.innerText)
    .then(() => {
      this.innerText = "Copied!";

      setTimeout(() => {
        this.innerText = "Copy to Clipboard";
      }, 1000);
    })
    .catch((error) => {
      console.error(error);
    });
});

//EventListner for Tweet
tweetBtn.addEventListener("click", function () {
  let tweetContent = `${quote.innerText}  ${author.innerText}`;
  let finalContent = encodeURIComponent(tweetContent);
  let tweetUrl = `https://x.com/intent/post?text=${finalContent}`;
  window.open(tweetUrl, "_blank");
  this.innerText = "Tweeted!";
  setTimeout(() => {
    this.innerText = "Share on Twitter";
  }, 1000);
});

//EventListner for SaveImage
saveBtn.addEventListener("click", function () {
  // Use html2canvas to take a screenshot of the quote container (its a third party cdn js)
  // URL : https://html2canvas.hertzen.com/
  html2canvas(document.querySelector(".quote-container")).then((canvas) => {
    let image = canvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.href = image;
    link.download = "quote.png"; 
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link);
  });
});
