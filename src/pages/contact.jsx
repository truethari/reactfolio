import React, { useState } from "react";
import emailjs from "emailjs-com";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Send email using EmailJS
		emailjs
			.sendForm(
				"service_s4uzwtb",
				"template_v8g6das",
				e.target,
				"iJ5X1Aaus43y08qUB"
			)

			.then(
				(result) => {
					console.log("Email sent successfully:", result.text);
					alert("Your message has been sent successfully!");
				},
				(error) => {
					console.error("Error sending email:", error.text);

					alert(
						"Oops! Something went wrong. Please try again later."
					);
				}
			);

		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<div>
			<NavBar />
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-6 my-10">Contact Me</h1>

				<form onSubmit={handleSubmit} className="max-w-lg">
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Name
						</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Email
						</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Message
						</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
						></textarea>
					</div>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Send Message
					</button>
				</form>
				<div className="page-footer mt-auto relative">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
