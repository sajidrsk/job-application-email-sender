// Import required modules
require("dotenv").config(); // Load environment variables from .env file
const express = require("express"); // Import Express.js framework
const sgMail = require("@sendgrid/mail"); // Import SendGrid library for sending emails
const { modifyEmailMessage } = require("./helper");

const app = express(); // Create Express application

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Set SendGrid API key from environment variable

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse JSON bodies
app.use(express.json());

// Route to handle email sending
app.post("/send-email", async (req, res) => {
  const { body: recruitersList } = req; // Extract the "body" property from the request object and rename it to "recruitersList"
  const modifiedMessages = recruitersList.map(modifyEmailMessage); // Map through recruitersList and generate modified email messages

  try {
    await sgMail.sendMultiple(modifiedMessages); // Send the email messages using SendGrid's sendMultiple() method
    res.status(200).send("Email sent successfully 🚀"); // Send success response
  } catch (error) {
    res.status(501).send("Error sending email: " + error.message);
  }
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`); // Display server start message with the specified port
});
