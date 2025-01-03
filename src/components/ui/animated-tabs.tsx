'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

interface Tab {
  value: string;
  label: string;
}

interface AnimatedTabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  tabs: Tab[];
}

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn('inline-flex h-11 items-center justify-center rounded-lg bg-black/50 p-1', className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, rerender] = React.useReducer((x) => Math.random() * 1000, 0);

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      onClickCapture={() => rerender()}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-5 py-2',
        'text-sm font-medium ring-offset-background transition-all focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary/10',
        'relative text-white/60 hover:text-white data-[state=active]:text-white',
        className
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-6 ring-offset-background focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  >
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{
        duration: 0.2,
        ease: 'easeOut'
      }}
    >
      {props.children}
    </motion.div>
  </TabsPrimitive.Content>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export function AnimatedTabs({ className, tabs, ...props }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = React.useState(tabs[0].value);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, rerender] = React.useReducer((x) => x + 1, 0);

  useEffect(() => {
    rerender();
  }, [activeTab, tabs]);

  return (
    <Tabs className={cn('w-full', className)} {...props} defaultValue={activeTab}>
      <TabsList className="grid w-full grid-cols-2 mb-6">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}
                       onClick={() => setActiveTab(tab.value)}
                       className={cn(tab.value === activeTab && 'bg-gradient-to-r from-[hsl(184,100%,18%)] via-[hsl(174,85%,18%)] to-[hsl(164,85%,13%)] hover:from-[hsl(184,100%,23%)] hover:via-[hsl(174,85%,23%)] hover:to-[hsl(164,85%,18%)] shadow-[0_0_1.5rem_rgba(0,183,255,0.15)]')}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {props.children}
    </Tabs>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };