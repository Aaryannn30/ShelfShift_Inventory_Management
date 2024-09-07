import React, { useEffect } from 'react';

export default function Terms_Condition() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Terms & Conditions</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-gray-600">
            <strong>Effective Date: September 2024</strong>
          </p>
          <p className="mt-4 text-gray-600">
            Welcome to ShelfShift Inventory. These Terms & Conditions outline the rules and regulations for the use of our platform.
          </p>
          
          <h2 className="mt-6 text-2xl font-semibold text-gray-800">1. Agreement to Terms</h2>
          <p className="mt-2 text-gray-600">
            By accessing and using ShelfShift Inventory, you agree to be bound by these Terms. If you do not agree to these Terms, please discontinue use of our platform.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">2. Eligibility</h2>
          <p className="mt-2 text-gray-600">
            You must be at least 18 years old to use our platform. By using ShelfShift Inventory, you represent and warrant that you have the legal capacity to enter into this agreement.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">3. User Responsibilities</h2>
          <p className="mt-2 text-gray-600">
            Users must provide accurate information when registering an account and ensure that their use of ShelfShift Inventory complies with applicable laws and regulations. Misuse of the platform may result in termination of services.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">4. Privacy Policy</h2>
          <p className="mt-2 text-gray-600">
            Our Privacy Policy governs how we collect, use, and disclose information about you. By using ShelfShift Inventory, you agree to our Privacy Policy, which is available on our website.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">5. Content Ownership</h2>
          <p className="mt-2 text-gray-600">
            All content and materials on ShelfShift Inventory, including text, images, and software, are the property of ShelfShift Inventory or its licensors. Users are not permitted to copy, modify, or distribute any content without prior written consent.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">6. Limitation of Liability</h2>
          <p className="mt-2 text-gray-600">
            ShelfShift Inventory will not be held liable for any damages that arise from the use or inability to use our platform. Users acknowledge that they use the platform at their own risk.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">7. Modifications to Terms</h2>
          <p className="mt-2 text-gray-600">
            We reserve the right to modify these Terms at any time. Users will be notified of significant changes, and continued use of the platform after modifications constitutes acceptance of the new Terms.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">8. Governing Law</h2>
          <p className="mt-2 text-gray-600">
            These Terms are governed by the laws of [Your Country], without regard to conflict of law principles. Any legal disputes arising out of these Terms will be resolved in the courts of [Your City].
          </p>

          <p className="mt-6 text-gray-600">
            For further information or questions about these Terms, please contact us at support@shelfshift.com.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}
