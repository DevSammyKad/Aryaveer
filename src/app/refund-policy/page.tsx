import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
      <p className="text-gray-600 mb-2">
        <strong>Last Updated: 15 Sep 2024</strong>
      </p>

      <p className="mb-4">
        At Aryaveer Enterprises, we strive to provide our customers with
        high-quality products and services. If you are not satisfied with your
        purchase, please review our refund policy below.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        1. Eligibility for Refunds
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Customers may request a refund within{' '}
          <strong>[insert number of days]</strong> days from the date of
          purchase.
        </li>
        <li>
          To be eligible for a refund, the item must be unused and in the same
          condition that you received it, along with the original packaging.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        2. Non-Refundable Items
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Certain items are non-refundable, including:</li>
        <li>Gift cards</li>
        <li>Downloadable software products</li>
        <li>Some health and personal care items</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. Refund Process</h2>
      <ol className="list-decimal ml-6 mb-4">
        <li>
          To initiate a refund, please contact our customer service team at{' '}
          <strong>[insert contact email]</strong> with your order number and
          reason for the refund.
        </li>
        <li>
          Once your request is received, we will send you a confirmation email
          and instructions on how to return your item.
        </li>
        <li>
          After we receive the returned item, we will inspect it and notify you
          of the status of your refund.
        </li>
        <li>
          If approved, your refund will be processed, and a credit will
          automatically be applied to your original method of payment within{' '}
          <strong>[insert number of days]</strong> days.
        </li>
      </ol>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        4. Late or Missing Refunds
      </h2>
      <p className="mb-4">
        If you haven’t received a refund yet, please check your bank account
        again. Then contact your credit card company, as it may take some time
        before your refund is officially posted. If you’ve done all of this and
        you still have not received your refund, please contact us at{' '}
        <strong>[insert contact email]</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Exchanges</h2>
      <p className="mb-4">
        We only replace items if they are defective or damaged. If you need to
        exchange it for the same item, please contact us at{' '}
        <strong>[insert contact email]</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">6. Shipping Costs</h2>
      <p className="mb-4">
        Shipping costs are non-refundable. If you receive a refund, the cost of
        return shipping will be deducted from your refund.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        7. Changes to Refund Policy
      </h2>
      <p className="mb-4">
        We reserve the right to update or change our refund policy at any time.
        Any changes will be posted on this page, and your continued use of our
        services after such changes constitutes acceptance of the new policy.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        8. Contact Information
      </h2>
      <p className="mb-4">
        For any questions regarding this refund policy, please contact us at:
      </p>
      <p className="mb-4">
        <strong>Aryaveer Enterprises</strong>
        <br />
        Near Canol At Satkar Sthal East
        <br />
        Rajgurunagar
        <br />
        Pune, Maharashtra 410505, India
        <br />
        Phone: 7249695978
        <br />
        Email:{' '}
        <a href="mailto:rohitshete377@gmail.com" className="text-blue-500">
          rohitshete377@gmail.com
        </a>
      </p>
    </div>
  );
};

export default RefundPolicy;
