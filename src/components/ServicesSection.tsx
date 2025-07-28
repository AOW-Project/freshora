'use client';

import { image } from 'framer-motion/client';
import { Shirt, Wind, Sparkles, Check, ShoppingBag, Truck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { title } from 'process';

const servicesList = [
  {
    image: '/sweatshirts-and-hoodies-hanging-on-hangers-in-the-2025-02-24-23-50-53-utc.jpg',
    title: 'Laundry Service',
    description: 'Perfect for everyday laundry. We wash, dry, and fold your clothes with care.',
    href: '/services/laundry-service',
  },
  {
    image: '/senior-washwoman-in-the-laundry-2025-03-13-03-42-00-utc.jpg',
    title: 'Dry Cleaning Service',
    description: 'Expert care for your delicate garments, ensuring they look their best.',
    href: '/services/dry-cleaning-service',
  },
  {
    image: '/cropped-view-of-woman-in-grey-shirt-and-jeans-putt-2024-11-17-21-04-59-utc.jpg',
    title: 'Express Laundry Services',
    description: 'Need your laundry done in a hurry? Our express service is fast and reliable.',
    href: '/services/express-laundry-services',
  },
  {
    image: '/logo.png',
    title: 'Bag & Shoe Spa',
    description: 'Restore your favorite bags and shoes with our professional spa service.',
    href: '/services/bag-shoe-spa',
  },
  {
    image: '/young-beautiful-indian-muslim-businesswoman-with-a-2025-01-29-03-34-36-utc.jpg',
    title:'Luxury shoe cleaning service',
    description:'We offer a wide range of luxury shoe cleaning services to meet your needs, delivered with the highest quality and care.',
    href:'/services/luxury-shoe-cleaning-service',
  },
  {
    image: '/female-doing-laundry-at-laundromat-2024-10-12-00-02-41-utc.jpg',
    title: 'Commercial Laundry Service',
    description: 'Reliable and efficient laundry solutions for businesses of all sizes.',
    href: '/services/commercial-laundry-service',
  },
  {
    image: '/logo.png',
    title: 'Carpet Cleaning Service',
    description: 'We remove dirt, stains, and allergens from your carpets, leaving them fresh and revitalized.',
    href: '/services/carpet-cleaning-service',
  },
  {
    image: '/logo.png',
    title: 'Curtain Cleaning Service',
    description: 'Gentle cleaning for your curtains, removing dust, stains, and odors.',
    href: '/services/curtain-cleaning-service',
  },
 
  {
    image: '/logo.png',
    title: 'Soft Toy Cleaning Service',
    description: 'Gentle, child-friendly cleaning for your children’s favorite soft toys.',
    href: '/services/soft-toy-cleaning-service',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
          Our Services
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
          We offer a wide range of laundry services to meet your needs, delivered with the highest quality and care.
        </p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {servicesList.map((service, index) => (
            <div key={index} style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'left',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
            }}
            >
              <div style={{ marginBottom: '1rem', width: '100%', height: '180px', position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem', minHeight: '80px' }}>
                {service.description}
              </p>
              <Link href={service.href} passHref>
                <span style={{ color: '#2563eb', fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
