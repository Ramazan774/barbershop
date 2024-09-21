import React from "react";
import Link from "next/link";
import Map from "../../components/Map";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-10">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="relative bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left Section - Location & Contact Info */}
            <div className="relative bg-gradient-to-br from-yellow-500 to-blue-900 px-6 py-10 sm:px-10 xl:p-12">
              <div className="inset-0 bg-pattern opacity-10"></div>
              
              <h2 className="text-2xl font-bold text-white">Location & Hours</h2>
              <ul className="mt-6 space-y-2 text-base text-indigo-50">
                {[
                  { day: "Monday", hours: "11:00 am - 6:00 pm" },
                  { day: "Tuesday", hours: "10:00 am - 6:00 pm" },
                  { day: "Wednesday", hours: "10:00 am - 6:00 pm" },
                  { day: "Thursday", hours: "10:00 am - 6:00 pm" },
                  { day: "Friday", hours: "10:00 am - 7:00 pm" },
                  { day: "Saturday", hours: "10:00 am - 7:00 pm" },
                  { day: "Sunday", hours: "11:00 am - 5:00 pm" },
                ].map((slot) => (
                  <li key={slot.day} className="flex justify-between">
                    <span>{slot.day}</span>
                    <span>{slot.hours}</span>
                  </li>
                ))}
              </ul>

              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-indigo-50 items-center">
                  <a href="tel:+16089494477" className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-indigo-200"
                      fill="black"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <span className="ml-3">+1 (608) 949-4477</span>
                  </a>
                </dd>
                <dd className="flex text-base text-indigo-50 items-center">
                  <a href="mailto:magicobarbershop2020@gmail.com" className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-indigo-200"
                      fill="black"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <span className="ml-3">magicobarbershop2020@gmail.com</span>
                  </a>
                </dd>
              </dl>
              <ul role="list" className="mt-8 flex space-x-6">
                <li>
                  <Link href="https://www.facebook.com/Magicobarbershop2020/about/?_rdr" target="_blank" className="text-indigo-200 hover:text-white transition">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="black" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/magico.barbershop/" target="_blank" className="text-indigo-200 hover:text-white transition">
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="black"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.796.24 2.217.402a4.606 4.606 0 0 1 1.654 1.073 4.606 4.606 0 0 1 1.073 1.654c.163.421.348 1.047.402 2.217.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.796-.402 2.217a4.606 4.606 0 0 1-1.073 1.654 4.606 4.606 0 0 1-1.654 1.073c-.421.163-1.047.348-2.217.402-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.796-.24-2.217-.402a4.606 4.606 0 0 1-1.654-1.073 4.606 4.606 0 0 1-1.073-1.654c-.163-.421-.348-1.047-.402-2.217-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.796.402-2.217a4.606 4.606 0 0 1 1.073-1.654A4.606 4.606 0 0 1 4.933 2.635c.421-.163 1.047-.348 2.217-.402 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.015 7.052.072 5.772.129 4.915.32 4.186.604a6.607 6.607 0 0 0-2.401 1.573A6.607 6.607 0 0 0 .604 4.186c-.283.729-.475 1.586-.532 2.866C0 8.332 0 8.741 0 12s.015 3.668.072 4.948c.057 1.28.249 2.137.532 2.866a6.607 6.607 0 0 0 1.573 2.401 6.607 6.607 0 0 0 2.401 1.573c.729.283 1.586.475 2.866.532 1.28.057 1.689.072 4.948.072s3.668-.015 4.948-.072c1.28-.057 2.137-.249 2.866-.532a6.607 6.607 0 0 0 2.401-1.573 6.607 6.607 0 0 0 1.573-2.401c.283-.729.475-1.586.532-2.866.057-1.28.072-1.689.072-4.948s-.015-3.668-.072-4.948c-.057-1.28-.249-2.137-.532-2.866a6.607 6.607 0 0 0-1.573-2.401A6.607 6.607 0 0 0 19.814.604c-.729-.283-1.586-.475-2.866-.532C15.668 0 15.259 0 12 0z"></path>
                      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM18.406 4.594a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Section - Contact Form */}
            <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-2xl font-semibold text-gray-900">Send us a message</h3>
              <form 
                action="/success" 
                name="contact" 
                method="POST" 
                data-netlify="true"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
              <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 transition"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 transition"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 transition"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 transition"
                      required
                    ></textarea>
                  </div>
                </div>
                <div data-netlify-recaptcha="true"></div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent bg-yellow-500 px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <br></br>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
