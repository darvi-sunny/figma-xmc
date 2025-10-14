import { type ComponentRendering, type Field, Text, Link } from '@sitecore-content-sdk/nextjs';

interface NavItem {
  id: string;
  fields: {
    title: Field<string>;
    link: Field<{ href: string }>;
  };
}

interface HeaderFields {
  logo: Field<string>;
  navigationItems: NavItem[];
  loginText: Field<string>;
  signupText: Field<string>;
}

interface HeaderProps {
  rendering: ComponentRendering;
  fields: HeaderFields;
}

export const Header = ({ fields }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-blue-600">
            <Text field={fields.logo} />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {fields.navigationItems?.map((item) => (
              <Link
                key={item.id}
                field={item.fields.link}
                className="text-gray-700 hover:text-blue-600"
              >
                <Text field={item.fields.title} />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50">
              <Text field={fields.loginText} />
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <Text field={fields.signupText} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
