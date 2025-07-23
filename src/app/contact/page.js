"use client";

import FloatingIcons from "@/components/FloatingIcons";
import { emotionGradients } from "@/utils/gradientConfig";
import {
  Mail,
  Send,
  User,
  Heart,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  const gradient = emotionGradients.sadness;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [error, setError] = useState(false);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-[calc(100vh-7rem)] ">
      <div className="flex flex-col items-center justify-center h-full px-8 max-w-2xl mx-auto">
        <div
          style={gradient}
          className="absolute -z-3 top-0 w-full min-h-screen transition-all duration-1000 ease-in-out"
        />

        <FloatingIcons
          icons={[
            {
              x: 20,
              y: 25,
              component: <Mail className="w-6 h-6 text-black/30" />,
            },
            {
              x: 80,
              y: 20,
              component: <Send className="w-5 h-5 text-black/25" />,
            },
            {
              x: 15,
              y: 75,
              component: <Heart className="w-4 h-4 text-black/20" />,
            },
            {
              x: 85,
              y: 80,
              component: <User className="w-5 h-5 text-black/25" />,
            },
          ]}
        />

        <div
          className={`${playfair.className} transition-all duration-600 ease-in-out transform w-full opacity-100 translate-y-0`}
        >
          <div className="text-center mb-4 md:mb-8">
            <h1 className={`text-2xl md:text-3xl text-black mb-2 sm:mb-4`}>
              Get In Touch
            </h1>
            <p className="text-black/80 sm:text-lg">
              Let's create something amazing together
            </p>
          </div>

          <div className="space-y-2 md:space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Your Name"
                className="w-full h-12 px-4 bg-black/10 backdrop-blur-sm border border-black/30 rounded-[20px] text-black placeholder-black/60 focus:outline-none focus:bg-black/20 transition-all duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Your Email"
                className="w-full h-12 px-4 bg-black/10 backdrop-blur-sm border border-black/30 rounded-[20px] text-black placeholder-black/60 focus:outline-none focus:bg-black/20 transition-all duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 bg-black/10 backdrop-blur-sm border border-black/30 rounded-[20px] text-black placeholder-black/60 focus:outline-none focus:bg-black/20 transition-all duration-300 resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full h-12 bg-black/10 cursor-pointer backdrop-blur-sm border border-black/40 rounded-[20px] text-black font-medium hover:bg-black/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="text-lg flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-500/20 border border-black/80 text-center text-sm rounded-[20px] text-black/80">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-500/20 border border-black/80 text-center text-sm rounded-[20px] text-red-300">
                There was an error sending your message. Please try again.
              </div>
            )}

            {error && (
              <p className="text-red-500 text-center text-xs">
                Please fill in all fields before submitting.
              </p>
            )}
          </div>

          <div className={`${playfair.className} text-center mt-4`}>
            <p className="text-black/70 text-sm">
              Or reach out directly at{" "}
              <a
                href="mailto:amnasohaib2003@example.com"
                className="text-black hover:text-black/80 transition-colors"
              >
                amnasohaib2003@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
