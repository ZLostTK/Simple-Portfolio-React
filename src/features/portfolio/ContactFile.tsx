'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Globe, Send, CheckCircle, Phone } from 'lucide-react';
import LineNumbers from '@/src/shared/LineNumbers';

const SOCIALS = [
  { Icon: Mail,     label: 'EMAIL',    value: 'anxerdev@gmail.com',                                         href: 'mailto:anxerdev@gmail.com',                                         color: '#4fc1ff' },
  { Icon: Phone,    label: 'PHONE',    value: '+52 427 126 6833',                                            href: 'tel:+524271266833',                                                  color: '#a6e22e' },
  { Icon: Github,   label: 'GITHUB',   value: 'github.com/ZLostTK',                                         href: 'https://github.com/ZLostTK',                                         color: '#d4d4d4' },
  { Icon: Linkedin, label: 'LINKEDIN', value: 'linkedin.com/in/alexander-martínez-gonzález-01b13041b',       href: 'https://linkedin.com/in/alexander-martínez-gonzález-01b13041b',       color: '#0A66C2' },
  { Icon: Globe,    label: 'PORTFOLIO', value: 'anxer.is-a.dev',                                            href: 'https://anxer.is-a.dev',                                             color: '#fd971f' },
];

export default function ContactFile() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
  }

  return (
    <div className="flex h-full">
      <LineNumbers count={80} />

      <div className="flex-1 overflow-y-auto pt-6 pr-8 pb-8 pl-2">
        <p className="text-sm mono mb-2 token-comment">// contact.css — let's connect</p>
        <p className="text-xs mono mb-8 token-comment" style={{ color: '#6c6c8a' }}>
          {'/* Open to freelance and full-time opportunities */'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ maxWidth: 800 }}>
          {/* Left: Social links */}
          <div>
            <h2 className="mono text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#6c6c8a' }}>
              Find Me On
            </h2>
            <div className="space-y-3">
              {SOCIALS.map(({ Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg transition-all hover:scale-[1.01] group"
                  style={{ background: '#1a1a2e', border: '1px solid #252545' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: color + '15', border: `1px solid ${color}30` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] mono tracking-widest" style={{ color }}>
                      {label}
                    </div>
                    <div className="text-xs mono mt-0.5 truncate" style={{ color: '#858585' }}>
                      {value}
                    </div>
                  </div>
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#6c6c8a' }}>↗</span>
                </a>
              ))}

              {/* Location */}
              <div
                className="flex items-center gap-4 p-3 rounded-lg"
                style={{ background: '#1a1a2e', border: '1px solid #252545' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#f92aad15', border: '1px solid #f92aad30' }}
                >
                  <span className="text-base">📍</span>
                </div>
                <div>
                  <div className="text-[10px] mono tracking-widest" style={{ color: '#f92aad' }}>LOCATION</div>
                  <div className="text-xs mono mt-0.5" style={{ color: '#858585' }}>San Juan del Río, Querétaro, México</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <h2 className="mono text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#6c6c8a' }}>
              Send a Message
            </h2>

            {sent ? (
              <div
                className="flex flex-col items-center justify-center p-8 rounded-lg text-center"
                style={{ background: '#1a1a2e', border: '1px solid #252545', minHeight: 320 }}
              >
                <CheckCircle size={40} className="mb-4" style={{ color: '#a6e22e' }} />
                <h3 className="mono text-sm font-semibold mb-2" style={{ color: '#d4d4d4' }}>Message sent!</h3>
                <p className="mono text-xs leading-5" style={{ color: '#6c6c8a' }}>
                  Thanks for reaching out. I'll get back to you soon at anxerdev@gmail.com.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] mono mb-1.5" style={{ color: '#6c6c8a' }}>
                    <span className="token-comment">// YOUR_NAME</span>
                    {errors.name && <span className="ml-2" style={{ color: '#f44747' }}>*</span>}
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="string"
                    className="w-full px-3 py-2.5 rounded outline-none mono text-sm transition-colors"
                    style={{ background: '#0f0f23', border: `1px solid ${errors.name ? '#f44747' : '#252545'}`, color: '#d4d4d4' }}
                  />
                </div>

                <div>
                  <label className="block text-[10px] mono mb-1.5" style={{ color: '#6c6c8a' }}>
                    <span className="token-comment">// YOUR_EMAIL</span>
                    {errors.email && <span className="ml-2" style={{ color: '#f44747' }}>*</span>}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="string"
                    className="w-full px-3 py-2.5 rounded outline-none mono text-sm"
                    style={{ background: '#0f0f23', border: `1px solid ${errors.email ? '#f44747' : '#252545'}`, color: '#d4d4d4' }}
                  />
                </div>

                <div>
                  <label className="block text-[10px] mono mb-1.5 token-comment" style={{ color: '#6c6c8a' }}>
                    // SUBJECT
                  </label>
                  <input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="string"
                    className="w-full px-3 py-2.5 rounded outline-none mono text-sm"
                    style={{ background: '#0f0f23', border: '1px solid #252545', color: '#d4d4d4' }}
                  />
                </div>

                <div>
                  <label className="block text-[10px] mono mb-1.5" style={{ color: '#6c6c8a' }}>
                    <span className="token-comment">// MESSAGE</span>
                    {errors.message && <span className="ml-2" style={{ color: '#f44747' }}>*</span>}
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="'''your message'''"
                    rows={4}
                    className="w-full px-3 py-2.5 rounded outline-none mono text-sm resize-none"
                    style={{ background: '#0f0f23', border: `1px solid ${errors.message ? '#f44747' : '#252545'}`, color: '#d4d4d4' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded mono text-sm font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
                  style={{ background: '#007acc', color: '#ffffff' }}
                >
                  <Send size={14} />
                  → send_message()
                </button>

                <p className="text-[10px] mono text-center token-comment" style={{ color: '#454560' }}>
                  // Lands directly at anxerdev@gmail.com :)
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
