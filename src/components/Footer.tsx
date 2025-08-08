'use client';

import Link from 'next/link';
import { MapPin, Clock, Mail, Phone, Twitter, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image'; // Import the Image component

export default function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    e.currentTarget.reset();
  };

  return (
    <>
      {/* Map Section */}
      <div className="w-full h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.823998592543!2d-77.4510176846573!3d38.78872997958744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65c6c6b3b5b67%3A0x26c8b30125c405a!2s8494%20Signal%20Hill%20Rd%2C%20Manassas%2C%20VA%2020110%2C%20USA!5e0!3m2!1sen!2sin!4v1628472948212!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Main Footer with Dark Background */}
      <footer id="" className="footer-wrapper01">
        <div className="container mx-auto px-4 xl:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Column 1: About */}
            <div className="space-y-4 flex flex-col items-center md:items-start">
               <Link href="/" className="inline-block mb-2">
                 <Image 
                   src="/F.png" // Assuming your logo is in public/logo.png
                   alt="Freshora Laundry" 
                   width={180} 
                   height={50}
                   className="h-auto"
                 />
               </Link>
              <p className="max-w-sm">
                We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies and cleaning methods.
              </p>
              <div className="flex space-x-2 pt-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-cyan-500 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-cyan-500 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-cyan-500 hover:text-white transition-colors"><Instagram size={20} /></a>
              </div>
            </div>

            {/* Column 2: Contacts */}
            <div className="space-y-4">
              <h5 className="text-xl font-bold text-white mb-2">Contacts</h5>
              <ul className="space-y-3">
                <li className="flex items-start justify-center md:justify-start">
                  <MapPin className="w-5 h-5 text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                  <span>8494 Signal Hill Road Manassas, VA, 20110</span>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <Clock className="w-5 h-5 text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span>Mon-Fri: 8am - 5pm</span><br/>
                    <span>Sat-Sun: 10am - 5pm</span>
                  </div>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <Mail className="w-5 h-5 text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                  <a href="mailto:info@prolaundrysite.com" className="hover:text-cyan-500 transition-colors">info@prolaundrysite.com</a>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <Phone className="w-5 h-5 text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                  <a href="tel:1(800)765-43-21" className="font-bold hover:text-cyan-500 transition-colors">1 (800) 765-43-21</a>
                </li>
              </ul>
            </div>
            
            {/* Column 3: Newsletter Subscribe */}
            <div className="space-y-4">
              <h5 className="text-xl font-bold text-white mb-2">Newsletter Subscribe</h5>
              <p>Sign up and receive our special offers.</p>
              <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto md:mx-0">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your e-mail address"
                  className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
                <button
                  type="submit"
                  className="w-full group relative inline-block py-3.5 px-9 bg-cyan-500 text-white font-bold no-underline border-2 border-cyan-500 overflow-hidden transition-colors duration-400 hover:bg-transparent hover:text-cyan-400"
                >
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:-translate-y-full">
                    Subscribe now
                  </span>
                  <div className="absolute top-full left-0 w-full py-3.5 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:-translate-y-full">
                    Subscribe now
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Sub-Footer */}
        <div className="bg-gray-900 text-gray-500 py-4">
            <div className="container mx-auto px-4 xl:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="text-sm mb-2 md:mb-0">
                &copy; {new Date().getFullYear()} ProLaundry. All rights reserved.
                </div>
                <div className="text-sm flex gap-4">
                    <Link href="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </div>
            </div>
        </div>
      </footer>
    </>
  );
}
