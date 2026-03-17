'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()

  // Auto-close mobile menu on every route change
  useEffect(() => {
    const t = setTimeout(() => {
      const header = document.querySelector('header');
      const menuBtn = document.getElementById('menu-btn') as HTMLElement | null;
      if (header?.classList.contains('menu-open') && menuBtn) {
        menuBtn.click();
      }
    }, 50);
    return () => clearTimeout(t);
  }, [pathname]);

  const closeMenu = () => {
    const header = document.querySelector('header');
    const menuBtn = document.getElementById('menu-btn') as HTMLElement | null;
    if (header?.classList.contains('menu-open') && menuBtn) {
      menuBtn.click();
    }
  };

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <>
      <header className="transparent">
        <div id="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between xs-hide">
                  <div className="d-flex">
                    <div className="topbar-widget">
                      <a href="https://maps.app.goo.gl/CWuAeq29tEPBoNZn6" target="_blank" rel="noreferrer">
                        <img src="/images/svg-white/bell.svg" className="" alt="" />
                        Civic Center Behria Town Phase 4, Rawalpindi
                      </a>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="topbar-widget me-5">
                      <a href="tel:+923341111167">
                        <img src="/images/svg-white/phone.svg" className="" alt="" />Call us +92 334 1111 167
                      </a>
                    </div>
                    <div className="topbar-widget">
                      <a href="mailto:info@autogemz.com">
                        <img src="/images/svg-white/envelope.svg" className="" alt="" />Message us: info@autogemz.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  <div id="logo">
                    <Link href="/">
                      <img className="logo-main" src="/images/auto-gems-logo.png" alt="" style={{ height: '150px' }} />
                      <img className="logo-mobile" src="/images/mobile.png" alt="" style={{ height: '50px' }} />
                    </Link>
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <Link className={`menu-item${isActive('/') ? ' active' : ''}`} href="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                      <a className="menu-item">Services</a>
                      <ul>
                        <li><Link href="/car-import" onClick={closeMenu}>Car Import</Link></li>
                        <li><Link href="/car-inspection" onClick={closeMenu}>Car Inspection</Link></li>
                        <li><Link href="/car-documentation" onClick={closeMenu}>Car Documentation</Link></li>
                        <li><Link href="/investment-opportunity" onClick={closeMenu}>Investment Opportunity</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link className={`menu-item${isActive('/inventory') ? ' active' : ''}`} href="/inventory" onClick={closeMenu}>Inventory</Link>
                    </li>
                    <li>
                      <Link className={`menu-item${isActive('/blog') ? ' active' : ''}`} href="/blog" onClick={closeMenu}>Blog</Link>
                    </li>
                    <li>
                      <Link className={`menu-item${isActive('/about') ? ' active' : ''}`} href="/about" onClick={closeMenu}>About Us</Link>
                    </li>
                    <li>
                      <Link className={`menu-item${isActive('/contact') ? ' active' : ''}`} href="/contact" onClick={closeMenu}>Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="de-flex-col">
                  <div className="menu_side_area">
                    <Link href="/appointment" className="btn-main fx-slide hover-white" onClick={closeMenu}><span>Make Appointment</span></Link>
                    <span id="menu-btn"></span>
                  </div>
                  <div id="btn-extra">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
