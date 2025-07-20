"use client";
import { ArrowRight, ShieldCheck, Smartphone, CreditCard } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
  <div className="bg-blue-50 min-h-screen text-gray-800">
    

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Your Financial Journey
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Transforming Banking Experiences. Empower your finances with Viztrust,
          where security meets simplicity for seamless online banking.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-black text-white px-6 py-3 rounded-lg">Install Now</button>
          <button className="bg-white border border-gray-300 px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
        <div className="flex justify-center gap-10 text-gray-700">
          <div>
            <p className="text-2xl font-bold">2M+</p>
            <p>Registered Customers</p>
          </div>
          <div>
            <p className="text-2xl font-bold">$10B+</p>
            <p>Total Revenue</p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10 bg-white text-center">
        <h2 className="text-xl font-semibold mb-4">Powering Progress Together</h2>
        <p className="text-gray-600 mb-6">Banking Partnerships</p>
        <div className="flex justify-center gap-8">
          <div className="w-24 h-10 bg-gray-200 rounded"></div>
          <div className="w-24 h-10 bg-gray-200 rounded"></div>
          <div className="w-24 h-10 bg-gray-200 rounded"></div>
        </div>
      </section>

      {/* CTA Access Account */}
      <section className="text-center bg-gradient-to-r from-blue-100 to-blue-50 py-14">
        <h2 className="text-2xl font-bold mb-4">Access Your Account Here</h2>
        <p className="text-gray-600 mb-6">
          Log in now for seamless control over your accounts with Viztrust.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg">Log In</button>
      </section>
    </div>

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
