import { type ComponentRendering, type Field, Text, RichText } from '@sitecore-content-sdk/nextjs';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

interface TestimonialItem {
  id: string;
  fields: {
    name: Field<string>;
    role: Field<string>;
    avatar: Field<{ src: string; alt: string }>;
    rating: Field<number>;
    content: Field<string>;
  };
}

interface TestimonialsFields {
  heading: Field<string>;
  subheading: Field<string>;
  description: Field<string>;
  reviewCount: Field<string>;
  testimonials: TestimonialItem[];
}

interface TestimonialsProps {
  rendering: ComponentRendering;
  fields: TestimonialsFields;
}

export const Default = ({ fields }: TestimonialsProps) => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              <Text field={fields.heading} />
            </h2>
            <RichText field={fields.description} className="text-gray-600 mb-8" />
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"
                  />
                ))}
              </div>
              <span className="font-semibold">
                <Text field={fields.reviewCount} />
              </span>
            </div>
          </div>
          <div>
            {fields.testimonials?.map((testimonial) => (
              <TestimonialCard key={testimonial.id} fields={testimonial.fields} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
