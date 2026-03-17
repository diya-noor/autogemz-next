import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ExtraWrap from '@/components/ExtraWrap'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'AutoGemz - Cruise Towards Excellence',
  icons: { icon: '/images/auto-gems-logo.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/swiper.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/colors/scheme-1.css" />
        <link rel="stylesheet" href="/css/custom-swiper-1.css" />
        <link rel="stylesheet" href="/css/datepicker.css" />
      </head>
      <body className="dark-scheme">
        <div id="wrapper">
          <a href="#" id="back-to-top"></a>
          <div id="de-loader"></div>
          <Header />
          {children}
          <Footer />
        </div>
        <ExtraWrap />
        <ScrollToTop />
        <Script src="/js/plugins.js" strategy="afterInteractive" />
        <Script src="/js/designesia.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
