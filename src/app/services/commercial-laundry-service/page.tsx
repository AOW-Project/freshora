import Image from 'next/image';

export default function CommercialLaundryServicePage() {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', marginTop: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>Commercial Laundry Service</h1>
      <div style={{ width: '100%', height: '320px', position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
        <Image src="/female-doing-laundry-at-laundromat-2024-10-12-00-02-41-utc.jpg" alt="Commercial Laundry Service" fill style={{ objectFit: 'fill' }} />
      </div>
      <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7 }}>
        Our Commercial Laundry Service is designed for businesses of all sizes. We offer reliable, efficient, and scalable laundry solutions for hotels, restaurants, gyms, and more.
      </p>
    </main>
  );
} 