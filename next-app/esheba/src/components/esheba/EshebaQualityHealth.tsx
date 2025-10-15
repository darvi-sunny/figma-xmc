import {
  type ComponentRendering,
  type Field,
  Text,
  RichText,
  Image,
} from '@sitecore-content-sdk/nextjs';

interface QualityHealthFields {
  heading: Field<string>;
  subheading: Field<string>;
  description: Field<string>;
  image: Field<{ src: string; alt: string }>;
  ctaText: Field<string>;
  ctaLink: Field<string>;
}

interface QualityHealthProps {
  rendering: ComponentRendering;
  fields: QualityHealthFields;
}

export const Default = ({ fields }: QualityHealthProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <Text field={fields.heading} />
            </h2>
            <RichText field={fields.description} className="text-gray-600 mb-8 space-y-4" />
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              <Text field={fields.ctaText} /> →
            </a>
          </div>
          <div>
            <Image field={fields.image} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
