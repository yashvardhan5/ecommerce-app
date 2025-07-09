import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='max-w-5xl mx-auto px-4 py-10 text-gray-700'>
      <h1 className='text-3xl font-bold mb-6'>Privacy Policy — Zyphor</h1>


      <p className='mb-6'>
        At <strong>Zyphor</strong>, your privacy is extremely important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit or make a purchase from Zyphor. 
      </p>

      <h2 className='text-xl font-semibold mt-6 mb-2'>1. Information We Collect</h2>
      <ul className='list-disc pl-6 mb-4'>
        <li><strong>Personal Identification:</strong> Name, email, phone, billing & shipping address</li>
        <li><strong>Payment Info:</strong> Handled securely via Razorpay (not stored by us)</li>
        <li><strong>Technical Data:</strong> IP address, browser type, device info</li>
        <li><strong>Usage Data:</strong> Pages visited, time spent, clickstream behavior</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6 mb-2'>2. How We Use Your Information</h2>
      <ul className='list-disc pl-6 mb-4'>
        <li>To process and deliver orders</li>
        <li>To send order updates or support messages</li>
        <li>To send promotional emails (opt-out available)</li>
        <li>To analyze and improve website performance</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6 mb-2'>3. Cookies & Tracking</h2>
      <p className='mb-4'>
        We use cookies to store preferences, analyze traffic (via Google Analytics), and enhance your experience. You can manage cookie settings via your browser.
      </p>

      <h2 className='text-xl font-semibold mt-6 mb-2'>4. Sharing of Data</h2>
      <p className='mb-4'>
        We do <strong>not sell or rent</strong> your personal data. We only share information with:
      </p>
      <ul className='list-disc pl-6 mb-4'>
        <li>Payment processors like Razorpay</li>
        <li>Logistics partners for order delivery</li>
        <li>Legal authorities if required</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6 mb-2'>5. Data Retention</h2>
      <p className='mb-4'>We retain your data only as long as necessary for business, legal, or tax purposes.</p>

      <h2 className='text-xl font-semibold mt-6 mb-2'>6. Your Rights</h2>
      <ul className='list-disc pl-6 mb-4'>
        <li>Access or correct your personal data</li>
        <li>Request deletion of your data</li>
        <li>Withdraw consent for promotional emails</li>
        <li>Lodge a complaint with a data authority</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6 mb-2'>7. Children’s Privacy</h2>
      <p className='mb-4'>Our platform is not intended for children under 13. We do not knowingly collect data from minors.</p>

      <h2 className='text-xl font-semibold mt-6 mb-2'>8. Data Security</h2>
      <p className='mb-4'>We use industry-standard methods (HTTPS, firewalls, access control) to protect your data. However, no online system is 100% secure.</p>

      <h2 className='text-xl font-semibold mt-6 mb-2'>9. Changes to This Policy</h2>
      <p className='mb-4'>We may update this Privacy Policy. All changes will be posted here with a new effective date.</p>

      <h2 className='text-xl font-semibold mt-6 mb-2'>10. Contact Us</h2>
      <p className='mb-1'>📧 Email: <a href='mailto:admin@zyphor.com' className='text-blue-600 underline'>admin@zyphor.com</a></p>
      <p className='mb-4'>📱 Phone: +91 1234567890</p>

      <hr className='my-6' />
      <p className='text-sm text-gray-500'>This policy complies with India's DPDPA 2023 and basic global standards such as GDPR and CCPA.</p>
    </div>
  );
};

export default PrivacyPolicy;
