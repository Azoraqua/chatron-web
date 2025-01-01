'use client';

import { memo, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface PasswordStrengthProps {
  password: string;
}

export const PasswordStrength = memo(function PasswordStrength({ password }: PasswordStrengthProps) {
  const getStrength = useMemo(() => {
    let score = 0;
    if (!password) return score;

    // Length check
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;

    // Character variety checks
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score / 5; // Return as percentage
  }, [password]);

  const strength = getStrength;
  const width = `${strength * 100}%`;

  if (!password) return null;

  return (
    <div
      className="h-0.5 mt-1.5 bg-muted rounded-full overflow-hidden opacity-0 animate-[fade-in_0.2s_ease-in-out_forwards]"
      style={{ animationDelay: '150ms' }}
    >
      <div
        className={cn('h-full transition-all duration-300 rounded-full', {
          'bg-red-500': strength <= 0.3,
          'bg-orange-500': strength > 0.3 && strength <= 0.5,
          'bg-yellow-500': strength > 0.5 && strength <= 0.7,
          'bg-green-500': strength > 0.7 && strength <= 0.9,
          'bg-emerald-500': strength > 0.9
        })}
        style={{ width }}
      />
    </div>
  );
});
