'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';

// Sample cart items
const initialCartItems = [
  { product: products[0], quantity: 2 },
  { product: products[1], quantity: 1 },
  { product: products[3], quantity: 1 },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      setCartItems(cartItems.filter(item => item.product.id !== productId));
    } else {
      setCartItems(cartItems.map(item =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (productId: string) => {
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 10000 ? 0 : 150;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0A0A0A] to-[#1A1A1A] pt-24">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-black text-white mb-2">Shopping Cart</h1>
          <div className="flex items-center gap-2 text-white/60">
            <Link href="/" className="hover:text-[#E31E24] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#E31E24]">Cart</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven&apos;t added any items to your cart yet.</p>
              <Link
                href="/category"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E31E24] to-[#B91C1F] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Start Shopping
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="flex-1">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Header */}
                  <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-gray-50 font-semibold text-gray-500 text-sm uppercase tracking-wider">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>
                  
                  {/* Items */}
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b items-center">
                      {/* Product */}
                      <div className="col-span-6 flex items-center gap-4">
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <Link href={`/product/${item.product.slug}`} className="font-bold text-gray-900 hover:text-[#E31E24] transition-colors">
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-gray-500 mt-1">{item.product.category}</p>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-sm text-[#E31E24] hover:underline mt-2 flex items-center gap-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="col-span-2 text-center">
                        <span className="md:hidden text-sm text-gray-500">Price: </span>
                        <span className="font-semibold text-gray-900">৳{item.product.price.toLocaleString()}</span>
                      </div>
                      
                      {/* Quantity */}
                      <div className="col-span-2 flex justify-center">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="px-4 py-2 font-semibold text-gray-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {/* Total */}
                      <div className="col-span-2 text-right">
                        <span className="md:hidden text-sm text-gray-500">Total: </span>
                        <span className="font-bold text-gray-900 text-lg">
                          ৳{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <Link
                  href="/category"
                  className="inline-flex items-center gap-2 mt-6 text-gray-600 hover:text-[#E31E24] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:w-96">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                  
                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                      />
                      <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Totals */}
                  <div className="space-y-4 border-t pt-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span className="font-semibold text-gray-900">৳{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="font-semibold text-gray-900">
                        {shipping === 0 ? (
                          <span className="text-emerald-600">FREE</span>
                        ) : (
                          `৳${shipping}`
                        )}
                      </span>
                    </div>
                    {subtotal < 10000 && (
                      <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                        Add ৳{(10000 - subtotal).toLocaleString()} more for <span className="font-semibold text-emerald-600">FREE shipping!</span>
                      </p>
                    )}
                    <div className="flex justify-between text-xl font-bold text-gray-900 pt-4 border-t">
                      <span>Total</span>
                      <span className="text-[#E31E24]">৳{total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Link
                    href="/checkout"
                    className="w-full mt-6 py-4 bg-gradient-to-r from-[#E31E24] to-[#B91C1F] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-red-500/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    Proceed to Checkout
                  </Link>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center gap-4 justify-center text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Secure Checkout</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>SSL Protected</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
