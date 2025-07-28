import Image from 'next/image';

export default function ExpressLaundryServicesPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', marginTop: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>Express Laundry Services</h1>
      <div style={{ width: '100%', height: '320px', position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
        <Image src="/cropped-view-of-woman-in-grey-shirt-and-jeans-putt-2024-11-17-21-04-59-utc.jpg" alt="Express Laundry Services" fill style={{ objectFit: 'fill' }} />
      </div>
      <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7 }}>
        Need your laundry done in a hurry? Our Express Laundry Services ensure your clothes are cleaned, dried, and ready for pickup or delivery in record time, without compromising on quality.
      </p>
    </main>
  );
} 