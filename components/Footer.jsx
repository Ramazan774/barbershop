import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-[#222222]">
        <div className="roboto mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="https://www.facebook.com/Magicobarbershop2020/about/?_rdr" target="_blank" className="text-gray-200 hover:text-gray-400">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/magico.barbershop/" target="_blank" className="text-gray-200 hover:text-gray-400">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://www.google.com/search?q=magico+barbershop&oq=magi&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgYIAhBFGDsyDQgDEAAYgwEYsQMYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBBzk3NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank" className="text-gray-200 hover:text-gray-400">
              <span className='sr-only'>Google Review</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 28 28" aria-hidden="true">
                <path fillRule="evenodd" d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="" target="_blank" className="text-gray-200 hover:text-gray-400">
              <span className='sr-only'>Yelp</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 54 54" aria-hidden="true">
                <path fillRule="evenodd" d="M 21.609375 2 C 18.933594 2 12.800781 3.8125 11.5 5.15625 C 11.019531 5.613281 10.898438 6.300781 11.019531 6.757813 C 11.257813 7.214844 20.988281 21.980469 20.988281 21.980469 C 22.046875 23.660156 22.734375 23.96875 23.167969 23.96875 C 23.324219 23.96875 23.445313 23.929688 23.542969 23.902344 C 23.902344 23.785156 25.105469 23.355469 24.863281 20.609375 C 24.746094 17.515625 23.785156 3.898438 23.664063 3.210938 C 23.425781 2.640625 23.0625 2.179688 22.34375 2.0625 C 22.144531 2.019531 21.898438 2 21.609375 2 Z M 21.609375 4 C 21.660156 4 21.699219 4 21.734375 4 C 21.960938 6.582031 22.753906 17.839844 22.863281 20.6875 L 22.871094 20.78125 C 22.886719 20.953125 22.890625 21.105469 22.894531 21.242188 C 22.820313 21.136719 22.742188 21.015625 22.65625 20.878906 C 19.363281 15.882813 14.570313 8.585938 13.152344 6.386719 C 14.445313 5.546875 19.269531 4 21.609375 4 Z M 36.738281 15.996094 C 36.421875 15.996094 36.125 16.082031 35.859375 16.269531 C 35.109375 17.007813 35.375 16.484375 31.058594 22.203125 L 29.015625 24.832031 C 28.535156 25.40625 28.648438 26.359375 29.128906 27.046875 C 29.527344 27.617188 30.046875 27.964844 30.734375 27.964844 C 30.875 27.964844 31.019531 27.953125 31.175781 27.921875 C 31.535156 27.808594 32.257813 27.691406 33.578125 27.347656 C 41.855469 25.519531 41.929688 25.535156 42.292969 25.308594 C 42.769531 24.964844 43.011719 24.503906 43.011719 23.816406 L 43.011719 23.703125 C 42.773438 21.875 39.21875 16.957031 37.539063 16.15625 C 37.269531 16.054688 37 15.996094 36.738281 15.996094 Z M 36.859375 18.074219 C 37.996094 18.882813 40.4375 22.242188 40.945313 23.660156 C 40.316406 23.816406 39 24.105469 36.777344 24.59375 L 33.144531 25.394531 L 33.109375 25.40625 L 33.074219 25.414063 C 32.375 25.59375 31.855469 25.707031 31.46875 25.792969 C 31.207031 25.851563 30.992188 25.898438 30.800781 25.949219 C 30.792969 25.933594 30.78125 25.917969 30.765625 25.902344 C 30.757813 25.890625 30.753906 25.878906 30.746094 25.863281 L 32.652344 23.40625 C 35.988281 18.996094 36.503906 18.414063 36.859375 18.074219 Z M 9.402344 23.96875 C 8.921875 23.96875 8.320313 24.199219 7.960938 24.769531 C 7.121094 25.917969 6.859375 29.570313 7.101563 32.089844 C 7.21875 32.890625 7.339844 33.542969 7.578125 34 C 7.9375 34.574219 8.417969 34.917969 9.019531 34.917969 C 9.378906 34.917969 9.109375 34.8125 16.3125 32.753906 L 19.558594 31.722656 C 20.398438 31.492188 20.984375 30.921875 20.984375 30.003906 C 20.984375 29.089844 20.539063 28.332031 19.699219 27.988281 L 17.417969 27.074219 C 9.609375 23.980469 9.761719 23.96875 9.402344 23.96875 Z M 9.511719 26.078125 C 9.871094 26.214844 10.449219 26.449219 11.222656 26.757813 C 12.371094 27.21875 14.085938 27.902344 16.671875 28.925781 L 18.921875 29.828125 L 15.734375 30.839844 C 11.773438 31.972656 10.070313 32.511719 9.257813 32.78125 C 9.183594 32.476563 9.117188 32.0625 9.085938 31.84375 C 8.867188 29.457031 9.183594 26.84375 9.511719 26.078125 Z M 30.894531 32.015625 C 30.351563 32.015625 29.84375 32.1875 29.453125 32.609375 C 29.0625 33.035156 28.769531 34.230469 29.25 34.917969 L 30.570313 36.863281 C 34.894531 43.503906 34.917969 43.84375 35.277344 44.074219 C 35.558594 44.339844 35.878906 44.453125 36.21875 44.453125 C 36.460938 44.453125 36.710938 44.394531 36.957031 44.300781 C 38.882813 43.613281 42.640625 39.0625 42.878906 37.234375 C 43 36.660156 42.761719 36.085938 42.28125 35.515625 C 42.039063 35.285156 41.539063 35.203125 34.8125 33.113281 L 31.734375 32.136719 C 31.449219 32.058594 31.167969 32.015625 30.894531 32.015625 Z M 22.765625 34.015625 C 22.238281 34.015625 21.75 34.171875 21.449219 34.605469 L 19.886719 36.433594 C 14.480469 42.5 14.242188 42.84375 14.121094 43.1875 C 14 43.417969 14 43.644531 14 43.875 C 14.121094 44.214844 14.242188 44.445313 14.484375 44.789063 C 15.707031 46.0625 20.8125 48 23.082031 48 C 23.257813 48 23.417969 47.988281 23.558594 47.964844 C 24.160156 47.847656 24.640625 47.503906 24.878906 46.933594 C 25 46.589844 25 46.363281 25 39.152344 L 25 35.828125 C 25 34.828125 24.558594 34.496094 23.71875 34.152344 C 23.40625 34.066406 23.078125 34.015625 22.765625 34.015625 Z M 31.066406 34.03125 C 31.097656 34.039063 31.136719 34.046875 31.175781 34.058594 L 34.21875 35.023438 C 36.332031 35.679688 37.832031 36.140625 38.902344 36.46875 C 39.785156 36.738281 40.46875 36.945313 40.871094 37.078125 C 40.5 38.367188 37.738281 41.648438 36.441406 42.34375 C 36.324219 42.160156 36.167969 41.910156 35.988281 41.625 C 35.394531 40.675781 34.285156 38.902344 32.226563 35.738281 Z M 22.867188 36.019531 C 22.902344 36.023438 22.949219 36.027344 23 36.035156 L 23 39.152344 C 23 43.152344 23 45.167969 22.980469 46 C 21.203125 45.941406 17.453125 44.480469 16.21875 43.640625 C 16.925781 42.78125 18.761719 40.699219 21.40625 37.730469 Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-200">&copy; {new Date().getFullYear()} Magico Barbershop, Inc. All rights reserved.</p>
            <p className="text-xs leading-5 text-gray-100 text-center md:text-center">Created by<a href="https://novsweb.com"> Novs</a> Web Design Group</p>
          </div>
        </div>
      </footer>
    
    )
}

export default Footer;