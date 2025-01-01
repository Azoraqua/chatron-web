'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/fade-in';

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
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
      <FadeIn delay={0.2} className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            disabled={isLoading}
            className="pl-10 form-input-hover"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="space-y-6">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[hsl(184,100%,28%)] via-[hsl(174,85%,28%)] to-[hsl(164,85%,23%)] hover:from-[hsl(184,100%,23%)] hover:via-[hsl(174,85%,23%)] hover:to-[hsl(164,85%,18%)] shadow-[0_0_1.5rem_rgba(0,183,255,0.15)]"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
          <div className="text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:text-primary/80 transition-all duration-200"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </FadeIn>
    </form>
  );
}
