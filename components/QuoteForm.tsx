'use client';

import React, { useState } from 'react';
import {
  SERVICE_OPTIONS,
  VEHICLE_SIZES,
  SITE_CONFIG,
} from '@/lib/site-data';
import { WhatsAppIcon } from './icons/BrandIcons';
import { Send, CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface QuoteFormProps {
  initialService?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export function QuoteForm({ initialService = '', onSuccess, isModal = false }: QuoteFormProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleMakeModel, setVehicleMakeModel] = useState('');
  const [vehicleSize, setVehicleSize] = useState('saloon');
  const [service, setService] = useState(
    initialService || 'Ceramic Pro 9H Coating (Bronze / Silver / Gold)'
  );
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update if initialService prop changes
  React.useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift server processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  const generateWhatsAppUrl = () => {
    const selectedSizeObj = VEHICLE_SIZES.find((s) => s.id === vehicleSize);
    const sizeName = selectedSizeObj ? selectedSizeObj.name : vehicleSize;

    const message = `Hello Latin King Detailing, I would like a quote for ceramic coating / car protection:

• Name: ${fullName || 'Not provided'}
• Vehicle: ${vehicleMakeModel || 'Not provided'} (${sizeName})
• Service: ${service}
• Phone: ${phone || 'Not provided'}
${notes ? `• Notes: ${notes}` : ''}

Looking forward to hearing from your Bolton workshop team!`;

    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  if (isSubmitted) {
    return (
      <div className="p-6 sm:p-8 text-center bg-[#1d1e25] rounded-2xl border border-amber-500/30 text-white shadow-xl">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Quote Request Received!</h3>
        <p className="text-zinc-300 text-sm max-w-md mx-auto mb-6">
          Thank you, <span className="font-semibold text-amber-400">{fullName || 'there'}</span>.
          Our Ceramic Pro certified technicians at the Bolton workshop will review your{' '}
          <span className="font-semibold text-white">{vehicleMakeModel || 'vehicle'}</span> and respond
          within 15 minutes.
        </p>

        <div className="bg-zinc-800/80 rounded-xl p-4 mb-6 border border-zinc-700/60 text-left text-xs sm:text-sm space-y-2 text-zinc-300">
          <div className="flex justify-between">
            <span className="text-zinc-400">Vehicle:</span>
            <span className="font-medium text-white">{vehicleMakeModel || 'Pending'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Requested Service:</span>
            <span className="font-medium text-amber-400">{service}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Workshop:</span>
            <span className="font-medium text-white">115 Albert Rd, Bolton (BL4 9EA)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Chat Instantly on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-medium transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
            Your Full Name *
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. James Taylor"
            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-[#16171d] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
            Phone / WhatsApp Number *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 07482 225323"
            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-[#16171d] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
            Vehicle Make & Model *
          </label>
          <input
            type="text"
            required
            value={vehicleMakeModel}
            onChange={(e) => setVehicleMakeModel(e.target.value)}
            placeholder="e.g. BMW M5 F10 / Range Rover Sport"
            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-[#16171d] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
            Vehicle Size Category
          </label>
          <select
            value={vehicleSize}
            onChange={(e) => setVehicleSize(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-[#16171d] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm transition-all"
          >
            {VEHICLE_SIZES.map((sz) => (
              <option key={sz.id} value={sz.id}>
                {sz.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
          Service Interested In *
        </label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-[#16171d] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm transition-all"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
          Specific Notes or Vehicle Condition (Optional)
        </label>
        <textarea
          rows={isModal ? 2 : 3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="e.g. Looking to remove wash swirls, brand new car pickup next Friday, or interested in front-end PPF."
          className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-[#16171d] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm transition-all resize-none"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-amber-500/25 disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Processing...</span>
          ) : (
            <>
              <Send className="w-4 h-4 text-zinc-950" />
              <span>Get Free Quote Now</span>
            </>
          )}
        </button>

        <a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-sm"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Quote via WhatsApp</span>
        </a>
      </div>

      <div className="flex items-center justify-between pt-2 text-[11px] text-zinc-500 dark:text-zinc-400">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-amber-500" /> Fast response in &lt;15 mins
        </span>
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> Ceramic Pro Certified
        </span>
        <span className="hidden sm:flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> No obligation
        </span>
      </div>
    </form>
  );
}

