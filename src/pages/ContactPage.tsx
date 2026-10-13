import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { notifyToast } from '../store/finovaStore';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    notifyToast('Message Dispatched', 'Thank you for reaching out. Your demo message was recorded locally.');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
          <span>Inquiries & Feedback</span>
          <span>·</span>
          <span>Internship Capstone Communication</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Get in Touch with Finova
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Questions regarding our financial models, feedback on curriculum guides, or academic inquiries about the engineering architecture behind this internship capstone.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Form Column */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Message Received</h2>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Because this is a frontend-only capstone project, your submission was handled locally without external API telemetry.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                }}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors mt-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-slate-800 cursor-pointer"
                >
                  <option value="General Inquiry">General Product Inquiry</option>
                  <option value="Curriculum Question">Curriculum & Guide Clarification</option>
                  <option value="Calculator Feedback">Financial Tool Feedback</option>
                  <option value="Capstone Assessment">Web Development Capstone Assessment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry or feedback in detail..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-slate-800 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-4">
            <h2 className="text-base font-bold text-slate-900">Project Communications</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Finova is built and maintained as a Computer Science & Engineering Web Development Internship Capstone Project.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Lead Developer</span>
                  <span className="text-slate-600">Nagaraj Harwadekar</span>
                  <span className="text-slate-500 block text-[11px]">Computer Science & Engineering Student</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Project Inquiries</span>
                  <span className="text-slate-600">Submit through the local form above for capstone review</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs text-slate-600 space-y-2">
            <h3 className="font-semibold text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Data Protection Guarantee</span>
            </h3>
            <p className="leading-relaxed">
              Your contact details are processed strictly in the browser during this demo session and are never sold, transferred, or transmitted to commercial marketing brokers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
