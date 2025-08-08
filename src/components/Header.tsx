'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const RequestQuoteModal = dynamic(() => import("./RequestQuoteModal"), { ssr: false });

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      {/* Mobile Menu Toggle */}
    {  /*<div className="tt-menu-toggle">
        <a href="#" id="tt-menu-toggle" className="icons-1828859"></a>
      </div>*/ }

      <header id="tt-header">
        {/* holder-top (desktop) */}
        <div className="holder-top-desktop d-none d-md-block">
          <div className="row">
            <div className="col-auto">
              <div className="h-info01">
                <div className="tt-item">
                  <address>
                    8494 Signal Hill Road Manassas, VA, 20110
                  </address>
                </div>
                <div className="tt-item">
                  Mon-Fri 08:00 AM - 05:00 PM
                </div>
                <div className="tt-item">
                  <a href="mailto:info@prolaundry.com">
                    info@prolaundry.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto ml-auto">
              <div className="tt-obj">
                <div className="h-info02">
                  <div className="tt-item">
                    <address>
                      <a href="tel:+971 50 925 9667"><span className="icons-483947"></span> +971 50 925 9667</a>
                    </address>
                  </div>
                </div>
              </div>
              <div className="tt-obj">
                <ul className="h-social">
                  <li><a href="https://twitter.com" target="_blank" className="icons-733635"></a></li>
                  <li><a href="https://www.facebook.com/" target="_blank" className="icons-59439"></a></li>
                  <li><a href="https://www.facebook.com/" target="_blank" className="icons-2111532"></a></li>
                  <li><a href="https://www.instagram.com/" target="_blank" className="icons-733614"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /holder-top (desktop) */}

        {/* Main Header */}
        <div id="js-init-sticky">
          <div className="tt-holder-wrapper">
            <div className="tt-holder">
              <div className="tt-col-left">
                {/* logo */}
                <div className="tt-logo">
                  <Link href="/">
                    <Image 
                      src="/Assets/F.png" 
                      alt="ProLaundry" 
                      width={80} 
                      height={20}
                      style={{ objectFit: 'contain' }}
                    />
                  </Link>
                </div>
                {/* /logo */}
              </div>
              <div className="tt-col-center tt-col-wide tt-col-objects text-center">
                <div className="tt-col__item">
                  {/* desktop-nav */}
                  <nav className="tt-desktop-menu">
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about">About</Link></li>
                      <li><Link href="/services">Services</Link></li>
                      <li><Link href="/pricing">Pricing</Link></li>
                      <li><Link href="/blogs">Blog</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                  {/* /desktop-nav */}
                </div>
              </div>
              <div className="tt-col-right tt-col-objects">
                <div className="tt-col__item d-block d-lg-none">
                  <div className="h-info02">
                    <div className="tt-item">
                      <address>
                        <a href="tel:+971 50 925 9667"><span className="icons-483947"></span>+971 50 925 9667</a>
                      </address>
                    </div>
                  </div>
                </div>
                <div className="tt-col__item">
                  <div className="tt-obj tt-obj-cart js-dropdown-cart">
                    <a href="#" className="tt-obj__btn">
                      <i className="icons-711897"></i>
                      <div className="tt-obj__badge">2</div>
                    </a>
                  </div>
                </div>
                <div className="tt-col__item d-none d-md-block">
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="tt-btn"
                  >
                    <span className="mask">Schedule a Pickup</span>
                    <div className="button">Schedule a Pickup</div>
                  </button>
                </div>
                <div className="tt-col__item toggle-wrapper">
                  <a href="#" id="tt-menu-toggle" className="icons-1828859"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <RequestQuoteModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
