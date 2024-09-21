// pages/success.js
import Link from 'next/link';

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-600">Your submission has been received. We will get back to you soon.</p>
      <Link href="/">
        <a className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Return to Home
        </a>
      </Link>
    </div>
  );
}
