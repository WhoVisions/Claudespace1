import type { ReactNode } from 'react';

interface ContentSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  id: string;
}

export const ContentSection = ({ title, icon, children, id }: ContentSectionProps) => {
  return (
    <section className="mb-10 scroll-mt-20" id={id}>
      <div className="flex items-center space-x-3 mb-5 px-4 sm:px-0">
        {icon}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 font-mono tracking-tighter">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-0">
        {children}
      </div>
    </section>
  );
};
