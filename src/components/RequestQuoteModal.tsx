// src/components/RequestQuoteModal.tsx

'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import React from 'react';

export default function RequestQuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to the common thank you page on success
        router.push('/thankYou');
      } else {
        // Handle server errors or invalid responses
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      // Handle network errors
      console.error('Submission error:', error);
      alert('A network error occurred. Please check your connection and try again.');
    }
  };

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(30,41,59,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 12, padding: 32, maxWidth: 400, width: '100%', boxShadow: '0 4px 24px #0002', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#1e293b' }}>&times;</button>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 16, color: '#1e293b' }}>Request a Quote</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input name="name" type="text" placeholder="Your Name" required value={formData.name} onChange={handleChange} style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
          <input name="email" type="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
          <input name="phone" type="tel" placeholder="Your Phone" required value={formData.phone} onChange={handleChange} style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
          <select name="service" required value={formData.service} onChange={handleChange} style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }}>
            <option value="">Select Service</option>
            <option value="Laundry service">Laundry Service</option>
            <option value="Dry Cleaning">Dry Cleaning</option>
          </select>
          <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc', minHeight: 80 }} />
          <button type="submit" style={{ background: '#1e90ff', color: '#fff', padding: 12, borderRadius: 8, border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: 8 }}>Send Request</button>
        </form>
      </div>
    </div>
  );
}