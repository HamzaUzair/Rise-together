"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  X,
  ArrowRight,
  PartyPopper,
  Check,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import CTASection from "@/components/CTASection";
import { events, Event } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function EventsPageClient() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [registered, setRegistered] = useState(false);

  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
  };

  const confirmRegistration = () => {
    setRegistered(true);
    setTimeout(() => {
      setRegistered(false);
      setSelectedEvent(null);
    }, 3000);
  };

  return (
    <>
      <PageHero
        label="Events"
        title="Upcoming & Past Events"
        description="Join us at our next event — from charity galas to community runs, there's always a way to connect."
      />

      {/* ============================================ */}
      {/* UPCOMING EVENTS */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Mark Your Calendar"
            title="Upcoming Events"
            description="Don't miss these opportunities to connect, contribute, and celebrate impact."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((event, i) => (
              <EventCard
                key={event.id}
                event={event}
                index={i}
                onRegister={handleRegister}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PAST EVENTS GALLERY */}
      {/* ============================================ */}
      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Looking Back"
            title="Past Events"
            description="A gallery of the events and moments that brought our community together."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {past.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[30%]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-white/80">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(event.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location.split(",")[0]}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Host an event CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-secondary/10 to-primary/10 border border-border p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary shrink-0">
                <PartyPopper className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">
                  Host an Event with RiseTogether
                </h3>
                <p className="mt-2 text-muted max-w-lg">
                  Want to organize a charity event in your community? We provide
                  planning support, materials, and our team to make it a
                  success.
                </p>
              </div>
            </div>
            <button className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-all">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <CTASection />

      {/* ============================================ */}
      {/* EVENT DETAIL MODAL */}
      {/* ============================================ */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => {
              setSelectedEvent(null);
              setRegistered(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                  sizes="512px"
                />
                <button
                  onClick={() => {
                    setSelectedEvent(null);
                    setRegistered(false);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                {registered ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-navy">
                      You&apos;re Registered!
                    </h3>
                    <p className="mt-2 text-muted">
                      We&apos;ll send a confirmation email with all the details.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-navy">
                      {selectedEvent.title}
                    </h3>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-3 text-sm text-muted">
                        <Calendar className="h-4 w-4 text-primary" />
                        {formatDate(selectedEvent.date)}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted">
                        <Clock className="h-4 w-4 text-primary" />
                        {selectedEvent.time}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted">
                        <MapPin className="h-4 w-4 text-primary" />
                        {selectedEvent.location}
                      </div>
                    </div>
                    <p className="mt-4 text-muted leading-relaxed">
                      {selectedEvent.description}
                    </p>
                    <button
                      onClick={confirmRegistration}
                      className="mt-6 w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-all"
                    >
                      Register for This Event
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
