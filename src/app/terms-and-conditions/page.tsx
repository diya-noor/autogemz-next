'use client'
import { usePluginInit } from '@/hooks/usePluginInit'

export default function TermsAndConditions() {
  usePluginInit();

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section className="bg-dark-2 pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="subtitle id-color wow fadeInUp">Legal</div>
              <h1 className="wow fadeInUp" data-wow-delay=".2s">Terms &amp; Conditions</h1>
              <p className="wow fadeInUp" data-wow-delay=".4s">Last updated: March 2025</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h4>1. Acceptance of Terms</h4>
              <p>By accessing and using the AutoGemz website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.</p>

              <h4>2. Services</h4>
              <p>AutoGemz provides luxury car sales, importation, inspection, documentation, and investment services. All services are subject to availability and may be modified or discontinued at our discretion.</p>

              <h4>3. Investment Disclaimer</h4>
              <p>Investment returns mentioned on our website, including the potential 24% monthly return, are indicative and not guaranteed. Past performance is not indicative of future results. All investments carry risk. Please consult a qualified financial advisor before making any investment decisions.</p>

              <h4>4. Accuracy of Information</h4>
              <p>We strive to ensure all information on our website is accurate and up to date. However, AutoGemz makes no warranties regarding the completeness, accuracy, or reliability of any information presented. Vehicle details, pricing, and availability are subject to change without notice.</p>

              <h4>5. Intellectual Property</h4>
              <p>All content on the AutoGemz website, including text, images, logos, and graphics, is the property of AutoGemz and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.</p>

              <h4>6. User Conduct</h4>
              <p>You agree to use our website only for lawful purposes and in a manner that does not infringe on the rights of others. You must not misuse our contact forms, submit false information, or attempt to interfere with the website's operation.</p>

              <h4>7. Limitation of Liability</h4>
              <p>AutoGemz shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services. Our total liability shall not exceed the amount paid for the specific service in question.</p>

              <h4>8. Third-Party Links</h4>
              <p>Our website may contain links to third-party websites. AutoGemz is not responsible for the content, privacy policies, or practices of any third-party sites.</p>

              <h4>9. Governing Law</h4>
              <p>These Terms and Conditions are governed by the laws of Pakistan. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Islamabad, Pakistan.</p>

              <h4>10. Changes to Terms</h4>
              <p>AutoGemz reserves the right to modify these Terms and Conditions at any time. Updated terms will be posted on this page. Continued use of our website after any changes constitutes acceptance of the new terms.</p>

              <h4>11. Contact Us</h4>
              <p>If you have any questions about these Terms and Conditions, please contact us:</p>
              <ul>
                <li>Email: <a href="mailto:info@autogemz.com">info@autogemz.com</a></li>
                <li>Phone: <a href="tel:+923341111167">+92 334 1111 167</a></li>
                <li>Address: Building No. 140 Main Blvd, Phase 4 Civic Center Bahria Town, Islamabad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
