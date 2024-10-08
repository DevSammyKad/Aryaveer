import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Logo"
                width={200}
                height={100}
                className="bg-tr"
              />
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-primary transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/refund-policy"
              className="hover:text-primary transition-colors"
            >
              Refund Policy
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Aryaveer Enterprises . All rights
            reserved.
            <br /> Design by Sameer Kad & Prajwal
          </p>
        </div>
      </div>
    </footer>
  );
}
