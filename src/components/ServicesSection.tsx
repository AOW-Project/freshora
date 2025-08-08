'use client';

import Link from 'next/link';
import Image from 'next/image';

const servicesList = [
  {
    image: '/images/imgbox-inner__img01.jpg',
    title: 'Carpet Cleaning',
    description: 'To keep carpet at peak performance, we recommend professional deep cleaning your carpet every 12 to 18 months.',
    href: '/services/carpet-cleaning',
    icon: '🧹'
  },
  {
    image: '/images/imgbox-inner__img02.jpg',
    title: 'Laundry Services',
    description: 'Let us pick up your dirty laundry, sort it, pre-treat stains, wash, dry, fold and deliver back to you in one neat, easy package.',
    href: '/services/laundry-services',
    icon: '👕'
  },
  {
    image: '/images/imgbox-inner__img03.jpg',
    title: 'Dry Cleaning',
    description: 'Professional dry cleaning services for your delicate garments, ensuring they look their best and last longer.',
    href: '/services/dry-cleaning',
    icon: '👔'
  },
  {
    image: '/images/imgbox-inner__img01.jpg',
    title: 'Express Service',
    description: 'Need your clothes cleaned in a hurry? Our express service gets your laundry back to you quickly without compromising quality.',
    href: '/services/express-service',
    icon: '⚡'
  },
  {
    image: '/images/imgbox-inner__img02.jpg',
    title: 'Shoe & Bag Care',
    description: 'Restore your favorite shoes and bags with our professional cleaning and restoration services.',
    href: '/services/shoe-bag-care',
    icon: '👠'
  },
  {
    image: '/images/imgbox-inner__img03.jpg',
    title: 'Commercial Laundry',
    description: 'Reliable and efficient laundry solutions for businesses, hotels, and commercial establishments.',
    href: '/services/commercial-laundry',
    icon: '🏢'
  }
];

export default function ServicesSection() {
  return (
    <div className="lazyload bg-top-right" style={{ backgroundImage: 'url(/images/wrapper02.png)', backgroundSize: 'cover', backgroundPosition: 'top right' }}>
      <div className="section-indent no-margin">
        <div className="container-fluid">
          <div className="title-block text-center">
            <div className="title-block__label" style={{ color: '#ff6b35', fontSize: '1.1rem', marginBottom: '1rem' }}>
              [ Our Services ]
            </div>
            <h4 className="title-block__title" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', color: '#333' }}>
              Dry Cleaning & Laundry,<br />Free Delivery
            </h4>
          </div>
          
          <div className="slick-default slick-arrow-align imgbox-inner__wrapper" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            {servicesList.map((service, index) => (
              <div key={index} className="tt-item">
                <Link href={service.href} className="imgbox-inner" style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                  background: '#fff',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }}>
                  <div className="imgbox-inner__img" style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="imgbox-inner__description" style={{ padding: '2rem' }}>
                    <div className="imgbox-inner__row" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div className="imgbox-inner__icon" style={{ 
                        fontSize: '3rem', 
                        color: '#ff6b35',
                        flexShrink: 0
                      }}>
                        {service.icon}
                      </div>
                      <div className="imgbox-inner__content">
                        <h4 className="imgbox-inner__title" style={{ 
                          fontSize: '1.5rem', 
                          fontWeight: 'bold', 
                          marginBottom: '1rem',
                          color: '#333'
                        }}>
                          {service.title}
                        </h4>
                        <p style={{ 
                          fontSize: '1rem', 
                          lineHeight: '1.6',
                          color: '#666',
                          margin: 0
                        }}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* View All Services Button */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services" style={{
              display: 'inline-block',
              background: '#ff6b35',
              color: '#fff',
              padding: '1rem 2rem',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={e => e.currentTarget.style.background = '#e55a2b'}
            onMouseOut={e => e.currentTarget.style.background = '#ff6b35'}>
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
