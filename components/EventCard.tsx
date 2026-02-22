"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Event } from "@/lib/data";
import { formatDate } from "@/lib/utils";

interface EventCardProps {
  event: Event;
  index?: number;
  onRegister?: (event: Event) => void;
}

export default function EventCard({ event, index = 0, onRegister }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span
          className={`absolute top-3 right-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
            event.status === "upcoming"
              ? "bg-primary text-white"
              : "bg-white/80 text-muted"
          }`}
        >
          {event.status === "upcoming" ? "Upcoming" : "Past Event"}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Calendar className="h-4 w-4 text-primary" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Clock className="h-4 w-4 text-primary" />
            {event.time}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-primary" />
            {event.location}
          </div>
        </div>
        <p className="mt-3 text-sm text-muted line-clamp-2">
          {event.description}
        </p>
        {event.status === "upcoming" && (
          <button
            onClick={() => onRegister?.(event)}
            className="mt-4 w-full rounded-xl bg-primary/10 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Register Now
          </button>
        )}
      </div>
    </motion.div>
  );
}
