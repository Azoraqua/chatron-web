'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';

const START_YEAR = 2024 as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full backdrop-blur-xl bg-black/25 border-t border-white/10">
      <FadeIn className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-center text-sm text-white/40">
            © {(START_YEAR - currentYear) !== 0 ? `${START_YEAR}-${currentYear}` : START_YEAR} Chatron. All rights reserved.
          </p>

          <nav className="flex gap-3 items-center">
            <Link href="/terms" className="text-white/40 hover:text-white text-sm">Terms of Service</Link>
            <Link href="/privacy" className="text-white/40 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="/support" className="text-white/40 hover:text-white text-sm">Support</Link>
          </nav>
        </div>
      </FadeIn>
    </footer>
  );
}