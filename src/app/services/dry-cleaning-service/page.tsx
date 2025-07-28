import Image from 'next/image';

export default function DryCleaningServicePage() {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', marginTop: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>Dry Cleaning Service</h1>
      <div style={{ width: '100%', height: '320px', position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
        <Image src="/senior-washwoman-in-the-laundry-2025-03-13-03-42-00-utc.jpg" alt="Dry Cleaning Service" fill style={{ objectFit: 'fill' }} />
      </div>
      <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7 }}>
        Our Dry Cleaning Service provides expert care for your delicate and special garments. We use advanced techniques and gentle solvents to clean your clothes, ensuring they look their best and last longer.
      </p>
    </main>
  );
} 