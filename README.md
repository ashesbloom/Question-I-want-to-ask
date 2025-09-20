# Question I want to ask

## ❇️ [Preview](https://ashesbloom.github.io/Question-I-want-to-ask/)

A fun, interactive project to ask a question where the "No" option playfully evades the user's cursor, encouraging them to say "Yes".

## Idea of the Project

The core idea is to create a simple, humorous web page for asking a question with a "Yes" or "No" answer. The twist is that the "No" button moves away whenever the user tries to hover over it, making it difficult to click. This fun interaction is designed to playfully guide the user towards selecting "Yes". The response, including how many times the user attempted to click "No", is then sent to you via email.

## Use Cases

This project can be adapted for various fun and lighthearted scenarios:
*   **Product feedback:** "Do you like our new feature?"
*   **Gathering biased feedback:** "Did you love my new website design?"
*   **Event invitations:** "Are you coming to my party?"
*   **Personal questions:** "Will you be my Valentine?"
*   **Just for fun:** Send it to a friend with a silly question.

## How to Use It

You can easily customize this project for your own use.

1.  **Get the code:**
    Clone or download this repository to your local machine.
    ```bash
    git clone https://github.com/AshesBloom/Question-I-want-to-ask.git
    ```

2.  **Customize the Question:**
    Open `index.html` and change the text inside the `<span>` tag within the `div` with the class `question`.
    ```html
    <!-- filepath: index.html -->
    ...
    <div class="question">
        <div><span>Do you like <br> the website?</span></div> <!-- Change this question -->
    </div>
    ...
    ```

3.  **Set up Email Notification (using Web3Forms):**
    This project uses [Web3Forms](https://web3forms.com/) to email you the user's response.
    *   Go to [web3forms.com](https://web3forms.com/), enter your email address, and get your free access key.
    *   Open the `support/user_data.js` file.
    *   Replace `'YOUR_ACCESS_KEY_HERE'` with the access key you received.
    ```javascript
    // filepath: support/user_data.js
    ...
    const accessKey = 'YOUR_ACCESS_KEY_HERE'; // Replace with your Web3Forms Access Key
    ...
    ```

4.  **Deploy:**
    Upload the files to your web hosting service (like GitHub Pages, Netlify, Vercel, etc.) to share your question with the world!
