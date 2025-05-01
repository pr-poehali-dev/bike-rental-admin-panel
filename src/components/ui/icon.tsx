
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

type IconProps = {
  name: keyof typeof LucideIcons;
  fallback?: keyof typeof LucideIcons;
  color?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const Icon: React.FC<IconProps> = ({
  name,
  fallback = 'CircleAlert',
  color,
  size = 24,
  strokeWidth,
  className,
  ...props
}) => {
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];

  return (
    <IconComponent
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      className={cn('', className)}
      {...props}
    />
  );
};

export default Icon;
