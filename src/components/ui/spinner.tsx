import React from 'react';

type SpinnerWithTextProps = {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
};

const SpinnerWithText: React.FC<SpinnerWithTextProps> = ({
                                                           size = 'medium',
                                                           color = 'text-blue-500',
                                                           text = 'Loading...',
                                                         }) => {
  const sizes = {
    small: 'h-4 w-4 border-2',
    medium: 'h-6 w-6 border-4',
    large: 'h-8 w-8 border-4',
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        className={`animate-spin rounded-full border-t-transparent ${sizes[size]} ${color}`}
        role="status"
        aria-label="Loading"
      />
      <span className="text-sm text-gray-500 animate-pulse">{text}</span>
    </div>
  );
};

export default SpinnerWithText;
