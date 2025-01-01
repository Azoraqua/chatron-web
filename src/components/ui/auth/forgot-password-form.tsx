'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, ArrowLeft } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  }

  if (isSubmitted) {
    return (
      <FadeIn>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Check Your Email</h2>
          <p className="text-muted-foreground">
            If an account exists for the email you entered, you will receive a password reset link shortly.
          </p>
          <Link
            href="/"
            className="text-primary hover:text-primary/80 transition-all duration-200 inline-flex items-center gap-2 mt-4 hover:gap-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </Link>
        </div>
      </FadeIn>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Reset Your Password</h2>
        <p className="text-muted-foreground">
          Enter your email address and we&apos;ll send you instructions to reset your password.
        </p>
      </div>

      <FadeIn delay={0.1} className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            placeholder="Email Address"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            className="pl-10 form-input-hover"
          />
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="space-y-6">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[hsl(184,100%,28%)] via-[hsl(174,85%,28%)] to-[hsl(164,85%,23%)] hover:from-[hsl(184,100%,23%)] hover:via-[hsl(174,85%,23%)] hover:to-[hsl(164,85%,18%)] shadow-[0_0_1.5rem_rgba(0,183,255,0.15)]"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </Button>

          <Link
            href="/"
            className="text-primary hover:text-primary/80 transition-all duration-200 inline-flex items-center gap-2 text-sm hover:gap-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </Link>
        </div>
      </FadeIn>
    </form>
  );
}
