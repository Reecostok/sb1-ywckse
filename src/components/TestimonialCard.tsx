import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export function TestimonialCard({ name, role, content, image, rating }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}