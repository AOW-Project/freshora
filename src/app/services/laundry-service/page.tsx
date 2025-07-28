import Image from 'next/image';

export default function LaundryServicePage() {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', marginTop: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>Laundry Service</h1>
      <div style={{ width: '100%', height: '320px', position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
        <Image src="/sweatshirts-and-hoodies-hanging-on-hangers-in-the-2025-02-24-23-50-53-utc.jpg" alt="Laundry Service" fill style={{ objectFit: 'fill' }} />
      </div>
      <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7 }}>
        Our Laundry Service is perfect for your everyday laundry needs. We wash, dry, and fold your clothes with utmost care, using high-quality detergents and modern machines to ensure your garments are fresh, clean, and ready to wear.
      </p>
    </main>
  );
} 