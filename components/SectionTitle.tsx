
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[align]}`}>
      <h2 className="text-3xl my-5 md:text-4xl font-bold mb-4 text-inherit">{title}</h2>
      {subtitle && <p className="text-lg ">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
