import Image from 'next/image';

export default function SoftToyCleaningServicePage() {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', marginTop: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>Soft Toy Cleaning Service</h1>
      <div style={{ width: '100%', height: '320px', position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
        <Image src="/logo.png" alt="Soft Toy Cleaning Service" fill style={{ objectFit: 'fill' }} />
      </div>
      <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7 }}>
        Our Soft Toy Cleaning Service ensures your children’s favorite toys are hygienic and safe. We use gentle, child-friendly cleaning methods to keep soft toys fresh and cuddly.
      </p>
    </main>
  );
} 