import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlightWord?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  highlightWord,
  className = ""
}) => {
  const renderTitle = () => {
    if (!highlightWord) return title;

    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`text-center mb-16 animate-fade-in ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
