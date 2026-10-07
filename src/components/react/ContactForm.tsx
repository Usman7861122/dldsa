import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { sendMessage } from '../../lib/contact';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'peer w-full border-0 border-b border-ivory/25 bg-transparent px-0 pb-3 pt-6 text-lg text-ivory placeholder-transparent outline-none transition-colors duration-500 focus:border-gold';
const label =
  'pointer-events-none absolute left-0 top-6 origin-left text-lg text-ivory/55 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [name, setName] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const data = {
      name: String(f.get('name') || ''), email: String(f.get('email') || ''),
      phone: String(f.get('phone') || ''), message: String(f.get('message') || ''),
    };
    setName(data.name.split(' ')[0]);
    setStatus('sending');
    try {
      await sendMessage(data);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === 'sent' ? (
        <motion.div key="done" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-10" role="status">
          <h3 className="font-heading text-3xl font-light text-gold-soft md:text-4xl">Thank you, {name}.</h3>
          <p className="mt-4 max-w-md text-lg text-ivory/75">We got your message and will call you back on the next business day.</p>
          <button className="ulink mt-8 text-gold" onClick={() => setStatus('idle')}>Send another message</button>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-6" noValidate={false}>
          <div className="relative"><input id="name" name="name" required placeholder="Full name" autoComplete="name" className={field} /><label htmlFor="name" className={label}>Full name</label></div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative"><input id="email" name="email" type="email" required placeholder="Email" autoComplete="email" className={field} /><label htmlFor="email" className={label}>Email</label></div>
            <div className="relative"><input id="phone" name="phone" type="tel" placeholder="Phone" autoComplete="tel" className={field} /><label htmlFor="phone" className={label}>Phone (optional)</label></div>
          </div>
          <div className="relative"><textarea id="message" name="message" required rows={4} placeholder="How can we help?" className={`${field} resize-none`} /><label htmlFor="message" className={label}>How can we help?</label></div>

          {status === 'error' && (
            <p role="alert" className="text-gold-soft">We couldn’t send your message. Please try again or call us.</p>
          )}
          <div>
            <button type="submit" disabled={status === 'sending'} className="btn btn-gold disabled:opacity-60">
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
