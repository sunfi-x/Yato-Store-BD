'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';

// Sample cart items for checkout
const cartItems = [
  { product: products[0], quantity: 2 },
  { product: products[1], quantity: 1 },
];

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 10000 ? 0 : 150;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0A0A0A] to-[#1A1A1A] pt-24">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-black text-white mb-2">Checkout</h1>
          <div className="flex items-center gap-2 text-white/60">
            <Link href="/" className="hover:text-[#E31E24] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/cart" className="hover:text-[#E31E24] transition-colors">Cart</Link>
            <span>/</span>
            <span className="text-[#E31E24]">Checkout</span>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-center gap-4">
            {[
              { num: 1, label: 'Shipping' },
              { num: 2, label: 'Payment' },
              { num: 3, label: 'Review' },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center">
                <button
                  onClick={() => setStep(s.num)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
                    step >= s.num
                      ? 'bg-[#E31E24] text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    step >= s.num ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {step > s.num ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      s.num
                    )}
                  </span>
                  <span className="font-semibold hidden sm:block">{s.label}</span>
                </button>
                {idx < 2 && (
                  <div className={`w-12 h-0.5 mx-2 ${step > s.num ? 'bg-[#E31E24]' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                
                {/* Step 1: Shipping */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                          placeholder="Enter first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                          placeholder="Enter last name"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                          placeholder="+880 1XXX-XXXXXX"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                          placeholder="House/Flat No, Street, Area"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                        <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31E24]">
                          <option value="">Select City</option>
                          <option value="dhaka">Dhaka</option>
                          <option value="chittagong">Chittagong</option>
                          <option value="sylhet">Sylhet</option>
                          <option value="rajshahi">Rajshahi</option>
                          <option value="khulna">Khulna</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                          placeholder="1234"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Order Notes (Optional)</label>
                        <textarea
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31E24] h-24 resize-none"
                          placeholder="Any special instructions for delivery..."
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => setStep(2)}
                      className="w-full mt-8 py-4 bg-gradient-to-r from-[#E31E24] to-[#B91C1F] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                    >
                      Continue to Payment
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Step 2: Payment */}
                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
                    
                    <div className="space-y-4">
                      {[
                        { id: 'cod', name: 'Cash on Delivery', icon: '💵', desc: 'Pay when you receive your order' },
                        { id: 'bkash', name: 'bKash', icon: '📱', desc: 'Pay via bKash mobile banking' },
                        { id: 'nagad', name: 'Nagad', icon: '📲', desc: 'Pay via Nagad mobile banking' },
                        { id: 'bank', name: 'Bank Transfer', icon: '🏦', desc: 'Direct bank transfer' },
                        { id: 'card', name: 'Credit/Debit Card', icon: '💳', desc: 'Visa, Mastercard, American Express' },
                      ].map((method) => (
                        <label
                          key={method.id}
                          className={`flex items-center gap-4 p-5 border-2 rounded-xl cursor-pointer transition-all ${
                            paymentMethod === method.id
                              ? 'border-[#E31E24] bg-red-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={paymentMethod === method.id}
                            onChange={() => setPaymentMethod(method.id)}
                            className="w-5 h-5 text-[#E31E24] border-gray-300 focus:ring-[#E31E24]"
                          />
                          <span className="text-2xl">{method.icon}</span>
                          <div>
                            <div className="font-semibold text-gray-900">{method.name}</div>
                            <div className="text-sm text-gray-500">{method.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => setStep(1)}
                        className="flex-1 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="flex-1 py-4 bg-gradient-to-r from-[#E31E24] to-[#B91C1F] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                      >
                        Review Order
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Review */}
                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Order</h2>
                    
                    {/* Order Items */}
                    <div className="border rounded-xl overflow-hidden mb-6">
                      {cartItems.map((item) => (
                        <div key={item.product.id} className="flex items-center gap-4 p-4 border-b last:border-b-0">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{item.product.name}</h4>
                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                          </div>
                          <span className="font-bold text-gray-900">
                            ৳{(item.product.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Shipping Info Summary */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Shipping Address</h3>
                      <p className="text-gray-600">
                        John Doe<br />
                        123 Example Street, Dhaka<br />
                        +880 1234-567890
                      </p>
                    </div>

                    {/* Payment Method Summary */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Payment Method</h3>
                      <p className="text-gray-600 capitalize">{paymentMethod.replace('_', ' ')}</p>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep(2)}
                        className="flex-1 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                      >
                        Back
                      </button>
                      <button className="flex-1 py-4 bg-gradient-to-r from-[#E31E24] to-[#B91C1F] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Place Order
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:w-96">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                
                {/* Items */}
                <div className="space-y-4 mb-6 pb-6 border-b">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E31E24] text-white text-xs font-bold rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{item.product.name}</h4>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        ৳{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>৳{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-emerald-600 font-semibold' : ''}>
                      {shipping === 0 ? 'FREE' : `৳${shipping}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t">
                    <span>Total</span>
                    <span className="text-[#E31E24]">৳{total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Secure Badge */}
                <div className="mt-6 pt-6 border-t text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Your information is secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
