import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 mt-20">
      <div className="container mx-auto px-4">
        {/* Top row with key features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-200 pb-6 mb-6">
          <div className="flex items-center justify-center md:justify-start">
            <svg
              className="w-6 h-6 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <span className="font-semibold">100% Money back</span>
          </div>
          <div className="flex items-center justify-center">
            <svg
              className="w-6 h-6 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="font-semibold">Non-contact shipping</span>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <svg
              className="w-6 h-6 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="font-semibold">
              Free delivery for order over $200
            </span>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Information column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Delivery information
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Sales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Account column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  My account
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  My orders
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Store column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Store</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Affiliate
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Discount
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Latest products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Need help column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Need help</h3>
            <p className="font-bold text-2xl text-blue-600 mb-2">
              0020 500 - Pharmasia - 000
            </p>
            <p className="mb-2">Monday - Friday: 9:00 - 20:00</p>
            <p className="mb-4">Saturday: 11:00 - 15:00</p>
            <Link
              href="mailto:contact@phamasia.com"
              className="text-blue-600 hover:underline"
            >
              contact@phamasia.com
            </Link>
          </div>
        </div>

        {/* Store information and social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Our store</h3>
            <p>1487 Rocky Horse Carrefour Arlington, TX 16819</p>
            <Link href="#" className="text-blue-600 hover:underline">
              Show on map
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-blue-600">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-600">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-600">
              <Youtube className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-600">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Copyright and payment methods */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="mb-4 md:mb-0">
            &copy; 2024 Pharmasia. All Rights Reserved
          </p>
          <div className="flex space-x-2">
            {/*payment method icons */}
            <div className="w-10 h-6 bg-gray-300 rounded"></div>
            <div className="w-10 h-6 bg-gray-300 rounded"></div>
            <div className="w-10 h-6 bg-gray-300 rounded"></div>
            <div className="w-10 h-6 bg-gray-300 rounded"></div>
            <div className="w-10 h-6 bg-gray-300 rounded"></div>
            <div className="w-10 h-6 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
