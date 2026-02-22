"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "hello@risetogether.org",
    link: "mailto:hello@risetogether.org",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (212) 555-1234",
    link: "tel:+12125551234",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "450 Riverside Drive, Suite 300\nNew York, NY 10027",
    link: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon – Fri: 9:00 AM – 6:00 PM EST\nSat: 10:00 AM – 2:00 PM EST",
    link: null,
  },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHero
        label="Contact"
        title="Get in Touch"
        description="Have a question, partnership inquiry, or just want to say hello? We'd love to hear from you."
      />

      {/* ============================================ */}
      {/* CONTACT FORM + INFO */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="rounded-3xl bg-white border border-border p-8 shadow-sm"
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-navy">
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-muted">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-navy">
                        Send Us a Message
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-sm font-medium text-navy mb-1.5"
                          >
                            Full Name *
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                name: e.target.value,
                              })
                            }
                            className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-sm font-medium text-navy mb-1.5"
                          >
                            Email Address *
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="jane@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="block text-sm font-medium text-navy mb-1.5"
                        >
                          Subject *
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-sm font-medium text-navy mb-1.5"
                        >
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                          placeholder="Tell us more..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        <Send className="h-4 w-4" />
                        Send Message
                      </button>
                    </div>
                  </>
                )}
              </motion.form>
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-white border border-border p-6 hover:shadow-sm hover:border-primary/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm text-muted hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-sm text-muted whitespace-pre-line">
                          {info.details}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-2xl bg-white border border-border p-6"
              >
                <h4 className="text-sm font-semibold text-navy mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-alt text-muted hover:bg-primary hover:text-white transition-all"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-surface-alt border border-border h-80 flex items-center justify-center overflow-hidden"
          >
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-light mx-auto mb-3" />
              <p className="text-muted font-medium">Map Embed Area</p>
              <p className="text-sm text-muted-light mt-1">
                450 Riverside Drive, Suite 300, New York, NY 10027
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Small FAQ */}
      <section className="py-16 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Quick Answers"
            title="Frequently Asked Questions"
          />
          <div className="mt-10 max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs.slice(0, 3)} />
          </div>
        </div>
      </section>
    </>
  );
}
