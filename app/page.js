"use client";
import { ArrowRight, ShieldCheck, Smartphone, CreditCard } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ✅ Hero Section */}
      <header className="flex flex-col items-center justify-center flex-grow px-6 py-12 text-center bg-gradient-to-br from-blue-50 to-blue-100">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4">
          Welcome to Web Banking
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
          Manage your finances securely and efficiently. Access your accounts,
          transfer funds, pay bills, and more—all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Login
          </button>
          <button className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all">
            Sign Up
          </button>
        </div>
      </header>

      {/* ✅ Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Web Banking?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer seamless banking solutions to make your life easier and your finances more secure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card */}
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-600">Your safety is our priority with advanced encryption technology.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <Smartphone className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile Banking</h3>
              <p className="text-gray-600">Access your accounts anytime, anywhere from your mobile device.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <CreditCard className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Payments</h3>
              <p className="text-gray-600">Pay your bills and transfer money with just a few taps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Call-to-Action */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Sign up today and enjoy seamless online banking.</p>
        <Link href='/createAcc'>
        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition flex items-center justify-center mx-auto">
          Create an Account <ArrowRight className="ml-2 w-5 h-5" />
        </button>
        </Link>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Web Banking. All rights reserved.</p>
      </footer>
    </div>
  );
}
