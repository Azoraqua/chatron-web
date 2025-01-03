import { CircuitBoard } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center justify-center space-x-2 p-2 w-full rounded-lg bg-clip-text bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-300">
      <CircuitBoard className="w-8 h-8 text-cyan-400" />
      <span className="text-xl font-bold text-transparent">
        Chatron
      </span>
    </div>
  );
}