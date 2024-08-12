// baseButton.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

const buttonSizes = {
  default: "h-12 px-4 text-sm",
  sm: "h-12 px-3 text-sm",
  lg: "h-12 px-8 text-base",
  xl: "h-12 px-10 text-lg",
  icon: "h-12 w-12",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'orange' | 'purple' | 'black' | 'green' | 'clear';
  size?: keyof typeof buttonSizes;
}

const BaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    // Define color styles based on variant
    const colorStyles: Record<string, React.CSSProperties> = {
      default: { backgroundColor: '#4E9FFF', color: 'white' }, // Blue
      orange: { backgroundColor: '#E46B51', color: 'white' },  // Orange
      purple: { backgroundColor: '#CA5BDC', color: 'white' },  // Purple
      black: { backgroundColor: '#000000', color: 'white' },   // Black
      green: { backgroundColor: '#5BB264', color: 'white' },   // Green
      clear: { backgroundColor: '#e0b3ff', color: 'white' },   // Light Purple for Clear Button
    };

    const appliedStyle = colorStyles[variant];

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide",
          buttonSizes[size],
          className
        )}
        style={{
          ...appliedStyle, // Apply the color based on the variant
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          padding: '0.5rem 1rem',
        }}
        {...props}
      />
    );
  }
);

BaseButton.displayName = "BaseButton";

export { BaseButton };
