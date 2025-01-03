import { Logo } from '@/components/ui/global/logo';
import { AnimatedTabs } from '@/components/ui/animated-tabs';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { Footer } from '@/components/ui/global/footer';
import { SignInForm } from '@/components/ui/auth/sign-in-form';
import { SignUpForm } from '@/components/ui/auth/sign-up-form';
import Background from '@/components/ui/global/Background';

const Page: FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#070b15] overflow-hidden">
      <Background />

      <Card className="relative w-full max-w-md mx-4 mb-24 bg-black/25 backdrop-blur-xl border-white/10 shadow-[0_0_3rem_rgba(0,183,255,0.12)]">
        <CardHeader className="flex flex-col items-center gap-3 my-3">
          <div>
            <Logo />
          </div>

          <div className="inline-flex flex-col items-center gap-2">
            <h2 className="text-3xl font-bold">Welcome!</h2>
            <h3 className="text-md">Please sign in or sign up to continue.</h3>
          </div>
        </CardHeader>

        <CardContent>
          <AnimatedTabs
            className="w-full"
            tabs={[
              { value: 'signin', label: 'Sign In' },
              { value: 'signup', label: 'Sign Up' }
            ]}
          >
            <TabsContent value="signin">
              <SignInForm />
            </TabsContent>

            <TabsContent value="signup">
              <SignUpForm />
            </TabsContent>
          </AnimatedTabs>
        </CardContent>
      </Card>

      <Footer />
    </div>
  );
};

export default Page;