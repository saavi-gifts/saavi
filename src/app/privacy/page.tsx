import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Saavi (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company information</li>
                <li>Inquiry details and messages</li>
                <li>Google account information (when using Google Drive integration)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                We automatically collect certain information when you visit our website:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website information</li>
                <li>Device information and cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide and maintain our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Manage Google Drive integration for image uploads</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Google Drive Integration</h2>
              <p className="text-gray-700 mb-4">
                Our website integrates with Google Drive to provide image upload functionality. When you use this feature:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>We request access to your Google Drive for file management</li>
                <li>Images are stored in a dedicated &ldquo;Saavi Product Images&rdquo; folder</li>
                <li>Files are made publicly accessible for website display</li>
                <li>We do not access, read, or modify other files in your Google Drive</li>
                <li>You can revoke access at any time through your Google Account settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication and authorization</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Revoke Google Drive access permissions</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your browsing experience:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand usage patterns</li>
                <li>Authentication cookies for secure access</li>
                <li>You can control cookie settings through your browser preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our website integrates with third-party services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Drive API:</strong> For image storage and management</li>
                <li><strong>FormSubmit.co:</strong> For contact form processing</li>
                <li><strong>Google Analytics:</strong> For website analytics (if enabled)</li>
              </ul>
              <p className="text-gray-700">
                Each third-party service has its own privacy policy, and we encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only for as long as necessary:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Contact form submissions: 2 years</li>
                <li>Google Drive integration data: Until you revoke access</li>
                <li>Website analytics: 26 months</li>
                <li>Marketing communications: Until you unsubscribe</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Children&apos;s Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> saavi.gifts@gmail.com</p>
                <p className="text-gray-700 mb-2"><strong>Website:</strong> <Link href="/" className="text-blue-600 hover:text-blue-800">saavi.tuvisminds.com</Link></p>
                <p className="text-gray-700"><strong>Address:</strong> [Your Business Address]</p>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <Link 
              href="/terms" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Terms of Service →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
