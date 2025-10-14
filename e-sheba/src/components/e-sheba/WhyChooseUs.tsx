import { type ComponentRendering, type Field, Text, Image } from '@sitecore-content-sdk/nextjs';
import { Check } from 'lucide-react';

interface BenefitItem {
  id: string;
  fields: {
    text: Field<string>;
  };
}

interface WhyChooseUsFields {
  heading: Field<string>;
  image: Field<{ src: string; alt: string }>;
  benefits: BenefitItem[];
  ctaText: Field<string>;
  ctaLink: Field<string>;
}

interface WhyChooseUsProps {
  rendering: ComponentRendering;
  fields: WhyChooseUsFields;
}

export const WhyChooseUs = ({ fields }: WhyChooseUsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image field={fields.image} className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <Text field={fields.heading} />
            </h2>
            <ul className="space-y-4 mb-8">
              {fields.benefits?.map((benefit) => (
                <li key={benefit.id} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <Text field={benefit.fields.text} className="text-gray-700" />
                </li>
              ))}
            </ul>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              <Text field={fields.ctaText} /> →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
