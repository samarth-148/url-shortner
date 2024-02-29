# URL Shortener Project

This project is a URL shortening service implemented using EJS for server-side rendering, MongoDB for data handling and RESTful APIs, and Express.js. The project includes user authentication features using JSON Web Tokens (JWT), including login, sign-up, and log-out functionalities. Users can only use the URL shortening service after logging in or signing up.

## Features

- **User Authentication**: The authentication service is efficiently implemented using JWT, ensuring secure access to the URL shortening service.
- **Shortened URL History**: After logging in, users can view the history of their previously shortened URLs.
- **Click Tracking**: The service tracks the number of times each shortened URL has been clicked.
- **Copy Shortened URL**: Users can click the "Copy" button next to the shortened URL to copy it to the clipboard.

## Technologies Used

- **EJS**: For server-side rendering.
- **MongoDB**: For data storage and handling.
- **Express.js**: For building the server and RESTful APIs.
- **JSON Web Tokens (JWT)**: For user authentication.

## Usage

1. **Login or Sign Up**: Users must log in or sign up to use the URL shortening service.
2. **Shorten a URL**: Enter a URL in the input field and click "Generate" to shorten the URL. Click the "Copy" button next to the shortened URL to copy it to the clipboard.
3. **View Shortened URLs**: After logging in, users can view their previously shortened URLs and the number of clicks each URL has received.
4. **Log Out**: Click "Logout" to log out of the service.


