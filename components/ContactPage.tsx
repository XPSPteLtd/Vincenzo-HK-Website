
import React, { useState } from 'react';
import { Mail, MessageSquare, Users, Calendar, MapPin, Phone, Clock, ChevronRight, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const t = translations[lang].contactPage;
  const commonT = translations[lang].location;
  const isHK = lang === 'hk';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://gotti-website-form-handler.azurewebsites.net/api/processForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Vincenzo Capuano Hong Kong',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, ''); // Only digits
    if (val.length <= 8) {
      setFormData({ ...formData, phone: val });
    }
  };

  // HK Mobile Validation: Starts with 2-9 and is 8 digits
  const isPhoneValid = formData.phone === '' || /^[2-9]\d{7}$/.test(formData.phone);

  return (
    <div className="bg-charcoal min-h-screen pt-24 lg:pt-40 pb-24 relative overflow-hidden">
      
      {/* Ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-gold/[0.03] blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/[0.02] blur-[120px]" />
      </div>
      
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 mb-16 md:mb-24">
        <div className="max-w-3xl">
          <span className="text-gold/60 tracking-[0.3em] text-[11px] uppercase font-bold mb-4 block">
            {t.eyebrow}
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-[1.1] mb-6">
            {t.title}
          </h1>
          <p className="text-white/50 text-base md:text-lg font-sans font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Reason Selectors */}
      <section className="max-w-6xl mx-auto px-6 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white/[0.03] border border-white/[0.08] p-8 rounded-2xl hover:border-gold/30 hover:bg-white/[0.05] transition-all duration-500 group">
            <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare size={20} className="text-gold" />
            </div>
            <h3 className="text-white text-lg font-bold mb-3">{t.reasons.general.title}</h3>
            <p className="text-white/40 text-sm font-sans font-light leading-relaxed">
              {t.reasons.general.desc}
            </p>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.08] p-8 rounded-2xl hover:border-gold/30 hover:bg-white/[0.05] transition-all duration-500 group">
            <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
              <Users size={20} className="text-gold" />
            </div>
            <h3 className="text-white text-lg font-bold mb-3">{t.reasons.group.title}</h3>
            <p className="text-white/40 text-sm font-sans font-light leading-relaxed">
              {t.reasons.group.desc}
            </p>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.08] p-8 rounded-2xl hover:border-gold/30 hover:bg-white/[0.05] transition-all duration-500 group">
            <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
              <Calendar size={20} className="text-gold" />
            </div>
            <h3 className="text-white text-lg font-bold mb-3">{t.reasons.events.title}</h3>
            <p className="text-white/40 text-sm font-sans font-light leading-relaxed">
              {t.reasons.events.desc}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mb-16 md:mb-24">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Main Content: Form & Info */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16 md:gap-24">
        
        {/* Form Column */}
        <div className="lg:col-span-3">
          <h2 className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-8">
            {t.form.title}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                  {t.form.fullName} <span className="text-gold">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder={t.form.fullNamePlaceholder}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 px-5 py-4 text-white font-sans text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                  {t.form.email} <span className="text-gold">*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder={t.form.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 px-5 py-4 text-white font-sans text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                  {t.form.phone} {isHK ? '(8位數字)' : '(8 Digits)'}
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 text-sm font-sans">+852</span>
                  <input
                    type="tel"
                    placeholder="0000 0000"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full bg-white/[0.02] border ${!isPhoneValid && formData.phone ? 'border-red-500/50' : 'border-white/10'} pl-16 pr-5 py-4 text-white font-sans text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors`}
                  />
                </div>
                {!isPhoneValid && formData.phone && (
                  <p className="text-[10px] text-red-400/80 mt-1.5 uppercase tracking-widest">
                    {isHK ? '請輸入有效的 8 位香港電話號碼' : 'Enter a valid 8-digit HK number'}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                  {t.form.subject} <span className="text-gold">*</span>
                </label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 px-5 py-4 text-white font-sans text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-charcoal">{t.form.subjectPlaceholder}</option>
                  <option value="General Enquiry" className="bg-charcoal">{t.form.subjects.general}</option>
                  <option value="Reservation Question" className="bg-charcoal">{t.form.subjects.reservation}</option>
                  <option value="Feedback" className="bg-charcoal">{t.form.subjects.feedback}</option>
                  <option value="Other" className="bg-charcoal">{t.form.subjects.other}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                {t.form.message} <span className="text-gold">*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder={t.form.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/10 px-5 py-4 text-white font-sans text-sm placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading' || (formData.phone !== '' && !isPhoneValid)}
                className="inline-flex items-center gap-3 bg-gold hover:bg-white text-charcoal px-10 py-4 font-bold text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-gold/10"
              >
                {status === 'loading' ? (
                  <div className="w-4 h-4 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                ) : (
                  <Send size={14} />
                )}
                {t.form.submit}
              </button>
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-3 text-gold bg-gold/5 border border-gold/20 p-4 rounded-xl animate-fade-in">
                <CheckCircle size={18} />
                <p className="text-sm font-medium">{t.form.success}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 text-red-400 bg-red-400/5 border border-red-400/20 p-4 rounded-xl animate-fade-in">
                <AlertCircle size={18} />
                <p className="text-sm font-medium">{t.form.error}</p>
              </div>
            )}
          </form>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-8">
              {t.visit.title}
            </h2>
            
            <div className="space-y-6">
              {/* Location */}
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl flex items-start gap-5">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-xl shrink-0 mt-1">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                    {t.visit.location}
                  </p>
                  <p className="text-white text-sm font-sans font-light leading-relaxed">
                    {commonT.street}<br />
                    {commonT.unit}<br />
                    {commonT.district}
                  </p>
                  <p className="text-white/20 text-[11px] mt-2 italic">
                    {t.visit.mtrInfo}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl flex items-start gap-5">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-xl shrink-0 mt-1">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                    {t.visit.phone}
                  </p>
                  <a href="tel:+85228022802" className="text-white text-lg font-bold hover:text-gold transition-colors block">
                    +852-2802 2802
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl flex items-start gap-5">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-xl shrink-0 mt-1">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                    {t.visit.hours}
                  </p>
                  <div className="space-y-1">
                    <p className="text-white text-sm font-sans font-light">{commonT.lunch} &nbsp;12:00 – 15:00</p>
                    <p className="text-white text-sm font-sans font-light">{commonT.dinner} &nbsp;18:00 – 23:00</p>
                  </div>
                  <p className="text-white/30 text-[11px] mt-2">
                    {commonT.sevenDays}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="tel:+85228022802"
            className="flex items-center justify-between w-full bg-white/[0.03] border border-white/10 px-6 py-5 rounded-2xl group hover:border-gold/30 transition-all"
          >
            <span className="text-white/50 text-xs font-sans font-light">
              {t.visit.callDirect}
            </span>
            <ChevronRight size={14} className="text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </section>

    </div>
  );
};
