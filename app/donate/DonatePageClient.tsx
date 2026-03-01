"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Mail,
  Phone,
  User,
  Copy,
  Check,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TrustBar from "@/components/TrustBar";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";

export default function DonatePageClient() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <>
      <PageHero
        label="Donate"
        title="Donate"
        description="Support our mission by making a bank transfer. All donations go directly toward transforming lives."
      />

      <TrustBar />

      {/* ============================================ */}
      {/* BANK DETAILS & CONTACT INFORMATION */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Bank Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white border border-border p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy">Bank Details</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-muted mb-2">
                      Account Name
                    </label>
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold text-navy">
                        Mutee Ullah
                      </p>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("Mutee Ullah", "accountName")}
                        className="p-2 rounded-lg hover:bg-surface-alt transition-colors"
                        aria-label="Copy account name"
                        title="Copy to clipboard"
                      >
                        <Copy className={`h-5 w-5 ${copiedField === "accountName" ? "text-primary" : "text-muted"}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-muted mb-2">
                      Account Number
                    </label>
                    <div className="flex items-center gap-3 flex-wrap">
                      <p className="text-lg font-mono font-semibold text-navy break-all">
                        ES6921000852090700046713
                      </p>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("ES6921000852090700046713", "accountNumber")}
                        className="p-2 rounded-lg hover:bg-surface-alt transition-colors shrink-0"
                        aria-label="Copy account number"
                        title="Copy to clipboard"
                      >
                        <Copy className={`h-5 w-5 ${copiedField === "accountNumber" ? "text-primary" : "text-muted"}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-muted mb-2">
                      Bank Name
                    </label>
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold text-navy">
                        imaginBank
                      </p>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("imaginBank", "bankName")}
                        className="p-2 rounded-lg hover:bg-surface-alt transition-colors"
                        aria-label="Copy bank name"
                        title="Copy to clipboard"
                      >
                        <Copy className={`h-5 w-5 ${copiedField === "bankName" ? "text-primary" : "text-muted"}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-primary/5 border border-primary/10 p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <User className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy">Contact Information</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shrink-0">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-muted mb-2">
                      Name
                    </label>
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold text-navy">
                        Mutee Ullah
                      </p>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("Mutee Ullah", "contactName")}
                        className="p-2 rounded-lg hover:bg-white transition-colors"
                        aria-label="Copy name"
                        title="Copy to clipboard"
                      >
                        <Copy className={`h-5 w-5 ${copiedField === "contactName" ? "text-primary" : "text-muted"}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-muted mb-2">
                      Email
                    </label>
                    <div className="flex items-center gap-3 flex-wrap">
                      <a
                        href="mailto:muteeullah592@gmail.com"
                        className="text-lg font-semibold text-primary hover:underline break-all"
                      >
                        muteeullah592@gmail.com
                      </a>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("muteeullah592@gmail.com", "contactEmail")}
                        className="p-2 rounded-lg hover:bg-white transition-colors shrink-0"
                        aria-label="Copy email"
                        title="Copy to clipboard"
                      >
                        <Copy className={`h-5 w-5 ${copiedField === "contactEmail" ? "text-primary" : "text-muted"}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-muted mb-2">
                      Phone
                    </label>
                    <div className="flex items-center gap-3">
                      <a
                        href="tel:+923467837592"
                        className="text-lg font-semibold text-primary hover:underline"
                      >
                        +923467837592
                      </a>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("+923467837592", "contactPhone")}
                        className="p-2 rounded-lg hover:bg-white transition-colors shrink-0"
                        aria-label="Copy phone number"
                        title="Copy to clipboard"
                      >
                        <Copy className={`h-5 w-5 ${copiedField === "contactPhone" ? "text-primary" : "text-muted"}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Questions?"
            title="Donation FAQs"
          />
          <div className="mt-10 max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>
    </>
  );
}
