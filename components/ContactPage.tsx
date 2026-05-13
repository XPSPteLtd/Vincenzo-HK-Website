
import React, { useState } from 'react';
import {
  MessageSquare, Users, Calendar,
  Send, CheckCircle, AlertCircle,
  ChevronDown, ChevronRight,
  MapPin, Phone, Clock,
} from 'lucide-react';
import { Language, translations } from '../translations';

type ContactType = 'general' | 'group' | 'event';
type FormState = 'idle' | 'loading' | 'success' | 'error';

const FORM_API = 'https://gotti-website-form-handler.azurewebsites.net/api/processForm';
const RECIPIENTS = 'rm@vincenzocapuano.sg,hello@vincenzocapuano.sg,arvind@kuisinekoncepts.com,ritesh@kuisinekoncepts.com,rohan@kuisinekoncepts.com';

const inputCls = 'w-full bg-black/40 border border-white/10 text-white text-sm font-sans px-4 py-3 placeholder-white/20 focus:border-gold/50 focus:outline-none transition-colors';
const lblCls   = 'block text-[10px] font-bold uppercase tracking-[0.2em] text-gold/70 mb-1.5';

async function submitForm(formId: string, data: Record<string, string>) {
  const res = await fetch(FORM_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      formId,
      brandName: 'Vincenzo Capuano Hong Kong',
      recipients: RECIPIENTS,
      data,
    }),
  });
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(json.error || 'Something went wrong.');
}

function SuccessState({ name, onReset, isHK }: { name: string; onReset: () => void, isHK: boolean }) {
  return (
    <div className="flex flex-col items-center text-center py-12">
      <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
        <CheckCircle size={30} className="text-gold" />
      </div>
      <h3 className="font-display text-2xl text-white mb-2">{isHK ? '訊息已發送' : 'Message Sent'}</h3>
      <p className="text-white/50 text-sm font-sans font-light max-w-xs leading-relaxed">
        {isHK ? '謝謝' : 'Thank you'}{name ? <>, <span className="text-white font-medium">{name}</span></> : null}.{' '}
        {isHK ? '我們將於 24 小時內與您聯絡。' : "We'll be in touch within 24 hours."}
      </p>
      <button
        onClick={onReset}
        className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gold hover:text-white transition-colors"
      >
        {isHK ? '發送另一則訊息' : 'Send Another Message'}
      </button>
    </div>
  );
}

function ErrorBanner({ msg }: { msg: string }) {
  return (
    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 px-4 py-3">
      <AlertCircle size={14} className="text-red-400 shrink-0 mt-0.5" />
      <p className="text-red-400 text-xs font-sans leading-relaxed">{msg}</p>
    </div>
  );
}

function SubmitBtn({ loading, label }: { loading: boolean; label: string }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-flex items-center gap-2.5 bg-gold hover:bg-white text-charcoal text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 transition-all shadow-lg shadow-gold/10 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <span className="w-3.5 h-3.5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
        </>
      ) : (
        <>
          {label}
          <Send size={13} />
        </>
      )}
    </button>
  );
}

function SelectWrap({ value, onChange, required, placeholder, children }: {
  value: string; onChange: React.ChangeEventHandler<HTMLSelectElement>;
  required?: boolean; placeholder: string; children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select
        required={required}
        value={value}
        onChange={onChange}
        className={`${inputCls} appearance-none cursor-pointer ${!value ? 'text-white/20' : 'text-white'}`}
      >
        <option value="" disabled>{placeholder}</option>
        {children}
      </select>
      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/40 pointer-events-none" />
    </div>
  );
}

