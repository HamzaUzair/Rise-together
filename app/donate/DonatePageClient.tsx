"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  CreditCard,
  Building2,
  Wallet,
  Check,
  Lock,
  Shield,
  Eye,
  FileText,
  X,
  Gift,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TrustBar from "@/components/TrustBar";
import DonationTierCard from "@/components/DonationTierCard";
import FAQAccordion from "@/components/FAQAccordion";
import { causes, donationTiers, donorWall, faqs } from "@/lib/data";

const presetAmounts = [10, 25, 50, 100, 250, 500];
const paymentMethods = [
  { id: "card", label: "Credit Card", icon: CreditCard },
  { id: "bank", label: "Bank Transfer", icon: Building2 },
  { id: "wallet", label: "Digital Wallet", icon: Wallet },
];

export default function DonatePageClient() {
  const searchParams = useSearchParams();
  const initialCause = searchParams.get("cause") || "";
  const initialAmount = searchParams.get("amount")
    ? Number(searchParams.get("amount"))
    : 25;

  const [amount, setAmount] = useState(initialAmount);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedCause, setSelectedCause] = useState(initialCause);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  const closeThankYou = () => {
    setShowThankYou(false);
    setAmount(25);
    setCustomAmount("");
    setName("");
    setEmail("");
    setAnonymous(false);
    setSelectedCause("");
  };

  const activeTier = donationTiers.find((t) => t.amount === amount);
  const selectedCauseData = causes.find((c) => c.id === selectedCause);

  return (
    <>
      <PageHero
        label="Donate"
        title="Make Your Impact"
        description="Every dollar goes directly toward transforming lives. Choose how you'd like to help."
      />

      <TrustBar />

      {/* ============================================ */}
      {/* DONATION FORM + IMPACT PANEL */}
      {/* ============================================ */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form – 2 cols */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleDonate}
                className="rounded-3xl bg-white border border-border p-8 shadow-sm space-y-8"
              >
                {/* Step 1: Amount */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">
                    1. Choose an Amount
                  </h3>
                  <p className="text-sm text-muted mb-4">
                    Select a preset amount or enter your own.
                  </p>

                  {/* One-time / Monthly toggle */}
                  <div className="flex items-center gap-3 mb-6">
                    <button
                      type="button"
                      onClick={() => setIsMonthly(false)}
                      className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                        !isMonthly
                          ? "bg-primary text-white shadow-sm"
                          : "bg-surface-alt text-charcoal hover:bg-primary/10"
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMonthly(true)}
                      className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                        isMonthly
                          ? "bg-primary text-white shadow-sm"
                          : "bg-surface-alt text-charcoal hover:bg-primary/10"
                      }`}
                    >
                      Monthly
                    </button>
                  </div>

                  {/* Preset chips */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
                    {presetAmounts.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => {
                          setAmount(a);
                          setCustomAmount("");
                        }}
                        className={`rounded-xl py-3 text-sm font-semibold transition-all ${
                          amount === a && !customAmount
                            ? "bg-primary text-white shadow-md"
                            : "bg-surface-alt text-navy hover:bg-primary/10 border border-border"
                        }`}
                      >
                        ${a}
                      </button>
                    ))}
                  </div>

                  {/* Custom amount */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-medium">
                      $
                    </span>
                    <input
                      type="number"
                      min="1"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        if (e.target.value) setAmount(Number(e.target.value));
                      }}
                      className="w-full rounded-xl border border-border pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Step 2: Choose Cause */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">
                    2. Choose a Cause
                  </h3>
                  <p className="text-sm text-muted mb-4">
                    Direct your donation to a specific program or our general
                    fund.
                  </p>
                  <select
                    value={selectedCause}
                    onChange={(e) => setSelectedCause(e.target.value)}
                    className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                    aria-label="Select cause"
                  >
                    <option value="">General Fund (Where needed most)</option>
                    {causes.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                  {selectedCauseData && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-sm text-muted bg-primary/5 rounded-xl p-3"
                    >
                      {selectedCauseData.excerpt}
                    </motion.p>
                  )}
                </div>

                {/* Step 3: Your Info */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">
                    3. Your Information
                  </h3>
                  <p className="text-sm text-muted mb-4">
                    Optional — but helps us send your tax receipt.
                  </p>

                  {/* Anonymous toggle */}
                  <label className="flex items-center gap-3 mb-4 cursor-pointer">
                    <div
                      className={`relative flex h-6 w-11 items-center rounded-full transition-colors ${
                        anonymous ? "bg-primary" : "bg-border"
                      }`}
                      onClick={() => setAnonymous(!anonymous)}
                    >
                      <div
                        className={`absolute h-4 w-4 rounded-full bg-white shadow transition-transform ${
                          anonymous ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </div>
                    <span className="text-sm text-charcoal">
                      Donate anonymously
                    </span>
                  </label>

                  {!anonymous && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid sm:grid-cols-2 gap-4"
                    >
                      <div>
                        <label htmlFor="donor-name" className="block text-sm font-medium text-navy mb-1.5">
                          Full Name
                        </label>
                        <input
                          id="donor-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="donor-email" className="block text-sm font-medium text-navy mb-1.5">
                          Email
                        </label>
                        <input
                          id="donor-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Step 4: Payment Method */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">
                    4. Payment Method
                  </h3>
                  <p className="text-sm text-muted mb-4">
                    All transactions are securely processed (UI demonstration).
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {paymentMethods.map((pm) => (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => setPaymentMethod(pm.id)}
                        className={`flex flex-col items-center gap-2 rounded-xl py-4 text-sm font-medium transition-all ${
                          paymentMethod === pm.id
                            ? "bg-primary/10 border-2 border-primary text-primary"
                            : "bg-surface-alt border border-border text-charcoal hover:border-primary/30"
                        }`}
                      >
                        <pm.icon className="h-6 w-6" />
                        {pm.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="h-5 w-5" />
                  Donate ${customAmount || amount}
                  {isMonthly ? "/month" : ""}
                </button>

                {/* Reassurance */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted pt-4 border-t border-border">
                  <span className="flex items-center gap-1">
                    <Lock className="h-3.5 w-3.5" /> 256-bit SSL encrypted
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="h-3.5 w-3.5" /> Secure payment processing
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="h-3.5 w-3.5" /> Tax receipt emailed
                  </span>
                </div>
              </form>
            </div>

            {/* Impact Side Panel – 1 col */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-white border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy mb-4">
                  Your Impact
                </h3>
                <div className="space-y-3">
                  {donationTiers.map((tier, i) => (
                    <DonationTierCard
                      key={tier.amount}
                      {...tier}
                      selected={amount === tier.amount}
                      onSelect={() => {
                        setAmount(tier.amount);
                        setCustomAmount("");
                      }}
                      index={i}
                    />
                  ))}
                </div>
              </div>

              {/* Reassurance panel */}
              <div className="rounded-3xl bg-primary/5 border border-primary/10 p-6">
                <h4 className="text-sm font-bold text-navy mb-4">
                  Your Donation is Protected
                </h4>
                <ul className="space-y-3">
                  {[
                    { icon: Eye, text: "100% transparent — see where funds go" },
                    { icon: Lock, text: "Encrypted & secure transactions" },
                    { icon: FileText, text: "Tax-deductible receipt via email" },
                    { icon: Shield, text: "Registered 501(c)(3) nonprofit" },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-charcoal"
                    >
                      <item.icon className="h-4 w-4 text-primary shrink-0" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DONOR WALL */}
      {/* ============================================ */}
      <section className="py-16 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Supporters"
            title="Donor Wall"
            description="A heartfelt thank you to everyone who has contributed to our mission."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {donorWall.map((donor, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-5 py-2.5 text-sm text-charcoal hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <Gift className="h-4 w-4 text-primary" />
                {donor}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
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

      {/* ============================================ */}
      {/* THANK YOU MODAL */}
      {/* ============================================ */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={closeThankYou}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
            >
              <button
                onClick={closeThankYou}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-alt text-muted transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-6"
                >
                  <Heart className="h-10 w-10" />
                </motion.div>
                <h2 className="text-2xl font-bold text-navy">
                  Thank You for Your Generosity!
                </h2>
                <p className="mt-3 text-muted leading-relaxed">
                  Your {isMonthly ? "monthly " : ""}donation of{" "}
                  <strong className="text-navy">
                    ${customAmount || amount}
                  </strong>{" "}
                  {selectedCauseData
                    ? `to ${selectedCauseData.title}`
                    : "to our General Fund"}{" "}
                  will make a real difference.
                </p>

                {activeTier && (
                  <div className="mt-6 rounded-2xl bg-primary/5 p-4">
                    <p className="text-sm font-semibold text-navy mb-2">
                      Your Impact:
                    </p>
                    <p className="text-sm text-charcoal">
                      {activeTier.impact}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {activeTier.details.map((d, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-center gap-2 text-xs text-muted"
                        >
                          <Check className="h-3 w-3 text-primary" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="mt-6 text-xs text-muted">
                  A confirmation and tax receipt will be sent to your email.
                </p>

                <button
                  onClick={closeThankYou}
                  className="mt-6 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
