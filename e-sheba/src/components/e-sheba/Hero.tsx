import {
  type ComponentRendering,
  type Field,
  Text,
  RichText,
  Image,
} from '@sitecore-content-sdk/nextjs';
import { SearchForm } from '@/components/ui/SearchForm';
import { StatsBar } from '@/components/ui/StatsBar';

interface HeroFields {
  heading: Field<string>;
  subheading: Field<string>;
  description: Field<string>;
  heroImage: Field<{ src: string; alt: string }>;
}

interface HeroProps {
  rendering: ComponentRendering;
  fields: HeroFields;
}

export const Default = ({ fields }: HeroProps) => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              <Text field={fields.heading} />
            </h1>
            <RichText field={fields.description} className="text-gray-600 mb-8" />
            <SearchForm />
          </div>
          <div className="relative">
            <Image field={fields.heroImage} className="w-full h-auto" />
          </div>
        </div>
        <StatsBar />
      </div>
    </section>
  );
};
