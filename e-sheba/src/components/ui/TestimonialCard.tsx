import { type Field, Text, RichText, Image } from '@sitecore-content-sdk/nextjs';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  fields: {
    name: Field<string>;
    role: Field<string>;
    avatar: Field<{ src: string; alt: string }>;
    rating: Field<number>;
    content: Field<string>;
  };
}

export const TestimonialCard = ({ fields }: TestimonialCardProps) => {
  const rating = fields.rating?.value || 5;

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <Image field={fields.avatar} className="w-12 h-12 rounded-full" />
        <div>
          <h4 className="font-bold">
            <Text field={fields.name} />
          </h4>
          <p className="text-sm text-gray-600">
            <Text field={fields.role} />
          </p>
        </div>
        <div className="ml-auto flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      <RichText field={fields.content} className="text-gray-700" />
    </div>
  );
};
