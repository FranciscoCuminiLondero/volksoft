import React from 'react';
import {
  FaAngleDown,
  FaGlobe,
  FaFileAlt,
  FaRegUser,
  FaCalendar,
  FaBlog,
  FaUserAlt,
  FaElementor,
} from 'react-icons/fa';

const Home = () => {
  return (
    <>
      {/* Section 0: Welcome Section  */}
      <section className="py-16 bg-transparent z-10">
        <div className="container mx-auto px-4">
          {/* Card Container */}
          <div className="max-w-3xl mx-auto bg-black/30 rounded-2xl shadow-xl p-8 text-center">
            {/* Title */}
            <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-gray-500 via-gray-300 to-gray-100 text-6xl sm:text-5xl font-bold tracking-wide mb-6 p-2">
              Transforming Ideas into Software
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-6">
              We are a team of passionate software developers dedicated to
              crafting innovative solutions for businesses of all sizes. With
              expertise in cutting-edge technologies and a commitment to
              excellence, we transform ideas into reality.
            </p>

            {/* Call-to-Action Button with Icon */}
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition duration-300 cursor-pointer shadow-2xl"
            >
              Get started
              <FaAngleDown className="ml-2 font-black space-x-1 text-l" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-transparent">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-8">What We Do</h2>

          {/* Description */}
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
            We specialize in creating websites and digital solutions for
            businesses, entrepreneurs, and creatives.
          </p>

          {/* List of Services */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
            {/* Web Development */}
            <a
              href="#web-development"
              className="group flex flex-col items-center space-y-2 cursor-pointer"
            >
              <FaGlobe className="text-purple-500 text-3xl transition-transform duration-300 group-hover:scale-110 mb-4" />
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                Web Development
              </span>
            </a>

            {/* Landing Pages */}
            <a
              href="#landing-pages"
              className="group flex flex-col items-center space-y-2 cursor-pointer"
            >
              <FaFileAlt className="text-blue-500 text-3xl transition-transform duration-300 group-hover:scale-110 mb-4" />
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                Landing Pages
              </span>
            </a>

            {/* Portfolios */}
            <a
              href="#portfolios"
              className="group flex flex-col items-center space-y-2 cursor-pointer"
            >
              <FaRegUser className="text-green-500 text-3xl transition-transform duration-300 group-hover:scale-110 mb-4" />
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                Portfolios
              </span>
            </a>

            {/* Blogs */}
            <a
              href="#blogs"
              className="group flex flex-col items-center space-y-2 cursor-pointer"
            >
              <FaBlog className="text-red-500 text-3xl transition-transform duration-300 group-hover:scale-110 mb-4" />
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                Blogs
              </span>
            </a>
            {/* One Pages */}
            <a
              href="#one-pages"
              className="group flex flex-col items-center space-y-2 cursor-pointer"
            >
              <FaElementor className="text-yellow-500 text-3xl transition-transform duration-300 group-hover:scale-110 mb-4" />
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                One Pages
              </span>
            </a>
          </div>
          {/* "And More" */}
          <div>
            <div className="flex flex-col items-center space-y-6">
              <a href="#">
                <p className="text-gray-300 text-sm font-medium text-center w-fit mt-10 border rounded-2xl px-4 py-1 transition-transform duration-500 hover:scale-110 ">
                  ... and more
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
