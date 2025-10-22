import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // success, error
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0f2fe] to-[#dbeafe] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-[#1C1917] mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-center text-[#6B7280] mb-8">
          Have a question or want to work together? Fill out the form below and I'll get back to you.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1C1917]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-[#D97706] focus:border-[#B45309] focus:ring-[#B45309] p-3"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1C1917]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-[#D97706] focus:border-[#B45309] focus:ring-[#B45309] p-3"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#1C1917]">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="mt-2 block w-full rounded-md border border-[#D97706] focus:border-[#B45309] focus:ring-[#B45309] p-3"
              placeholder="Your message"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-[#D97706] text-white py-3 rounded-md text-lg font-medium transition duration-300 hover:bg-[#B45309] ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Saving..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 mt-4 text-center">
              ✅ Your message has been saved successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-4 text-center">
              ❌ Failed to save your message. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
