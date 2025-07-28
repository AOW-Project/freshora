import Image from 'next/image';

export default function BagShoeSpaPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', marginTop: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>Bag & Shoe Spa</h1>
      <div style={{ width: '100%', height: '320px', position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
        <Image src="/logo.png" alt="Bag & Shoe Spa" fill style={{ objectFit: 'fill' }} />
      </div>
      <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7 }}>
        Our Bag & Shoe Spa service restores your favorite accessories to their former glory. We clean, polish, and care for your bags and shoes with professional attention to detail.
      </p>
    </main>
  );
} 