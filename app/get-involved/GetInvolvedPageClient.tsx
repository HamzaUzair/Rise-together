"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Megaphone,
  Briefcase,
  GraduationCap,
  MapPin,
  Heart,
  Check,
  ArrowRight,
  Star,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { faqs } from "@/lib/data";

const options = [
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Join our team of 3,500+ volunteers making a direct impact in communities through mentoring, teaching, and fieldwork.",
  },
  {
    icon: Megaphone,
    title: "Fundraise",
    description:
      "Start your own fundraiser for RiseTogether. We'll provide tools, templates, and support to help you succeed.",
  },
  {
    icon: Briefcase,
    title: "Partner",
    description:
      "Become a corporate partner and align your brand with meaningful impact. Multiple partnership tiers available.",
  },
  {
    icon: GraduationCap,
    title: "Internship",
    description:
      "Gain hands-on nonprofit experience with our summer and year-long internship programs for students and graduates.",
  },
  {
    icon: MapPin,
    title: "Start a Local Chapter",
    description:
      "Bring RiseTogether to your city. Lead a local chapter and organize community events, drives, and awareness campaigns.",
  },
];

const partnerPackages = [
  {
    tier: "Silver",
    price: "$5,000/yr",
    features: [
      "Logo on our website",
      "Quarterly impact reports",
      "Employee volunteer day (1 event)",
      "Social media mention",
      "Certificate of partnership",
    ],
  },
  {
    tier: "Gold",
    price: "$15,000/yr",
    features: [
      "Everything in Silver",
      "Co-branded impact report",
      "Employee volunteer program (4 events)",
      "Featured partner spotlight",
      "Event sponsorship opportunity",
      "Dedicated account manager",
    ],
    featured: true,
  },
  {
    tier: "Platinum",
    price: "$50,000/yr",
    features: [
      "Everything in Gold",
      "Naming rights for a program",
      "Board advisory seat",
      "Unlimited volunteer events",
      "Custom impact dashboard",
      "Annual gala table (10 seats)",
      "Priority press & PR coverage",
    ],
  },
];

const interests = [
  "Education & Tutoring",
  "Food Distribution",
  "Healthcare Support",
  "Event Coordination",
  "Fundraising",
  "Communications",
  "Technology",
  "Field Operations",
];

export default function GetInvolvedPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    interest: "",
    availability: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", city: "", interest: "", availability: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHero
        label="Get Involved"
        title="Join the Movement"
        description="There are many ways to be part of the change. Find the one that fits you."
      />

      {/* ============================================ */}
      {/* OPTIONS GRID */}
      {/* ============================================ */}
      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Ways to Help"
            title="Choose How You Contribute"
            description="Whether you have an hour or a year, there's a place for you."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((o, i) => (
              <FeatureCard
                key={o.title}
                icon={o.icon}
                title={o.title}
                description={o.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* VOLUNTEER FORM */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                label="Volunteer"
                title="Sign Up to Volunteer"
                description="Fill out the form and we'll match you with the perfect opportunity."
                align="left"
              />
              <div className="mt-8 space-y-4">
                {[
                  "Flexible schedules — weekday, weekend, or remote",
                  "Training and orientation provided",
                  "Join a community of 3,500+ volunteers",
                  "Receive volunteer hours certification",
                  "Make a tangible impact in your community",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-charcoal">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white border border-border p-8 shadow-sm"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">
                    Thanks for signing up!
                  </h3>
                  <p className="mt-2 text-muted">
                    We&apos;ll reach out to you within 48 hours with next steps.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-navy mb-6">
                    Volunteer Interest Form
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="vol-name"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="vol-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vol-email"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="vol-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vol-city"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        City
                      </label>
                      <input
                        id="vol-city"
                        type="text"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vol-interest"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Area of Interest
                      </label>
                      <select
                        id="vol-interest"
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData({ ...formData, interest: e.target.value })
                        }
                        className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select an interest</option>
                        {interests.map((int) => (
                          <option key={int} value={int}>
                            {int}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="vol-availability"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Availability
                      </label>
                      <select
                        id="vol-availability"
                        value={formData.availability}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            availability: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select availability</option>
                        <option value="weekdays">Weekdays</option>
                        <option value="weekends">Weekends</option>
                        <option value="evenings">Evenings</option>
                        <option value="remote">Remote Only</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark hover:shadow-lg transition-all"
                    >
                      Submit Application
                    </button>
                  </div>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CORPORATE PARTNERSHIP */}
      {/* ============================================ */}
      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Corporate Partnerships"
            title="Partner With Purpose"
            description="Align your organization with measurable social impact. Choose a partnership tier that fits your goals."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerPackages.map((pkg, i) => (
              <motion.div
                key={pkg.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-8 transition-all ${
                  pkg.featured
                    ? "border-primary bg-white shadow-lg ring-2 ring-primary/20 relative"
                    : "border-border bg-white hover:shadow-lg hover:border-primary/20"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-navy">{pkg.tier}</h3>
                <p className="text-3xl font-bold text-primary mt-2">
                  {pkg.price}
                </p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f, fi) => (
                    <li
                      key={fi}
                      className="flex items-start gap-2 text-sm text-charcoal"
                    >
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full rounded-xl bg-primary/10 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors">
                  Contact Us
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* COMMUNITY CHAPTERS */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-navy to-navy-light p-8 sm:p-12 text-center text-white"
          >
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 mb-4">
              Community
            </span>
            <h2 className="text-3xl font-bold">Join Our Local Chapters</h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              We have active chapters in 25+ cities across the globe. Join an
              existing chapter or start one in your community. Lead events,
              organize drives, and rally your neighbors for impact.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary-light transition-colors">
                <MapPin className="h-4 w-4" />
                Find a Chapter
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                Start a Chapter
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Questions?"
            title="Frequently Asked Questions"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs.filter((_, i) => [3, 5, 6].includes(i))} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Make a Difference?"
        description="Every action counts — whether you donate, volunteer, or spread the word."
      />
    </>
  );
}
