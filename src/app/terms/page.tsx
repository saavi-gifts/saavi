import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the Saavi website and services (&ldquo;Service&rdquo;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                Saavi provides sustainable and eco-friendly corporate gifting solutions, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Corporate gift catalog and ordering system</li>
                <li>Custom gift curation services</li>
                <li>Image management and storage through Google Drive integration</li>
                <li>Contact and inquiry management</li>
                <li>Administrative tools for gift management</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-700 mb-4">
                To access certain features of our Service, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Google Drive Integration Terms</h2>
              <p className="text-gray-700 mb-4">
                Our Service integrates with Google Drive for image storage and management:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Permission Scope:</strong> We request access to create and manage files in a dedicated folder</li>
                <li><strong>Data Storage:</strong> Images are stored in a &ldquo;Saavi Product Images&rdquo; folder in your Google Drive</li>
                <li><strong>Public Access:</strong> Uploaded images are made publicly accessible for website display</li>
                <li><strong>Limited Access:</strong> We only access the specific folder created for our service</li>
                <li><strong>Revocation:</strong> You can revoke access at any time through your Google Account settings</li>
                <li><strong>Data Ownership:</strong> You retain ownership of all uploaded images</li>
              </ul>
              <p className="text-gray-700">
                By using this feature, you agree to Google&apos;s Terms of Service and Privacy Policy in addition to these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Acceptable Use Policy</h2>
              <p className="text-gray-700 mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Upload illegal, harmful, or inappropriate content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the Service&apos;s operation</li>
                <li>Use the Service for spam or unsolicited communications</li>
                <li>Upload malicious software or content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                The Service and its original content, features, and functionality are owned by Saavi and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4">
                You retain ownership of content you upload, but grant us a license to use, store, and display it as necessary to provide the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.
              </p>
              <p className="text-gray-700">
                By using our Service, you consent to the collection and use of information as outlined in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our Service integrates with third-party services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Drive API:</strong> For file storage and management</li>
                <li><strong>FormSubmit.co:</strong> For contact form processing</li>
                <li><strong>Google Analytics:</strong> For website analytics (if enabled)</li>
              </ul>
              <p className="text-gray-700">
                These services have their own terms and privacy policies. We are not responsible for their practices or content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Service Availability and Modifications</h2>
              <p className="text-gray-700 mb-4">
                We strive to maintain the Service&apos;s availability but do not guarantee uninterrupted access. We may:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Modify, suspend, or discontinue the Service at any time</li>
                <li>Update features and functionality</li>
                <li>Perform maintenance that may temporarily affect availability</li>
                <li>Change pricing with reasonable notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Saavi shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or technical issues</li>
                <li>Data loss or corruption</li>
                <li>Third-party service failures</li>
                <li>Security breaches or unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold harmless Saavi from any claims, damages, losses, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Content you upload or share</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Non-payment of fees (if applicable)</li>
                <li>Extended periods of inactivity</li>
              </ul>
              <p className="text-gray-700">
                Upon termination, your right to use the Service ceases immediately, and we may delete your account and data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these Terms or the Service shall be resolved through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Good faith negotiations between parties</li>
                <li>Mediation if negotiations fail</li>
                <li>Legal proceedings in courts of competent jurisdiction</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Severability</h2>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Posting updated Terms on our website</li>
                <li>Updating the &ldquo;Last updated&rdquo; date</li>
                <li>Sending email notifications for major changes</li>
              </ul>
              <p className="text-gray-700">
                Continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
              href="/privacy" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← View Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
