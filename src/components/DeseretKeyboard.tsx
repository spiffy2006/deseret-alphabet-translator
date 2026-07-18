'use client';

import { DESERET_LETTERS } from '@/lib/deseret';

interface DeseretKeyboardProps {
  onKeyPress: (char: string) => void;
}

export default function DeseretKeyboard({ onKeyPress }: DeseretKeyboardProps) {
  return (
    <div className="mt-4">
      <p className="text-xs text-zinc-500 mb-2 font-medium uppercase tracking-wide">
        Deseret Keyboard
      </p>
      <div className="flex flex-wrap gap-1.5">
        {DESERET_LETTERS.map(({ char, phonetic, example, name }) => (
          <button
            key={char}
            type="button"
            title={`${name} — /${phonetic}/ as in "${example}"`}
            onClick={() => onKeyPress(char)}
            className="
              flex flex-col items-center justify-center
              w-12 h-12
              rounded-lg border border-zinc-200 bg-white
              hover:bg-amber-50 hover:border-amber-400
              active:bg-amber-100
              transition-colors cursor-pointer
              shadow-sm
            "
          >
            <span className="text-lg leading-none">{char}</span>
            <span className="text-[9px] text-zinc-400 leading-none mt-0.5">{phonetic}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
