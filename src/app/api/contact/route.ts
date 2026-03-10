import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    console.log("STEP 1: Request received");

    const body = await req.json();

    console.log("STEP 2: Data parsed", body);

    const { name, email, phone, message } = body;

    /* ================================
       VALIDATION
    ================================= */

    if (!name || !email || !message) {

      console.log("VALIDATION FAILED");

      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );

    }

    console.log("STEP 3: Validation passed"); 

    /* ================================
   GENERATE ENQUIRY ID
================================ */

const enquiryId = `RPS-${Date.now()}`;

console.log("STEP 4: Enquiry ID generated:", enquiryId);

    /* ================================
       SAVE TO DATABASE
    ================================= */

    const enquiry = await prisma.contactEnquiry.create({
      data: {
        enquiryId,
        name,
        email,
        phone,
        message,
      },
    });

    console.log("STEP 5: Saved to database", enquiry);

    /* ================================
       EMAIL TRANSPORTER
    ================================= */

    console.log("STEP 6: Creating SMTP transporter");

    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_HOST,
      port: Number(process.env.BREVO_PORT),
      secure: false,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    console.log("STEP 7: SMTP transporter ready");

    /* ================================
       TRY SENDING EMAILS
    ================================= */

    try {

      /* EMAIL → SCHOOL */

      console.log("STEP 8: Sending email to school");

      const schoolMail = await transporter.sendMail({

        from: `"Royal Public School Website" <info@rpsdeori.org>`,
        to: "info@rpsdeori.org",
        replyTo: email,
        subject: "New Contact Enquiry - Royal Public School",

        html: `
        <div style="font-family:Arial;padding:20px">

          <h2 style="color:#0B1F3A">
            New Website Contact Enquiry
          </h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

          <p><strong>Message:</strong></p>

          <p style="background:#F3F4F6;padding:10px;border-radius:6px">
            ${message}
          </p>

          <hr/>

          <p style="font-size:12px;color:#6B7280">
            Enquiry ID: ${enquiry.enquiryId}
          </p>

        </div>
        `,
      });

      console.log("STEP 9: School email sent", schoolMail.messageId);

      /* EMAIL → PARENT */

      console.log("STEP 10: Sending auto reply to parent");

      const parentMail = await transporter.sendMail({

        from: `"Royal Public School" <info@rpsdeori.org>`,
        to: email,
        subject: "We received your enquiry - Royal Public School",

        html: `
        <div style="font-family:Arial;padding:20px">

          <h2 style="color:#0B1F3A">
            Royal Public School
          </h2>

          <p>Dear ${name},</p>

          <p>
          Thank you for contacting
          <strong>Royal Public School</strong>.
          </p>

          <p>
          We have received your enquiry successfully.
          Our admission team will contact you shortly.
          </p>

          <p>
          <strong>Your Enquiry Reference ID:</strong>
          ${enquiry.enquiryId}
          </p>

          <br/>

          <p>
          Regards,<br/>
          Royal Public School<br/>
          Deori
          </p>

        </div>
        `,
      });

      console.log("STEP 11: Parent email sent", parentMail.messageId);

    } catch (mailError) {

      console.error("EMAIL ERROR:", mailError);

    }

    /* ================================
       SUCCESS RESPONSE
    ================================= */

    console.log("STEP 12: API success response");

    return Response.json({
      success: true,
      message: "Message sent successfully",
      enquiryId: enquiry.enquiryId,
    });

  } catch (error) {

    console.error("CONTACT API ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );

  }

}