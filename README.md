# Job Application Email Sender

![GitHub](https://img.shields.io/github/license/sajidrsk/job-application-sender)

The Job Application Email Sender is an open-source application that automates the process of sending job applications to recruiters via email. It allows you to customize the email template, attach a resume, and send personalized emails to multiple recruiters simultaneously.

## Features

- Send personalized job application emails to recruiters.
- Customize the email template with dynamic content like the recruiter's name and company.
- Attach a resume in PDF format to the email.
- Supports sending emails to multiple recruiters in one go.
- Lightweight and easy to set up.
- Built with Node.js and Express.js.
- Uses the SendGrid API for email delivery.

## Prerequisites

Before running the Job Application Email Sender, make sure you have the following prerequisites installed:

- Node.js (v12 or higher)
- NPM (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sajidrsk/job-application-email-sender.git
   ```

2. Navigate to the project directory:

   ```bash
   cd job-application-email-sender
   ```

3. Navigate to the project directory:
   ```bash
   npm install
   ```
4. Set up environment variables:

- Rename the `.env.example` file to `.env`.
- Open the `.env` file and replace the placeholder values with your own configuration.

## Usage

1. Customize the email template:

- Open the `public/email.html` file and modify the email content as desired.
- Use the placeholders `{recruiter}` and `{company}` to dynamically insert the recruiter's name and company.

2. Prepare the resume:

- Replace the `public/resume.pdf` file with your own resume in PDF format.
- Make sure the file is named resume.pdf.

3. Start the application:

   ```bash
   npm start
   ```

4. Send job application emails:

- Use the provided API endpoint `/send-email` to send job application emails.

- Send a POST request to `http://localhost:<PORT>/send-email` with the following payload:

  ```json
  {
    "recruitersList": [
      {
        "email": "recruiter1@example.com",
        "recruiter": "John Doe",
        "company": "Acme Corp"
      },
      {
        "email": "recruiter2@example.com",
        "recruiter": "Jane Smith",
        "company": "XYZ Corp"
      }
    ]
  }
  ```

- The application will send personalized emails to the specified recruiters with the configured email template and attached resume.

5. Access the application:

- The application will be accessible at `http://localhost:<PORT>`.

# Configuration

The following environment variables need to be configured in the `.env` file:

- `PORT` - The port number on which the application will run.
- `SENDGRID_API_KEY` - Your SendGrid API key for sending emails.
- `MY_EMAIL` - Your email address from which the job application emails will be sent.
- `EMAIL_SUBJECT` - The subject line for the job application emails.
- `EMAIL_FILE_NAME` - The file name of the email template HTML file.
- `ATTACHMENT_FILE_NAME` - The file name of the resume attachment PDF file.

## Contributing

Contributions are welcome! Please follow the guidelines outlined in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
