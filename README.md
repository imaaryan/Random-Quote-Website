# Random Quote Website

![Screenshot](https://github.com/imaaryan/Random-Quote-Website/raw/master/assets/screenshot.png)

A simple random quote generator that fetches quotes from an API and allows users to copy, tweet, and save them as an image.

## 🚀 Live Demo
[Click here to view the website](https://random-quote-website-tawny.vercel.app/)

## 🎯 Features
- **Fetch Random Quotes**: Retrieves a new quote from an API.
- **Copy Quote**: Allows users to copy the quote to the clipboard.
- **Tweet Quote**: Shares the quote on Twitter (X).
- **Save Quote as Image**: Converts the quote into an image and downloads it.

## 🛠️ Technologies Used
- HTML, CSS, JavaScript
- FreeAPI for quotes
- html2canvas (for saving quotes as images)

## 📜 How It Works
1. **Fetching Quotes**
   - The `fetchData` function retrieves a random quote from `https://api.freeapi.app/api/v1/public/quotes/quote/random`.
   - The `displayQuote` function updates the UI with the fetched quote and author.

2. **User Interactions**
   - Clicking "New Quote" fetches another random quote.
   - "Copy to Clipboard" copies the quote text.
   - "Share on Twitter" opens Twitter with the quote pre-filled.
   - "Save as Image" uses `html2canvas` to generate an image of the quote.

## 📂 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/imaaryan/Random-Quote-Website.git
   ```
2. Open `index.html` in your browser.

## 💡 Contributing
Feel free to submit a pull request if you'd like to improve the project!

## 📄 License
This project is open-source and available under the MIT License.

