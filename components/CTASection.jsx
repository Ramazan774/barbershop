import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTASection = () => {
    return (
        <section>
            <div className="relative bg-white py-16">
                <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block" aria-hidden="true"></div>
                <div className="mx-auto max-w-7xl lg:bg-transparent lg:px-8">
                    <div className="lg:grid lg:grid-cols-12">
                        <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                            <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true"></div>
                            <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
                                <div className="aspect-h-6 aspect-w-10 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1">
                                    <Image 
                                        className="rounded-3xl object-cover object-center shadow-2xl" 
                                        src="/assets/img5.webp" 
                                        alt="Barbers cutting hair" 
                                        width={400}
                                        height={400}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-gradient-to-r from-gray-700 via-gray-900 to-black lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                            <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                                <svg className="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                    <defs>
                                        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-800" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                                </svg>
                                <svg className="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                    <defs>
                                        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-500" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                                </svg>
                            </div>
                            <div className="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                                <h2 className="merienda text-3xl font-bold tracking-tight text-white" id="join-heading">Elevate Your Grooming Experience</h2>
                                <p className="roboto text-lg text-white">{`Step into our barbershop, where timeless tradition meets cutting-edge style. Whether you’re looking for a fresh cut or a classic shave, our skilled barbers are here to give you the experience you deserve.`}</p>
                                <Link href="/contact" className="block merienda w-full rounded-2xl border border-transparent bg-yellow-500 px-5 py-3 text-center text-base font-bold text-black shadow-lg hover:bg-yellow-400 transition duration-300 sm:inline-block sm:w-auto">Get in touch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTASection;
