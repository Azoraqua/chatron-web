import Auth from '@/components/auth';
import { CircuitBoard } from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Logo } from '@/components/ui/global/logo';
import { AnimatedTabs } from '@/components/ui/animated-tabs';
import { SignInForm } from '@/components/ui/auth/sign-in-form';
import { SignUpForm } from '@/components/ui/auth/sign-up-form';
import { Footer } from '@/components/ui/global/footer';
import Background from '@/components/ui/global/Background';

const Page: FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#070b15] overflow-hidden">
      <Background />

      <Card
        className="relative w-full max-w-md mx-4 mb-28 bg-black/25 backdrop-blur-xl border-white/10 shadow-[0_0_3rem_rgba(0,183,255,0.12)]">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center mb-2">
            <div>
              <Logo />
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-4 pb-8">

        </CardContent>
      </Card>

      <Footer />
    </div>
  );
};

export default Page;