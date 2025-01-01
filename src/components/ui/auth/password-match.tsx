'use client';

import { Check, X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { memo } from 'react';

interface PasswordMatchProps {
  password: string;
  confirmPassword: string;
}

export const PasswordMatch = memo(function PasswordMatch({ password, confirmPassword }: PasswordMatchProps) {
  if (!confirmPassword) return null;

  const matches = password === confirmPassword;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="absolute right-10 top-3 opacity-0 animate-[fade-in_0.2s_ease-in-out_forwards]"
            style={{ animationDelay: '150ms' }}
          >
            {matches ? <Check className="h-4 w-4 text-emerald-500" /> : <X className="h-4 w-4 text-red-500" />}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{matches ? 'Passwords match' : "Passwords don't match"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});
