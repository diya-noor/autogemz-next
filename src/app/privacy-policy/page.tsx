'use client'
import { usePluginInit } from '@/hooks/usePluginInit'

export default function PrivacyPolicy() {
  usePluginInit();

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section className="bg-dark-2 pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="subtitle id-color wow fadeInUp">Legal</div>
              <h1 className="wow fadeInUp" data-wow-delay=".2s">Privacy Policy</h1>
              <p className="wow fadeInUp" data-wow-delay=".4s">Last updated: March 2025</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h4>1. Information We Collect</h4>
              <p>When you use our website or contact us, we may collect personal information such as your name, email address, phone number, and any details you provide through our contact or appointment forms.</p>

              <h4>2. How We Use Your Information</h4>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide our services</li>
                <li>Schedule appointments and follow up on service requests</li>
                <li>Send you relevant updates about our inventory and services</li>
                <li>Improve our website and customer experience</li>
              </ul>

              <h4>3. Information Sharing</h4>
              <p>AutoGemz does not sell, trade, or rent your personal information to third parties. We may share your information only with trusted partners who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.</p>

              <h4>4. Data Security</h4>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

              <h4>5. Cookies</h4>
              <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect certain functionality of the website.</p>

              <h4>6. Third-Party Links</h4>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>

              <h4>7. Your Rights</h4>
              <p>You have the right to request access to, correction of, or deletion of your personal information held by us. To exercise these rights, please contact us at <a href="mailto:info@autogemz.com">info@autogemz.com</a>.</p>

              <h4>8. Changes to This Policy</h4>
              <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated date. Continued use of our website constitutes acceptance of any changes.</p>

              <h4>9. Contact Us</h4>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
