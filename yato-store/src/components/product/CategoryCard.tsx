import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`} className="group block">
      <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Background Image */}
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
            {/* Icon */}
            <span className="text-4xl mb-3 block">{category.icon}</span>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-2">
              {category.name}
            </h3>
            
            {/* Product Count */}
            <p className="text-white/70 text-sm mb-4">
              {category.productCount} Products
            </p>
            
            {/* Arrow */}
            <div className="flex items-center gap-2 text-[#E31E24] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Explore</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-4 border-[#E31E24] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
}
