import sgMail from '@sendgrid/mail';

const inquiryEmail = "inquiries@clarkeholdings.ca";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  // check to see if post is from the correct url
  if (request.headers.get("origin") !== "https://clarkeholdings.ca") {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const data = await request.json();

    // Verify reCAPTCHA token on the server-side
    const verificationResponse = await verifyRecaptcha(
      data.recaptchaToken,
      getApiKey('RECAPTCHA_SECRET_KEY')
    );
    if (!verificationResponse.success) {
      return new Response("reCAPTCHA verification failed", { status: 400 });
    }

    // Send email using SendGrid
    const result = await sendEmailWithSendGrid(data, inquiryEmail, inquiryEmail, "New Inquiry");
    console.log("Email sent:", result);

    return new Response("Submission successful!", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error processing form", { status: 500 });
  }
}

// Helper functions
async function verifyRecaptcha(token, secretKey) {
  const recaptchaUrl = new URL(
    "https://www.google.com/recaptcha/api/siteverify"
  );
  recaptchaUrl.searchParams.set("secret", secretKey);
  recaptchaUrl.searchParams.set("response", token);

  const response = await fetch(recaptchaUrl, { method: "POST" });
  return response.json();
}

async function sendEmailWithSendGrid(formData, toEmail, fromEmail, subject) {
  sgMail.setApiKey(
    getApiKey('SENDGRID_API_KEY'));

  const msg = {
    to: toEmail,
    from: fromEmail,
    subject: subject,
    text: formatFormDataAsEmail(formData),
  };

  const response = await sgMail.send(msg);
  return response;
}

function formatFormDataAsEmail(data) {
  let emailBody = "";
  for (const key in data) {
    if (key !== "recaptchaToken") {
      emailBody += `${key}: ${data[key]}\n`;
    }
  }
  return emailBody;
}

function getApiKey(keyName) {
        // eslint-disable-next-line no-undef
  if (typeof process !== 'undefined' && process.env[keyName]) {
          // eslint-disable-next-line no-undef
      return process.env[keyName]; 
  } else {
      // Assuming browser or Cloudflare Worker without Node-like behavior
      console.error('Cannot access secrets in this environment', keyName);
      return null; // Handle this based on your error reporting mechanism
  }
}