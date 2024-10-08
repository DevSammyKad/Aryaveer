import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Package, Phone, Truck } from 'lucide-react';
import Image from 'next/image';
import landing from '@/images/landing.jpg';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="Industrial screws and bolts"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="550"
              src={landing}
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Reliable Screws, Delivered in Bulk
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Premium quality fasteners for all your industrial needs. Fast
                  shipping, competitive pricing, and unmatched customer service.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="contact"
                >
                  Get a Quote
                </Link>

                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="/products"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Aryaveer Enterprises{' '}
        </h1>
        <p className="text-xl mb-6">
          Your one-stop shop for bulk screws and fasteners
        </p>
        <Link href="/products">
          <Button size="lg">Browse Products</Button>
        </Link>
      </section>

      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Why Choose ScrewFast?
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start">
            <div className="grid gap-1">
              <Package className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-lg font-bold text-center">
                Extensive Inventory
              </h3>
              <p className="text-sm text-gray-500 text-center">
                Wide range of screws, bolts, and fasteners for every
                application.
              </p>
            </div>
            <div className="grid gap-1">
              <Truck className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-lg font-bold text-center">Fast Shipping</h3>
              <p className="text-sm text-gray-500 text-center">
                Quick turnaround times and reliable delivery across the country.
              </p>
            </div>
            <div className="grid gap-1">
              <svg
                className=" w-12 h-12 mx-auto mb-4 text-blue-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <h3 className="text-lg font-bold text-center">
                Competitive Pricing
              </h3>
              <p className="text-sm text-gray-500 text-center">
                Bulk discounts and flexible pricing options to fit your budget.
              </p>
            </div>
            <div className="grid gap-1">
              <Phone className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-lg font-bold text-center">Expert Support</h3>
              <p className="text-sm text-gray-500 text-center">
                Knowledgeable staff ready to assist with your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-6">
          Explore our product catalog and find the screws you need.
        </p>
        <Link href="/products">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </Link>
      </section>
    </div>
  );
}
