"use client";

import { motion } from "framer-motion";
import { FileText, Download, CheckCircle } from "lucide-react";
import { Report } from "@/lib/data";

interface ReportCardProps {
  report: Report;
  index?: number;
}

export default function ReportCard({ report, index = 0 }: ReportCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-2xl bg-white border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
          <FileText className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-navy">{report.title}</h3>
          <ul className="mt-3 space-y-2">
            {report.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                {h}
              </li>
            ))}
          </ul>
          <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors">
            <Download className="h-4 w-4" />
            Download Report
          </button>
        </div>
      </div>
    </motion.div>
  );
}
