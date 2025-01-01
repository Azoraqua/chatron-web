import { CircuitBoard } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <CircuitBoard className="w-8 h-8 text-primary" />
      <span className="text-2xl font-bold text-primary">
        Chatron
      </span>
    </div>
  );
}