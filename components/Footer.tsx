"use client";

import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/causes", label: "Our Causes" },
  { href: "/impact", label: "Impact & Reports" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/events", label: "Events" },
  { href: "/stories", label: "Stories" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold">Stay Connected</h3>
              <p className="mt-2 text-white/70 max-w-md">
                Get updates on our impact, stories from the field, and ways to
                make a difference.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md gap-3"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email for newsletter"
                  className="w-full rounded-full bg-white/10 border border-white/20 pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors shrink-0 flex items-center gap-2"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          <p className="mt-4 text-xs text-white/40 text-center lg:text-left">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-bold text-lg">
                R
              </div>
              <span className="text-xl font-bold">
                Rise<span className="text-primary-light">Together</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Empowering communities through education, nutrition, healthcare,
              and sustainable development. Together, we rise.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-primary hover:text-white transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-light shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">
                  450 Riverside Drive, Suite 300
                  <br />
                  New York, NY 10027
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-light shrink-0" />
                <a
                  href="tel:+12125551234"
                  className="text-sm text-white/60 hover:text-primary-light transition-colors"
                >
                  +1 (212) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-light shrink-0" />
                <a
                  href="mailto:hello@risetogether.org"
                  className="text-sm text-white/60 hover:text-primary-light transition-colors"
                >
                  hello@risetogether.org
                </a>
              </li>
            </ul>
          </div>

          {/* Transparency */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Transparency
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              RiseTogether Foundation is a registered 501(c)(3) nonprofit.
              EIN: 12-3456789. We maintain the highest standards of financial
              transparency and accountability.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                ✓ Registered NGO
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                ✓ 100% Transparent
              </span>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                ✓ Audited Annually
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} RiseTogether Foundation. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Terms of Service
              </Link>
              <span className="flex items-center gap-1 text-xs text-white/40">
                Made with <Heart className="h-3 w-3 text-red-400" /> for
                communities
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
