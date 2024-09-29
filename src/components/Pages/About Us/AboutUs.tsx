import Image from "next/image";
import Link from "next/link";
import { Clock, Truck, FileText, Zap, Users, Award, Play } from "lucide-react";
import "./aboutUs.css"; // Import the CSS file for the banner
import pharmasiaLogo from "@/assets/img/pharmasia logo 2.png";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative  bg-gray-100 about-us-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center">
          <div className="w-full md:w-2/3">
            <div className="flex items-center mb-4">
              <Image
                src={pharmasiaLogo}
                alt="Pharmasia Logo"
                width={250}
                height={250}
              />
            </div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Your one and
              <br />
              only online pharmacy!
            </h1>
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-[#384147]">Always on time</span>
              <Truck className="w-5 h-5 text-blue-600 ml-4 mr-2" />
              <span className="text-[#384147]">
                Free delivery for regular customers
              </span>
            </div>
          </div>
          <div className="hidden md:block w-1/2"></div>
        </div>
      </section>

      {/* Dental Care Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
          Effective and reliable
          <br />
          protection for your teeth
        </h2>
        <p className="text-center text-gray-600 mb-12">
          The brush handle fits perfectly in the hand, is slim and beautifully
          made.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FileText,
              title: "Health Certificate 2000 - professional care",
              description: "The highest quality and protection for your teeth",
            },
            {
              icon: Zap,
              title: "Sonic cleaning and whitening power",
              description: "At the same time, it protects and whitens",
            },
            {
              icon: Award,
              title: "3 types of cleaning tips",
              description: "Round, rectangular and super-wide",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <item.icon className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Section */}
      <section className="bg-orange-500 text-white  about-us-2 w-full">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center w-full">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Hundreds of thousands
              <br />
              of products at bargain
              <br />
              prices
            </h2>
            <p className="mb-6">
              Completely the needs of home medicine chest
              <br />
              and professional offices
            </p>
            <Link
              href="#"
              className="bg-blue-900 text-white font-bold py-2 px-4 rounded"
            >
              Shop now
            </Link>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      </section>

      {/* Online Provider Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Your home medical
          <br />
          provider now also online
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              image:
                "https://medi.arenacommerce.com/cdn/shop/files/about-us-3_1208x.png?v=1614285862",
              title:
                "Top quality products and proven suppliers with quality certificates!",
              description: "They have CEE 2020 certificate.",
            },
            {
              image:
                "https://medi.arenacommerce.com/cdn/shop/files/about-us-4_1208x.png?v=1614285861",
              title:
                "Many years of experience and a high level of consumer confidence",
              description: "Developed for over 30 years on the market",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Your one and only
              <br />
              online pharmacy!
            </h2>
            <p className="text-gray-600 mb-6">
              Only this week 30% to 50% cheaper!
            </p>
            <div className="flex items-center mb-6">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-600 mr-4">
                Up to 5 users simultaneously
              </span>
              <Award className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-600">Has HEALTH certificate</span>
            </div>
            <Link
              href="/contact"
              className="bg-orange-500 text-white font-bold py-2 px-4 rounded"
            >
              Contact
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <video
                src="https://cdn.shopify.com/s/files/1/0430/9811/2168/files/electric_toothbrush.mp4?v=1596169214"
                controls
                preload="metadata"
                poster="https://medi.arenacommerce.com/cdn/shop/files/about-us-5_1208x.png?v=1614285861"
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white bg-opacity-75 rounded-full p-4 shadow-lg">
                <Play className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
