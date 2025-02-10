"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactUs() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      description:
        "This feature will be available soon. In the meantime, please use an alternative method to contact us",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="pt-28 max-w-2xl mx-auto mt-10 p-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Have questions or need assistance? Reach out to us!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white"
          >
            Send Message
          </Button>
        </form>

        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Get in Touch
          </h2>
          <div className="flex flex-col items-center gap-3 text-gray-700">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>contact@mynoteshub.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+92 123 4567890</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="https://facebook.com"
            className="text-gray-700 hover:text-blue-600"
          >
            <Button>Whatsapp</Button>
          </Link>
          <Link
            href="https://twitter.com"
            className="text-gray-700 hover:text-blue-400"
          >
            <Button>Faceboo.</Button>
          </Link>
          <Link
            href="https://instagram.com"
            className="text-gray-700 hover:text-pink-500"
          >
            <Button>Insta.</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
