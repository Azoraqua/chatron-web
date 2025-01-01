'use client';

import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';
import { PasswordStrength } from './password-strength';
import { PasswordMatch } from './password-match';

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const toggleConfirmPassword = useCallback(() => {
    setShowConfirmPassword((prev) => !prev);
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleConfirmPasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  }, []);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <FadeIn delay={0.1} className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="username"
            placeholder="Username"
            type="text"
            autoCapitalize="none"
            autoCorrect="off"
            disabled={isLoading}
            className="pl-10 form-input-hover"
          />
        </div>
      </FadeIn>
      <FadeIn delay={0.2} className="space-y-2">
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
      <FadeIn delay={0.3} className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            disabled={isLoading}
            value={password}
            onChange={handlePasswordChange}
            className="pl-10 form-input-hover"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        <PasswordStrength password={password} />
      </FadeIn>
      <FadeIn delay={0.4} className="space-y-2">
        <Label htmlFor="confirm">Password (confirm)</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="confirm"
            placeholder="Password (confirm)"
            type={showConfirmPassword ? 'text' : 'password'}
            disabled={isLoading}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="pl-10 form-input-hover"
          />
          <PasswordMatch password={password} confirmPassword={confirmPassword} />
          <button
            type="button"
            onClick={toggleConfirmPassword}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </FadeIn>
      <FadeIn delay={0.5}>
        <p className="text-sm text-muted-foreground/90 text-center mb-8">
          By creating an account, you agree to our{' '}
          <Link href="/terms" className="text-primary hover:text-primary/80 transition-all duration-200">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-primary hover:text-primary/80 transition-all duration-200">
            Privacy Policy
          </Link>
        </p>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[hsl(184,100%,28%)] via-[hsl(174,85%,28%)] to-[hsl(164,85%,23%)] hover:from-[hsl(184,100%,23%)] hover:via-[hsl(174,85%,23%)] hover:to-[hsl(164,85%,18%)] shadow-[0_0_1.5rem_rgba(0,183,255,0.15)]"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create Account"}
        </Button>
      </FadeIn>
    </form>
  );
}
