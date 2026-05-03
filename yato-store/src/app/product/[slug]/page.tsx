'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find the product
  const product = products.find(p => p.slug === slug) || products[0];
  const relatedProducts = products.filter(p => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'safety'>('description');

  const productImages = product.images || [product.image];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b pt-24">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#E31E24] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/category" className="hover:text-[#E31E24] transition-colors">Products</Link>
            <span>/</span>
            <Link href={`/category/${product.categorySlug}`} className="hover:text-[#E31E24] transition-colors">{product.category}</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              
              {/* Image Gallery */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-gray-100 to-gray-50">
                {/* Main Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-white shadow-lg">
                  <Image
                    src={productImages[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {product.discount && (
                    <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-[#E31E24] to-[#B91C1F] text-white font-bold rounded-full shadow-lg">
                      -{product.discount}% OFF
                    </div>
                  )}
                </div>
                
                {/* Thumbnails */}
                <div className="flex gap-3">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-[#E31E24] shadow-lg' : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 lg:p-12">
                {/* Category & Badges */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold text-[#E31E24] uppercase tracking-wider">
                    {product.category}
                  </span>
                  {product.isNew && (
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">NEW</span>
                  )}
                  {product.isBestSeller && (
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">BEST SELLER</span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300 fill-current'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{product.rating}</span>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-4xl font-black text-gray-900">
                    ৳{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      ৳{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.discount && (
                    <span className="px-3 py-1 bg-red-100 text-[#E31E24] font-bold rounded-full">
                      Save ৳{(product.originalPrice! - product.price).toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Stock Status */}
                <div className="flex items-center gap-3 mb-8">
                  {product.inStock ? (
                    <>
                      <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                      <span className="font-semibold text-emerald-600">In Stock - Ready to Ship</span>
                    </>
                  ) : (
                    <>
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span className="font-semibold text-red-600">Out of Stock</span>
                    </>
                  )}
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="px-6 py-3 font-semibold text-gray-900 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  
                  <button className="flex-1 py-4 bg-gradient-to-r from-[#E31E24] to-[#B91C1F] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-red-500/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Add to Cart
                  </button>
                  
                  <button className="px-4 py-4 border-2 border-gray-200 rounded-xl text-gray-600 hover:border-[#E31E24] hover:text-[#E31E24] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Buy Now */}
                <button className="w-full py-4 bg-gray-900 text-white font-bold text-lg rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 mb-8">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Buy Now
                </button>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <svg className="w-6 h-6 mx-auto text-[#E31E24] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-600">2 Year Warranty</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <svg className="w-6 h-6 mx-auto text-[#E31E24] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-600">Free Shipping</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <svg className="w-6 h-6 mx-auto text-[#E31E24] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-600">Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Knowledge Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('description')}
                className={`flex-1 py-5 text-lg font-semibold transition-colors ${
                  activeTab === 'description' ? 'text-[#E31E24] border-b-2 border-[#E31E24]' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                What&apos;s This Tool For?
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`flex-1 py-5 text-lg font-semibold transition-colors ${
                  activeTab === 'specs' ? 'text-[#E31E24] border-b-2 border-[#E31E24]' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('safety')}
                className={`flex-1 py-5 text-lg font-semibold transition-colors ${
                  activeTab === 'safety' ? 'text-[#E31E24] border-b-2 border-[#E31E24]' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Safety Tips
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8 lg:p-12">
              {activeTab === 'description' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">What is this tool used for?</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.usage}
                    </p>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Who should use this tool?</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Professional contractors and builders</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">DIY enthusiasts and hobbyists</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Industrial workshop applications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Home maintenance and repairs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                    <div className="space-y-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                          <div className="w-8 h-8 bg-[#E31E24] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                  <div className="bg-gray-50 rounded-2xl overflow-hidden">
                    <table className="w-full">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value], idx) => (
                          <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">{key}</td>
                            <td className="px-6 py-4 text-gray-600">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'safety' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety & Usage Tips</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.safetyTips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-6 bg-amber-50 border border-amber-200 rounded-xl">
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <span className="text-amber-900 font-medium">{tip}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Pro Tip
                    </h4>
                    <p className="text-blue-800">
                      Always read the full user manual before operating any power tool. If you need assistance, contact our support team for professional guidance.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
