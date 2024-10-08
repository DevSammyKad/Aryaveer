import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Wrench } from 'lucide-react';
import logo from '@/images/logo.jpg';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <Image src={logo} alt="Logo" width={200} height={100}></Image>
          </Link>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-600 hover:text-blue-600"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <form className="flex w-full md:w-auto">
          <Input
            type="search"
            placeholder="Search screws..."
            className="w-full md:w-64"
          />
          <Button type="submit" className="ml-2">
            Search
          </Button>
        </form>
      </div>
    </header>
  );
}
