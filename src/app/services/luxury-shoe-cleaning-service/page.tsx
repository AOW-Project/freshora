import Image from 'next/image';

export default function LuxuryShoeCleaningService() {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', marginTop: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>Luxury Shoe Cleaning Service</h1>
      <div style={{ width: '100%', height: '320px', position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
        <Image src="/young-beautiful-indian-muslim-businesswoman-with-a-2025-01-29-03-34-36-utc.jpg" alt="Luxury Shoe Cleaning" fill style={{ objectFit: 'cover' }} />
      </div>
      <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7 }}>
        Experience premium care for your luxury footwear. Our Luxury Shoe Cleaning Service uses gentle, high-end products and meticulous techniques to restore your shoes to their original brilliance. Trust us with your designer, leather, and specialty shoes for a fresh, elegant look every time.
      </p>
    </main>
  );
} 