'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './ContactForm.module.css';

const CONTACT_EMAIL = 'udarasenarath875@gmail.com';

const PROJECT_TYPES = [
  'Business Website',
  'AI Chat & Booking Assistant',
  'Online Store & Payments',
  'Hosting & Ongoing Care',
  'Something else',
];

type Status = 'idle' | 'submitting' | 'error';

export const ContactForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = React.useState<Status>('idle');
  const [error, setError] = React.useState('');

  const openMailFallback = (
    name: string,
    email: string,
    projectType: string,
    message: string,
  ) => {
    const subject = `New project inquiry — ${projectType || 'General'}`;
    const body = `Name: ${name}\nEmail: ${email}\nProject type: ${projectType || 'Not specified'}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const projectType = String(formData.get('projectType') || '').trim();
    const message = String(formData.get('message') || '').trim();

    setStatus('submitting');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, projectType, message }),
      });

      if (res.ok) {
        form.reset();
        router.push(`/thank-you?from=${encodeURIComponent(pathname)}`);
        return;
      }

      // Not configured (501) or delivery failed — never lose the message:
      // hand off to the visitor's email app with everything pre-filled.
      openMailFallback(name, email, projectType, message);
      setStatus('idle');
    } catch {
      openMailFallback(name, email, projectType, message);
      setStatus('idle');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <input id="cf-name" name="name" type="text" placeholder=" " required autoComplete="name" />
          <label htmlFor="cf-name">Name</label>
        </div>
        <div className={styles.field}>
          <input id="cf-email" name="email" type="email" placeholder=" " required autoComplete="email" />
          <label htmlFor="cf-email">Email</label>
        </div>
      </div>

      <div className={styles.field}>
        <select id="cf-type" name="projectType" required defaultValue="">
          <option value="" disabled hidden>
            Select a project type…
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <label htmlFor="cf-type" className={styles.selectLabel}>What do you need?</label>
      </div>

      <div className={styles.field}>
        <textarea id="cf-message" name="message" rows={4} placeholder=" " required />
        <label htmlFor="cf-message">Tell me a bit about it</label>
      </div>

      {error && <p className={styles.errorText}>{error}</p>}

      <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
        <span>{status === 'submitting' ? 'Sending…' : 'Send message'}</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </form>
  );

};
