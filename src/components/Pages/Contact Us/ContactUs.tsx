import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const instagramPost = [
  "https://medi.arenacommerce.com/cdn/shop/files/home1-instagram-1_280x.png?v=1613558195",
  "https://medi.arenacommerce.com/cdn/shop/files/home1-instagram-2_280x.png?v=1613558195",
  "https://medi.arenacommerce.com/cdn/shop/files/home1-instagram-3_280x.png?v=1613558195",
  "https://medi.arenacommerce.com/cdn/shop/files/home1-instagram-4_280x.png?v=1613558195",
  "https://medi.arenacommerce.com/cdn/shop/files/home1-instagram-5_280x.png?v=1613558195",
  "https://medi.arenacommerce.com/cdn/shop/files/home1-instagram-6_280x.png?v=1613558195",
];

export default function ContactUs() {
  return (
    <div className="min-h-screen container">
      {/* Main Content */}
      <main className="w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Information */}
            <div className="lg:w-1/3 pr-8">
              <h1 className="text-4xl font-bold text-blue-900 mb-4">
                How can we help you?
              </h1>
              <p className="text-gray-600 mb-6">
                We are at your disposal 7 days a week!
              </p>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">
                  0020 500 - PHARMASIA - 000
                </h2>
                <p className="text-gray-600">Monday - Friday: 9:00 - 20:00</p>
                <p className="text-gray-600">Saturday: 11:00 - 15:00</p>
              </div>
              <a
                href="mailto:contact@pharmasia.com"
                className="text-blue-600 hover:underline"
              >
                contact@pharmasia.com
              </a>
              <div className="flex mt-4 space-x-4">
                <Link href="#" className="text-gray-400 hover:text-blue-600">
                  <FaFacebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600">
                  <FaInstagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600">
                  <FaYoutube className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600">
                  <FaLinkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="lg:w-2/3 mt-6 lg:mt-0">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://via.placeholder.com/800x600?text=Map+of+store+location"
                  alt="Map of store location"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Our store location</h3>
                  <p>1487 Rocky Horse Carrefour</p>
                  <p>Arlington, TX 16819</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Fill up the form if you have any question
            </h2>
            <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="mt-1 p-4 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="mt-1 p-4 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 p-4 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          {/* Instagram Feed */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Follow @PHARMASIA on instagram
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {instagramPost.map((src, i) => (
                <div key={i} className="aspect-w-1 aspect-h-1">
                  <Image
                    src={src}
                    alt={`Instagram post ${i + 1}`}
                    // layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    width={150}
                    height={150}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
