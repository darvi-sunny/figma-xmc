import { type Field, Text, RichText } from '@sitecore-content-sdk/nextjs';
import { Activity, Heart, Pill, Brain } from 'lucide-react';

interface SpecialistCardProps {
  fields: {
    title: Field<string>;
    description: Field<string>;
    icon: Field<string>;
    highlighted: Field<boolean>;
  };
}

const iconMap: Record<string, any> = {
  activity: Activity,
  heart: Heart,
  pill: Pill,
  brain: Brain,
};

export const SpecialistCard = ({ fields }: SpecialistCardProps) => {
  const isHighlighted = fields.highlighted?.value;
  const IconComponent = iconMap[fields.icon?.value || 'activity'];

  return (
    <div
      className={`p-6 rounded-lg border-2 transition-all hover:shadow-lg ${
        isHighlighted
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-white text-gray-900 border-gray-200 hover:border-blue-600'
      }`}
    >
      <div className={`mb-4 ${isHighlighted ? 'text-white' : 'text-blue-600'}`}>
        {IconComponent && <IconComponent className="w-10 h-10" />}
      </div>
      <h3 className="text-xl font-bold mb-2">
        <Text field={fields.title} />
      </h3>
      <RichText
        field={fields.description}
        className={isHighlighted ? 'text-blue-100' : 'text-gray-600'}
      />
    </div>
  );
};
