import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chatron'
};

const RootLayout: FCC = async ({ children }) => {
  return (
    <html lang="en">
    <body className={`antialiased`}>
    {children}

    <Analytics />
    <SpeedInsights />
    </body>
    </html>
  );
};

export default RootLayout;