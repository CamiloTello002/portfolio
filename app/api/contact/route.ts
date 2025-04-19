import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as z from "zod";

// Reuse the same schema from the frontend for validation
const formSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	subject: z.string().min(5),
	message: z.string().min(10),
});

export async function POST(request: Request) {
	const body = await request.json();
	console.log({ body })
	return NextResponse.json({
		request
	})
	try {
		const body = await request.json();
		const validatedData = formSchema.parse(body);

		// Configure Nodemailer transporter (Gmail SMTP)
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		});

		// Email options
		const mailOptions = {
			from: process.env.GMAIL_USER,
			to: process.env.GMAIL_USER, // Send to yourself (or another email)
			subject: `New Contact Form Submission: ${validatedData.subject}`,
			text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Message: ${validatedData.message}
      `,
			html: `
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong> ${validatedData.message}</p>
      `,
		};

		// Send email
		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: "Email sent successfully!" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ message: "Failed to send email." },
			{ status: 500 }
		);
	}
}

