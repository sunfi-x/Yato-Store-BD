import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import CategoryCard from '@/components/product/CategoryCard';
import { products, bestSellers, newArrivals } from '@/data/products';
import { categories } from '@/data/categories';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-drill.jpg"
            alt="YATO Power Tools"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fadeInDown">
              <span className="w-2 h-2 bg-[#E31E24] rounded-full animate-pulse"></span>
              <span className="text-white/80 text-sm font-medium">Professional Grade Hardware</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 animate-fadeInUp">
              Experience The
              <span className="block text-[#E31E24]">Sense of Power</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl text-white/70 mb-10 max-w-lg animate-fadeInUp delay-200">
              All hardware solutions in one platform. Industrial-grade tools trusted by professionals worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-300">
              <Link
                href="/category"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E31E24] to-[#B91C1F] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(227,30,36,0.5)] transition-all duration-300 transform hover:scale-105"
              >
                <span>Shop Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/knowledge"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:bg-white hover:text-black transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Tool Guides</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-16 pt-10 border-t border-white/10 animate-fadeInUp delay-400">
              <div>
                <div className="text-4xl font-black text-white">5000+</div>
                <div className="text-white/50 text-sm">Products</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white">30+</div>
                <div className="text-white/50 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white">50K+</div>
                <div className="text-white/50 text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ========================================
          FEATURED CATEGORIES
          ======================================== */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#E31E24]/10 text-[#E31E24] text-sm font-bold uppercase tracking-wider rounded-full mb-4">
              Browse Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Find the perfect tool for your project from our extensive collection
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 8).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          BEST SELLERS
          ======================================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-600 text-sm font-bold uppercase tracking-wider rounded-full mb-4">
                🔥 Trending Now
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Best Sellers
              </h2>
            </div>
            <Link
              href="/category?filter=bestseller"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[#E31E24] font-semibold hover:gap-4 transition-all"
            >
              <span>View All</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          PROMOTIONAL BANNER
          ======================================== */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="/images/tools-collection.png"
              alt="YATO Tools Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent flex items-center">
              <div className="px-12 md:px-20 max-w-xl">
                <span className="inline-block px-4 py-2 bg-[#E31E24] text-white text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                  One Battery System
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Lots of Possibilities
                </h3>
                <p className="text-white/70 mb-8">
                  The 18V system means power, freedom and savings! Equip your workshop with tools powered by the same battery.
                </p>
                <Link
                  href="/category/power-tools"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-[#E31E24] hover:text-white transition-colors"
                >
                  Explore 18V System
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          NEW ARRIVALS
          ======================================== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-600 text-sm font-bold uppercase tracking-wider rounded-full mb-4">
                ✨ Just Arrived
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/category?filter=new"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[#E31E24] font-semibold hover:gap-4 transition-all"
            >
              <span>View All</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          WHY CHOOSE YATO
          ======================================== */}
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#E31E24]/20 text-[#E31E24] text-sm font-bold uppercase tracking-wider rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              The YATO Advantage
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Trusted by professionals worldwide for over 30 years
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[#E31E24] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#B91C1F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-400">Built with the finest materials and rigorous quality control for lasting performance.</p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[#E31E24] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#B91C1F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Best Prices</h3>
              <p className="text-gray-400">Competitive pricing without compromising on quality. Value for every budget.</p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[#E31E24] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#B91C1F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-gray-400">Quick and reliable delivery across Bangladesh. Track your order in real-time.</p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[#E31E24] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#B91C1F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Support</h3>
              <p className="text-gray-400">24/7 customer support from our team of tool experts. We&apos;re here to help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CUSTOMER REVIEWS
          ======================================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#E31E24]/10 text-[#E31E24] text-sm font-bold uppercase tracking-wider rounded-full mb-4">
              Customer Love
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;Best quality tools I&apos;ve ever used. The cordless drill is incredibly powerful and the battery lasts all day. Highly recommend YATO for professionals!&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E31E24] rounded-full flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div>
                  <div className="font-bold text-gray-900">Mohammad Rahman</div>
                  <div className="text-sm text-gray-500">Construction Contractor</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;Fast delivery and excellent customer service. The tool set is complete and well-organized. Perfect for my auto repair workshop.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E31E24] rounded-full flex items-center justify-center text-white font-bold">
                  AH
                </div>
                <div>
                  <div className="font-bold text-gray-900">Abdul Hasan</div>
                  <div className="text-sm text-gray-500">Auto Mechanic</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;I&apos;ve been using YATO tools for years. The durability is unmatched. Great value for money and the warranty gives peace of mind.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E31E24] rounded-full flex items-center justify-center text-white font-bold">
                  SK
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sharif Khan</div>
                  <div className="text-sm text-gray-500">Electrician</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA SECTION
          ======================================== */}
      <section className="py-24 bg-gradient-to-r from-[#E31E24] to-[#B91C1F]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who trust YATO for their hardware needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/category"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#E31E24] font-bold text-lg rounded-xl shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <span>Browse Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-bold text-lg rounded-xl border-2 border-white hover:bg-white hover:text-[#E31E24] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