// ─────────────────────────────────────────────
// Form 1 — General Enquiry
// ─────────────────────────────────────────────
function GeneralForm({ lang }: { lang: Language }) {
  const t = translations[lang].contactPage.form;
  const isHK = lang === 'hk';
  const [fs, setFs] = useState<FormState>('idle');
  const [err, setErr] = useState('');
  const [f, setF] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const s = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));

  const reset = () => { setFs('idle'); setErr(''); setF({ name: '', email: '', phone: '', subject: '', message: '' }); };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 8) setF(p => ({ ...p, phone: val }));
  };
  const isPhoneValid = f.phone === '' || /^[2-9]\d{7}$/.test(f.phone);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPhoneValid) return;
    setFs('loading'); setErr('');
    try {
      await submitForm('contact', f);
      setFs('success');
    } catch (ex: any) {
      setErr(ex.message); setFs('error');
    }
  };

  if (fs === 'success') return <SuccessState name={f.name} onReset={reset} isHK={isHK} />;

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lblCls}>{t.fullName} <span className="text-red-400/80">*</span></label>
          <input type="text" required value={f.name} onChange={s('name')} className={inputCls} placeholder={t.fullNamePlaceholder} />
        </div>
        <div>
          <label className={lblCls}>{t.email} <span className="text-red-400/80">*</span></label>
          <input type="email" required value={f.email} onChange={s('email')} className={inputCls} placeholder={t.emailPlaceholder} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lblCls}>{t.phone} {isHK ? '(8位數字)' : '(8 Digits)'}</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm font-sans">+852</span>
            <input type="tel" value={f.phone} onChange={handlePhoneChange} className={`${inputCls} pl-16 ${!isPhoneValid && f.phone ? 'border-red-500/50' : ''}`} placeholder="0000 0000" />
          </div>
          {!isPhoneValid && f.phone && (
            <p className="text-[10px] text-red-400/80 mt-1.5 uppercase tracking-widest">
              {isHK ? '請輸入有效的 8 位香港電話號碼' : 'Enter a valid 8-digit HK number'}
            </p>
          )}
        </div>
        <div>
          <label className={lblCls}>{t.subject} <span className="text-red-400/80">*</span></label>
          <SelectWrap required value={f.subject} onChange={s('subject')} placeholder={t.subjectPlaceholder}>
            <option value="General Enquiry" className="bg-charcoal">{t.subjects.general}</option>
            <option value="Reservation Question" className="bg-charcoal">{t.subjects.reservation}</option>
            <option value="Feedback" className="bg-charcoal">{t.subjects.feedback}</option>
            <option value="Other" className="bg-charcoal">{t.subjects.other}</option>
          </SelectWrap>
        </div>
      </div>

      <div>
        <label className={lblCls}>{t.message} <span className="text-red-400/80">*</span></label>
        <textarea required rows={5} value={f.message} onChange={s('message')} className={`${inputCls} resize-none`} placeholder={t.messagePlaceholder} />
      </div>

      {fs === 'error' && <ErrorBanner msg={err || t.error} />}
      <div className="pt-1">
        <SubmitBtn loading={fs === 'loading'} label={t.submit} />
      </div>
    </form>
  );
}

