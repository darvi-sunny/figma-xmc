import { type ComponentRendering, type Field, Text } from '@sitecore-content-sdk/nextjs';
import { NewsletterForm } from '@/components/ui/NewsletterForm';

interface NewsletterFields {
  heading: Field<string>;
  placeholder: Field<string>;
}

interface NewsletterProps {
  rendering: ComponentRendering;
  fields: NewsletterFields;
}

export const Newsletter = ({ fields }: NewsletterProps) => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            <Text field={fields.heading} />
          </h2>
          <NewsletterForm placeholder={fields.placeholder} />
        </div>
      </div>
    </section>
  );
};
