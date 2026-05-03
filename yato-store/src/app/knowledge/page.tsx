import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const toolGuides = [
  {
    id: '1',
    title: 'How to Choose the Right Drill for Your Project',
    excerpt: 'Learn the differences between cordless drills, hammer drills, and impact drivers to pick the perfect tool.',
    category: 'Power Tools',
    image: '/images/hero-drill.jpg',
    readTime: '5 min read',
    date: 'Jan 10, 2026',
  },
  {
    id: '2',
    title: 'Essential Safety Tips for Power Tool Users',
    excerpt: 'Protect yourself with these crucial safety guidelines every professional should know.',
    category: 'Safety',
    image: '/images/tools-collection.png',
    readTime: '8 min read',
    date: 'Jan 8, 2026',
  },
  {
    id: '3',
    title: 'Understanding Torque: A Guide for Professionals',
    excerpt: 'Everything you need to know about torque settings and when to use them effectively.',
    category: 'Technical',
    image: '/images/hero-wrench.jpg',
    readTime: '6 min read',
    date: 'Jan 5, 2026',
  },
  {
    id: '4',
    title: 'Maintaining Your Power Tools for Longevity',
    excerpt: 'Simple maintenance tips to extend the life of your tools and ensure peak performance.',
    category: 'Maintenance',
    image: '/images/hero-cover.jpg',
    readTime: '4 min read',
    date: 'Jan 2, 2026',
  },
];

const videoTutorials = [
  { id: '1', title: 'Getting Started with YATO 18V System', duration: '12:30', thumbnail: '/images/hero-drill.jpg' },
  { id: '2', title: 'Professional Drilling Techniques', duration: '8:45', thumbnail: '/images/tools-collection.png' },
  { id: '3', title: 'Impact Wrench Best Practices', duration: '10:15', thumbnail: '/images/hero-wrench.jpg' },
];

const faqs = [
  {
    question: 'What&apos;s the difference between a drill and an impact driver?',
    answer: 'A drill is designed for drilling holes and driving screws with consistent torque. An impact driver delivers rotational impacts for faster driving in tough materials and provides more torque with less user fatigue.',
  },
  {
    question: 'How do I know which battery voltage I need?',
    answer: 'For light home use, 12V is sufficient. For medium projects, 18V is ideal. For professional heavy-duty work, consider 20V+ systems. Higher voltage generally means more power and runtime.',
  },
  {
    question: 'How often should I maintain my power tools?',
    answer: 'Clean tools after each use, check brushes and vents monthly, lubricate moving parts quarterly, and have professional servicing annually for heavy use tools.',
  },
  {
    question: 'Are YATO batteries interchangeable across tools?',
    answer: 'Yes! All YATO 18V tools work with the same battery platform. One battery system powers your entire collection of 18V tools for maximum convenience and savings.',
  },
];

export default function KnowledgeHubPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#0A0A0A] to-[#1A1A1A]">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/tools-collection.png" alt="Tools" fill className="object-cover" />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="inline-block px-4 py-2 bg-[#E31E24]/20 text-[#E31E24] text-sm font-bold uppercase tracking-wider rounded-full mb-6">
            📚 Learn & Grow
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Knowledge Hub
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Master your tools with expert guides, tutorials, and professional tips from YATO experts.
          </p>
        </div>
      </section>

      {/* Tool Guides */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-2 bg-[#E31E24]/10 text-[#E31E24] text-sm font-bold uppercase tracking-wider rounded-full mb-4">
                Featured Guides
              </span>
              <h2 className="text-4xl font-black text-gray-900">Tool Guides & Articles</h2>
            </div>
            <Link href="#" className="mt-4 md:mt-0 text-[#E31E24] font-semibold hover:underline">
              View All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolGuides.map((guide) => (
              <article key={guide.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#E31E24] text-white text-xs font-bold rounded-full">
                    {guide.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span>{guide.date}</span>
                    <span>•</span>
                    <span>{guide.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#E31E24] transition-colors line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{guide.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#E31E24]/20 text-[#E31E24] text-sm font-bold uppercase tracking-wider rounded-full mb-4">
              🎬 Video Learning
            </span>
            <h2 className="text-4xl font-black text-white mb-4">Video Tutorials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Watch step-by-step tutorials from our professional team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTutorials.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative h-56 rounded-2xl overflow-hidden mb-4">
                  <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                    <div className="w-16 h-16 bg-[#E31E24] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {video.duration}
                  </span>
                </div>
                <h3 className="text-white font-semibold group-hover:text-[#E31E24] transition-colors">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#E31E24]/10 text-[#E31E24] text-sm font-bold uppercase tracking-wider rounded-full mb-4">
              ❓ Got Questions?
            </span>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 flex items-center justify-between hover:text-[#E31E24] transition-colors">
                  {faq.question}
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#E31E24] to-[#B91C1F]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Still Have Questions?</h2>
          <p className="text-white/80 mb-8">Our expert team is here to help you find the perfect tool.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E31E24] font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Contact Our Experts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
