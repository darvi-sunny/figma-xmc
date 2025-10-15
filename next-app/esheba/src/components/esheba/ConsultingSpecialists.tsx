import { type ComponentRendering, type Field, Text } from '@sitecore-content-sdk/nextjs';
import { SpecialistCard } from '@/components/ui/SpecialistCard';

interface SpecialistItem {
  id: string;
  fields: {
    title: Field<string>;
    description: Field<string>;
    icon: Field<string>;
    highlighted: Field<boolean>;
  };
}

interface ConsultingSpecialistsFields {
  heading: Field<string>;
  specialists: SpecialistItem[];
}

interface ConsultingSpecialistsProps {
  rendering: ComponentRendering;
  fields: ConsultingSpecialistsFields;
}

export const Default = ({ fields }: ConsultingSpecialistsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          <Text field={fields.heading} />
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fields.specialists?.map((specialist) => (
            <SpecialistCard key={specialist.id} fields={specialist.fields} />
          ))}
        </div>
      </div>
    </section>
  );
};
