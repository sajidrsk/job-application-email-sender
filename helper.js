const { JSDOM } = require("jsdom"); // Import JSDOM library for manipulating HTML content
const fs = require("fs"); // Import File System module for file operations

// Function to modify email messages based on input data
function modifyEmailMessage({ email, recruiter, company }) {
  const htmlTemplate = fs.readFileSync(
    "./public/" + process.env.EMAIL_FILE_NAME,
    "utf-8"
  ); // Read the HTML email template from a file

  const resumeAttachment = fs
    .readFileSync("./public/" + process.env.ATTACHMENT_FILE_NAME)
    .toString("base64"); // Read the resume attachment file and convert it to base64

  const dom = new JSDOM(htmlTemplate); // Create a JSDOM object from the HTML content
  const { document } = dom.window;

  document.querySelector(".recruiter-name").textContent = recruiter; // Modify the recruiter name in the HTML template
  document.querySelectorAll(".company-name").forEach((companyName) => {
    companyName.textContent = company; // Modify all instances of company name in the HTML template
  });

  const modifiedHtml = dom.serialize(); // Serialize the modified HTML back to a string

  return {
    to: email,
    from: process.env.MY_EMAIL,
    subject: process.env.EMAIL_SUBJECT,
    html: modifiedHtml,
    attachments: [
      {
        content: resumeAttachment,
        filename: process.env.ATTACHMENT_FILE_NAME,
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  }; // Return the modified email message object
}

module.exports = { modifyEmailMessage };
