import {
  type ComponentRendering,
  type Field,
  Text,
  RichText,
  Image,
} from '@sitecore-content-sdk/nextjs';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface LinkItem {
  id: string;
  fields: {
    title: Field<string>;
    url: Field<string>;
  };
}

interface FooterFields {
  logo: Field<string>;
  description: Field<string>;
  linksHeading: Field<string>;
  links: LinkItem[];
  addressHeading: Field<string>;
  addressMap: Field<{ src: string; alt: string }>;
  copyright: Field<string>;
}

interface FooterProps {
  rendering: ComponentRendering;
  fields: FooterFields;
}

export const Footer = ({ fields }: FooterProps) => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <Text field={fields.logo} />
            </h3>
            <RichText field={fields.description} className="text-blue-100 mb-4" />
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-200" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-200" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-200" />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">
              <Text field={fields.linksHeading} />
            </h4>
            <ul className="space-y-2">
              {fields.links?.map((link) => (
                <li key={link.id}>
                  <a href="#" className="text-blue-100 hover:text-white">
                    <Text field={link.fields.title} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">
              <Text field={fields.addressHeading} />
            </h4>
            <Image field={fields.addressMap} className="w-full h-32 rounded-lg" />
          </div>
        </div>
        <div className="border-t border-blue-500 pt-6 text-center text-blue-100">
          <Text field={fields.copyright} />
        </div>
      </div>
    </footer>
  );
};