// ─────────────────────────────────────────────
// Form 2 — Group Dining
// ─────────────────────────────────────────────
function GroupForm({ lang }: { lang: Language }) {
  const t = translations[lang].contactPage.form;
  const isHK = lang === 'hk';
  const [fs, setFs] = useState<FormState>('idle');
  const [err, setErr] = useState('');
  const [dietary, setDietary] = useState<string[]>([]);
  const [f, setF] = useState({ name: '', email: '', phone: '', groupSize: '', date: '', time: '', occasion: '', specialRequests: '' });
  const s = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));

  const toggleDietary = (item: string) =>
    setDietary(p => p.includes(item) ? p.filter(d => d !== item) : [...p, item]);

  const reset = () => { setFs('idle'); setErr(''); setDietary([]); setF({ name: '', email: '', phone: '', groupSize: '', date: '', time: '', occasion: '', specialRequests: '' }); };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 8) setF(p => ({ ...p, phone: val }));
  };
  const isPhoneValid = f.phone === '' || /^[2-9]\d{7}$/.test(f.phone);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPhoneValid) return;
    setFs('loading'); setErr('');
    try {
      await submitForm('group-booking', { ...f, dietary: dietary.length ? dietary.join(', ') : 'None specified' });
      setFs('success');
    } catch (ex: any) {
      setErr(ex.message); setFs('error');
    }
  };

  if (fs === 'success') return <SuccessState name={f.name} onReset={reset} isHK={isHK} />;

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lblCls}>{t.fullName} <span className="text-red-400/80">*</span></label>
          <input type="text" required value={f.name} onChange={s('name')} className={inputCls} placeholder={t.fullNamePlaceholder} />
        </div>
        <div>
          <label className={lblCls}>{t.email} <span className="text-red-400/80">*</span></label>
          <input type="email" required value={f.email} onChange={s('email')} className={inputCls} placeholder={t.emailPlaceholder} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lblCls}>{t.phone} {isHK ? '(8位數字)' : '(8 Digits)'}</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm font-sans">+852</span>
            <input type="tel" value={f.phone} onChange={handlePhoneChange} className={`${inputCls} pl-16 ${!isPhoneValid && f.phone ? 'border-red-500/50' : ''}`} placeholder="0000 0000" />
          </div>
          {!isPhoneValid && f.phone && (
            <p className="text-[10px] text-red-400/80 mt-1.5 uppercase tracking-widest">
              {isHK ? '請輸入有效的 8 位香港電話號碼' : 'Enter a valid 8-digit HK number'}
            </p>
          )}
        </div>
        <div>
          <label className={lblCls}>{isHK ? '人數' : 'Group Size'} <span className="text-red-400/80">*</span></label>
          <SelectWrap required value={f.groupSize} onChange={s('groupSize')} placeholder={isHK ? '選擇人數' : 'Select size'}>
            <option className="bg-charcoal">4–6 {isHK ? '人' : 'guests'}</option>
            <option className="bg-charcoal">7–10 {isHK ? '人' : 'guests'}</option>
            <option className="bg-charcoal">11–15 {isHK ? '人' : 'guests'}</option>
            <option className="bg-charcoal">15–20 {isHK ? '人' : 'guests'}</option>
            <option className="bg-charcoal">20+ {isHK ? '人' : 'guests'}</option>
          </SelectWrap>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lblCls}>{isHK ? '首選日期' : 'Preferred Date'} <span className="text-red-400/80">*</span></label>
          <input type="date" required value={f.date} onChange={s('date')} min={new Date().toISOString().split('T')[0]} className={`${inputCls} cursor-pointer [color-scheme:dark]`} />
        </div>
        <div>
          <label className={lblCls}>{isHK ? '首選時段' : 'Preferred Session'} <span className="text-red-400/80">*</span></label>
          <SelectWrap required value={f.time} onChange={s('time')} placeholder={isHK ? '選擇時段' : 'Select session'}>
            <option className="bg-charcoal">{isHK ? '午市 — 12:00 至 15:00' : 'Lunch — 12:00 to 15:00'}</option>
            <option className="bg-charcoal">{isHK ? '晚市 — 18:00 至 23:00' : 'Dinner — 18:00 to 23:00'}</option>
          </SelectWrap>
        </div>
      </div>

      <div>
        <label className={lblCls}>{isHK ? '場合' : 'Occasion'} <span className="text-red-400/80">*</span></label>
        <SelectWrap required value={f.occasion} onChange={s('occasion')} placeholder={isHK ? '選擇場合' : 'Select occasion'}>
          <option className="bg-charcoal">{isHK ? '生日' : 'Birthday'}</option>
          <option className="bg-charcoal">{isHK ? '週年紀念' : 'Anniversary'}</option>
          <option className="bg-charcoal">{isHK ? '公司聚餐' : 'Corporate Dinner'}</option>
          <option className="bg-charcoal">{isHK ? '團隊聚會' : 'Team Gathering'}</option>
          <option className="bg-charcoal">{isHK ? '朋友聚會' : 'Friends Get-together'}</option>
          <option className="bg-charcoal">{isHK ? '其他' : 'Other'}</option>
        </SelectWrap>
      </div>

      <div>
        <label className={lblCls}>{isHK ? '飲食要求' : 'Dietary Requirements'}</label>
        <div className="flex flex-wrap gap-2 mt-1">
          {['Vegetarian', 'Vegan', 'Halal', 'Gluten-Free', 'Nut Allergy'].map(item => (
            <button key={item} type="button" onClick={() => toggleDietary(item)}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] border transition-all ${
                dietary.includes(item)
                  ? 'bg-gold/20 border-gold/50 text-gold'
                  : 'bg-white/5 border-white/10 text-white/40 hover:border-white/25 hover:text-white/60'
              }`}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={lblCls}>{isHK ? '特別要求' : 'Special Requests'}</label>
        <textarea rows={3} value={f.specialRequests} onChange={s('specialRequests')}
          className={`${inputCls} resize-none`}
          placeholder={isHK ? '任何特別安排、過敏或給團隊的備註...' : 'Any special arrangements, allergies, or notes for the team…'} />
      </div>

      {fs === 'error' && <ErrorBanner msg={err || t.error} />}
      <div className="pt-1"><SubmitBtn loading={fs === 'loading'} label={isHK ? '提交團體預訂' : 'Request Group Booking'} /></div>
    </form>
  );
}

// ─────────────────────────────────────────────
// Form 3 — Private Event
// ─────────────────────────────────────────────
function EventForm({ lang }: { lang: Language }) {
  const t = translations[lang].contactPage.form;
  const isHK = lang === 'hk';
  const [fs, setFs] = useState<FormState>('idle');
  const [err, setErr] = useState('');
  const [f, setF] = useState({ name: '', company: '', email: '', phone: '', eventDate: '', guestCount: '', eventType: '', budget: '', requirements: '' });
  const s = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));

  const reset = () => { setFs('idle'); setErr(''); setF({ name: '', company: '', email: '', phone: '', eventDate: '', guestCount: '', eventType: '', budget: '', requirements: '' }); };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 8) setF(p => ({ ...p, phone: val }));
  };
  const isPhoneValid = f.phone === '' || /^[2-9]\d{7}$/.test(f.phone);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPhoneValid) return;
    setFs('loading'); setErr('');
    try {
      await submitForm('event-booking', f);
      setFs('success');
    } catch (ex: any) {
      setErr(ex.message); setFs('error');
    }
  };

  if (fs === 'success') return <SuccessState name={f.name} onReset={reset} isHK={isHK} />;

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lblCls}>{t.fullName} <span className="text-red-400/80">*</span></label>
          <input type="text" required value={f.name} onChange={s('name')} className={inputCls} placeholder={t.fullNamePlaceholder} />
        </div>
        <div>
          <label className={lblCls}>{isHK ? '公司 / 機構' : 'Company / Organisation'}</label>
          <input type="text" value={f.company} onChange={s('company')} className={inputCls} placeholder={isHK ? '選填' : 'Optional'} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lblCls}>{t.email} <span className="text-red-400/80">*</span></label>
          <input type="email" required value={f.email} onChange={s('email')} className={inputCls} placeholder={t.emailPlaceholder} />
        </div>
        <div>
          <label className={lblCls}>{t.phone} {isHK ? '(8位數字)' : '(8 Digits)'}</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm font-sans">+852</span>
            <input type="tel" value={f.phone} onChange={handlePhoneChange} className={`${inputCls} pl-16 ${!isPhoneValid && f.phone ? 'border-red-500/50' : ''}`} placeholder="0000 0000" />
          </div>
          {!isPhoneValid && f.phone && (
            <p className="text-[10px] text-red-400/80 mt-1.5 uppercase tracking-widest">
              {isHK ? '請輸入有效的 8 位香港電話號碼' : 'Enter a valid 8-digit HK number'}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lblCls}>{isHK ? '活動日期' : 'Event Date'} <span className="text-red-400/80">*</span></label>
          <input type="date" required value={f.eventDate} onChange={s('eventDate')} min={new Date().toISOString().split('T')[0]} className={`${inputCls} cursor-pointer [color-scheme:dark]`} />
        </div>
        <div>
          <label className={lblCls}>{isHK ? '預計人數' : 'Estimated Guests'} <span className="text-red-400/80">*</span></label>
          <input type="number" required min={10} max={200} value={f.guestCount} onChange={s('guestCount')} className={inputCls} placeholder="e.g. 40" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lblCls}>{isHK ? '活動類型' : 'Event Type'} <span className="text-red-400/80">*</span></label>
          <SelectWrap required value={f.eventType} onChange={s('eventType')} placeholder={isHK ? '選擇類型' : 'Select type'}>
            <option className="bg-charcoal">{isHK ? '企業活動' : 'Corporate Event'}</option>
            <option className="bg-charcoal">{isHK ? '生日 / 慶祝活動' : 'Birthday / Celebration'}</option>
            <option className="bg-charcoal">{isHK ? '產品發佈會' : 'Product Launch'}</option>
            <option className="bg-charcoal">{isHK ? '團隊晚宴' : 'Team Dinner'}</option>
            <option className="bg-charcoal">{isHK ? '私人慶祝活動' : 'Private Celebration'}</option>
            <option className="bg-charcoal">{isHK ? '婚禮' : 'Wedding'}</option>
            <option className="bg-charcoal">{isHK ? '其他' : 'Other'}</option>
          </SelectWrap>
        </div>
        <div>
          <label className={lblCls}>{isHK ? '預算範圍' : 'Budget Range'}</label>
          <SelectWrap value={f.budget} onChange={s('budget')} placeholder={isHK ? '不便透露' : 'Prefer not to say'}>
            <option className="bg-charcoal">Under $1,000</option>
            <option className="bg-charcoal">$1,000 – $3,000</option>
            <option className="bg-charcoal">$3,000 – $5,000</option>
            <option className="bg-charcoal">$5,000 – $10,000</option>
            <option className="bg-charcoal">$10,000+</option>
          </SelectWrap>
        </div>
      </div>

      <div>
        <label className={lblCls}>{isHK ? '特別要求' : 'Special Requirements'}</label>
        <textarea rows={4} value={f.requirements} onChange={s('requirements')}
          className={`${inputCls} resize-none`}
          placeholder={isHK ? '飲食需求、影音設備、佈置要求或其他詳情...' : 'Dietary needs, AV equipment, décor requests, or any other details…'} />
      </div>

      {fs === 'error' && <ErrorBanner msg={err || t.error} />}
      <div className="pt-1"><SubmitBtn loading={fs === 'loading'} label={isHK ? '提交活動查詢' : 'Submit Event Enquiry'} /></div>
    </form>
  );
}

// ─────────────────────────────────────────────
// Contact Info sidebar (always visible)
// ─────────────────────────────────────────────
function InfoCard({ lang }: { lang: Language }) {
  const t = translations[lang].contactPage;
  const commonT = translations[lang].location;

  return (
    <div className="space-y-4">
      <div className="bg-surface border border-white/[0.07] p-7 space-y-6">
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin size={14} className="text-gold" />
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold/60 mb-1.5">{t.visit.location}</p>
            <p className="text-white/70 text-sm font-light leading-relaxed">
              {commonT.street}<br />{commonT.unit}<br />{commonT.district}
            </p>
            <p className="text-white/25 text-[11px] mt-1.5">{t.visit.mtrInfo}</p>
          </div>
        </div>

        <div className="w-full h-px bg-white/[0.05]" />

        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
            <Phone size={14} className="text-gold" />
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold/60 mb-1.5">{t.visit.phone}</p>
            <a href="tel:+85228022802" className="text-white/70 text-sm font-light hover:text-white transition-colors">
              +852 2802 2802
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-white/[0.05]" />

        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
            <Clock size={14} className="text-gold" />
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold/60 mb-1.5">{t.visit.hours}</p>
            <p className="text-white/70 text-sm font-light">{commonT.lunch} &nbsp;&nbsp;12:00 – 15:00</p>
            <p className="text-white/70 text-sm font-light">{commonT.dinner} &nbsp;18:00 – 23:00</p>
            <p className="text-white/30 text-[11px] mt-1.5">{commonT.sevenDays}</p>
          </div>
        </div>
      </div>

      <a
        href="tel:+85228022802"
        className="flex items-center justify-between w-full bg-white/[0.02] border border-white/[0.07] hover:border-gold/20 px-5 py-4 transition-colors group"
      >
        <span className="text-white/50 text-xs font-sans font-light">{t.visit.callDirect}</span>
        <ChevronRight size={14} className="text-gold/40 group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
      </a>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main page
// ─────────────────────────────────────────────
export const ContactPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].contactPage;
  const [active, setActive] = useState<ContactType>('general');

  const reasons = [
    { id: 'general' as ContactType, icon: MessageSquare, title: t.reasons.general.title, desc: t.reasons.general.desc },
    { id: 'group' as ContactType, icon: Users, title: t.reasons.group.title, desc: t.reasons.group.desc },
    { id: 'event' as ContactType, icon: Calendar, title: t.reasons.events.title, desc: t.reasons.events.desc },
  ];

  const formTitle: Record<ContactType, string> = {
    general: t.form.title,
    group: lang === 'hk' ? '申請團體預訂' : 'Request a Group Booking',
    event: lang === 'hk' ? '提交活動查詢' : 'Submit an Event Enquiry',
  };

  return (
    <div className="bg-charcoal min-h-screen pt-24 lg:pt-40 pb-24 relative overflow-hidden">
      
      {/* Ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-gold/[0.03] blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/[0.02] blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-12">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">{t.eyebrow}</p>
        <h1 className="font-display text-5xl md:text-6xl text-white leading-none mb-4">{t.title}</h1>
        <p className="text-white/50 text-base font-sans font-light max-w-lg leading-relaxed">
          {t.subtitle}
        </p>
      </section>

      {/* ── Reason selector ── */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {reasons.map(({ id, icon: Icon, title, desc }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`text-left p-6 border transition-all duration-300 group ${
                  isActive
                    ? 'border-gold/50 bg-gold/[0.06]'
                    : 'border-white/[0.07] bg-surface hover:border-white/20 hover:bg-white/[0.02]'
                }`}
              >
                <div className={`w-9 h-9 flex items-center justify-center mb-4 transition-colors ${
                  isActive ? 'bg-gold/20' : 'bg-white/5 group-hover:bg-white/10'
                }`}>
                  <Icon size={18} className={isActive ? 'text-gold' : 'text-white/40 group-hover:text-white/60'} />
                </div>
                <h3 className={`text-sm font-bold font-sans mb-1.5 transition-colors ${isActive ? 'text-white' : 'text-white/70'}`}>
                  {title}
                </h3>
                <p className="text-white/35 text-xs font-sans font-light leading-relaxed">{desc}</p>

                {/* Active indicator */}
                <div className={`mt-4 h-px transition-all duration-300 ${isActive ? 'bg-gold/60' : 'bg-transparent'}`} />
              </button>
            );
          })}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* ── Form + Info grid ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

        {/* Form panel — 3 / 5 width */}
        <div className="lg:col-span-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/60 mb-5">
            {formTitle[active]}
          </p>
          {/* key forces re-mount (clean state + re-animation) on tab switch */}
          <div key={active} className="animate-fade-in-up">
            {active === 'general' && <GeneralForm lang={lang} />}
            {active === 'group'   && <GroupForm lang={lang} />}
            {active === 'event'   && <EventForm lang={lang} />}
          </div>
        </div>

        {/* Info sidebar — 2 / 5 width */}
        <div className="lg:col-span-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/60 mb-5">
            {t.visit.title}
          </p>
          <InfoCard lang={lang} />
        </div>
      </section>
    </div>
  );
};

