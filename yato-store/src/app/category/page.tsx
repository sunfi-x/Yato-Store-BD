import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { categories } from '@/data/categories';

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-[#0A0A0A] to-[#1A1A1A]">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero-cover.jpg"
            alt="All Products"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            All Products
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/60">
            <Link href="/" className="hover:text-[#E31E24] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#E31E24]">Products</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-6 pb-4 border-b">Filters</h3>
              
              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-900">Categories</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#E31E24] focus:ring-[#E31E24]" defaultChecked />
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">All Products</span>
                    <span className="ml-auto text-sm text-gray-400">{products.length}</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#E31E24] focus:ring-[#E31E24]" />
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{cat.name}</span>
                      <span className="ml-auto text-sm text-gray-400">{cat.productCount}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-900">Price Range</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" className="w-4 h-4 border-gray-300 text-[#E31E24] focus:ring-[#E31E24]" defaultChecked />
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">All Prices</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" className="w-4 h-4 border-gray-300 text-[#E31E24] focus:ring-[#E31E24]" />
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Under ৳5,000</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" className="w-4 h-4 border-gray-300 text-[#E31E24] focus:ring-[#E31E24]" />
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">৳5,000 - ৳15,000</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" className="w-4 h-4 border-gray-300 text-[#E31E24] focus:ring-[#E31E24]" />
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">৳15,000 - ৳30,000</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" className="w-4 h-4 border-gray-300 text-[#E31E24] focus:ring-[#E31E24]" />
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Over ৳30,000</span>
                  </label>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-900">Availability</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#E31E24] focus:ring-[#E31E24]" defaultChecked />
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">In Stock</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#E31E24] focus:ring-[#E31E24]" />
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">On Sale</span>
                  </label>
                </div>
              </div>

              {/* Clear Filters */}
              <button className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl shadow-lg p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{products.length}</span> products
              </p>
              <div className="flex items-center gap-4">
                {/* Sort */}
                <select className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E31E24]">
                  <option>Sort by: Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Best Rating</option>
                </select>
                {/* View Toggle */}
                <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                  <button className="p-2 bg-[#E31E24] text-white rounded-md" aria-label="Grid view">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-900 rounded-md" aria-label="List view">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="w-10 h-10 rounded-lg border border-gray-300 text-gray-500 hover:border-[#E31E24] hover:text-[#E31E24] transition-colors">
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-lg bg-[#E31E24] text-white font-semibold">1</button>
              <button className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:border-[#E31E24] hover:text-[#E31E24] transition-colors font-semibold">2</button>
              <button className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:border-[#E31E24] hover:text-[#E31E24] transition-colors font-semibold">3</button>
              <span className="px-2 text-gray-400">...</span>
              <button className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:border-[#E31E24] hover:text-[#E31E24] transition-colors font-semibold">8</button>
              <button className="w-10 h-10 rounded-lg border border-gray-300 text-gray-500 hover:border-[#E31E24] hover:text-[#E31E24] transition-colors">
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
