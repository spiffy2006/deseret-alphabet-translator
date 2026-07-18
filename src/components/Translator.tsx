'use client';

import { useState, useCallback, useRef } from 'react';
import { englishToDeseret, deseretToEnglish } from '@/lib/deseret';
import DeseretKeyboard from '@/components/DeseretKeyboard';

type Direction = 'en-to-ds' | 'ds-to-en';

function ClipboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
    </svg>
  );
}

function SwapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  );
}

export default function Translator() {
  const [direction, setDirection] = useState<Direction>('en-to-ds');
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const output =
    direction === 'en-to-ds'
      ? englishToDeseret(input)
      : deseretToEnglish(input);

  const handleSwap = useCallback(() => {
    setDirection((d) => (d === 'en-to-ds' ? 'ds-to-en' : 'en-to-ds'));
    setInput(output);
  }, [output]);

  const handleCopy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  /** Insert a Deseret character at the cursor position in the textarea. */
  const handleKeyPress = useCallback((char: string) => {
    const ta = textareaRef.current;
    if (!ta) return;

    const start = ta.selectionStart ?? input.length;
    const end = ta.selectionEnd ?? input.length;
    const next = input.slice(0, start) + char + input.slice(end);
    setInput(next);

    // Restore cursor position after React re-renders the textarea.
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(start + char.length, start + char.length);
    });
  }, [input]);

  const isDeseretMode = direction === 'ds-to-en';
  const inputLabel = isDeseretMode ? 'Deseret Alphabet' : 'English';
  const outputLabel = isDeseretMode ? 'Phonetic English' : 'Deseret Alphabet';

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-10 space-y-6">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Deseret Alphabet Translator
        </h1>
        <p className="text-zinc-500 text-sm">
          Translate between English and the 19th-century phonemic Deseret alphabet.
        </p>
      </div>

      {/* Direction toggle */}
      <div className="flex items-center justify-center gap-3">
        <span
          className={`text-sm font-medium ${direction === 'en-to-ds' ? 'text-zinc-900' : 'text-zinc-400'}`}
        >
          English → Deseret
        </span>
        <button
          type="button"
          onClick={handleSwap}
          aria-label="Swap translation direction"
          className="
            p-2 rounded-full border border-zinc-200 bg-white
            hover:bg-amber-50 hover:border-amber-400
            active:bg-amber-100
            transition-colors shadow-sm
          "
        >
          <SwapIcon />
        </button>
        <span
          className={`text-sm font-medium ${direction === 'ds-to-en' ? 'text-zinc-900' : 'text-zinc-400'}`}
        >
          Deseret → English
        </span>
      </div>

      {/* Input panel */}
      <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-100 bg-zinc-50">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
            {inputLabel}
          </span>
          <button
            type="button"
            onClick={() => setInput('')}
            className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            Clear
          </button>
        </div>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            isDeseretMode
              ? 'Type or paste Deseret text here…'
              : 'Type English text here…'
          }
          rows={6}
          className="
            w-full px-4 py-3 resize-none outline-none
            text-zinc-900 placeholder-zinc-300
            text-lg leading-relaxed
            bg-white
          "
        />

        {/* Virtual keyboard (only shown in Deseret-input mode) */}
        {isDeseretMode && (
          <div className="px-4 pb-4 border-t border-zinc-100">
            <DeseretKeyboard onKeyPress={handleKeyPress} />
          </div>
        )}
      </div>

      {/* Output panel */}
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-100">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
            {outputLabel}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            disabled={!output}
            aria-label="Copy translation to clipboard"
            className="
              flex items-center gap-1.5 text-xs font-medium
              text-zinc-400 hover:text-zinc-700
              disabled:opacity-40 disabled:cursor-not-allowed
              transition-colors
            "
          >
            <ClipboardIcon />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="px-4 py-3 min-h-[9rem] text-lg leading-relaxed text-zinc-800 break-words whitespace-pre-wrap">
          {output || (
            <span className="text-zinc-300 select-none">Translation will appear here…</span>
          )}
        </div>
      </div>

      {/* Legend */}
      <details className="group rounded-xl border border-zinc-200 bg-white shadow-sm">
        <summary className="
          flex items-center justify-between px-4 py-3 cursor-pointer
          text-sm font-medium text-zinc-600
          hover:bg-zinc-50 transition-colors
          list-none
        ">
          <span>Deseret Alphabet Reference</span>
          <span className="text-zinc-400 group-open:rotate-180 transition-transform">▾</span>
        </summary>
        <div className="px-4 pb-4 border-t border-zinc-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
            {[
              { char: '𐑀', name: 'Long I',   phonetic: '/iː/', example: 'bee'     },
              { char: '𐑁', name: 'Long E',   phonetic: '/eɪ/', example: 'day'     },
              { char: '𐑂', name: 'Long A',   phonetic: '/ɑː/', example: 'father'  },
              { char: '𐑃', name: 'Long Ah',  phonetic: '/ɔː/', example: 'all'     },
              { char: '𐑄', name: 'Long O',   phonetic: '/oʊ/', example: 'go'      },
              { char: '𐑅', name: 'Long Oo',  phonetic: '/uː/', example: 'moon'    },
              { char: '𐑆', name: 'Short I',  phonetic: '/ɪ/',  example: 'bit'     },
              { char: '𐑇', name: 'Short E',  phonetic: '/ɛ/',  example: 'pet'     },
              { char: '𐑈', name: 'Short A',  phonetic: '/æ/',  example: 'cat'     },
              { char: '𐑉', name: 'Short Ah', phonetic: '/ɒ/',  example: 'hot'     },
              { char: '𐑊', name: 'Short O',  phonetic: '/ʌ/',  example: 'but'     },
              { char: '𐑋', name: 'Short Oo', phonetic: '/ʊ/',  example: 'look'    },
              { char: '𐑌', name: 'Ay',       phonetic: '/aɪ/', example: 'mine'    },
              { char: '𐑍', name: 'Ow',       phonetic: '/aʊ/', example: 'cow'     },
              { char: '𐑎', name: 'Wu',       phonetic: '/w/',  example: 'wet'     },
              { char: '𐑏', name: 'Yee',      phonetic: '/j/',  example: 'yes'     },
              { char: '𐑐', name: 'H',        phonetic: '/h/',  example: 'hi'      },
              { char: '𐑑', name: 'Pee',      phonetic: '/p/',  example: 'pit'     },
              { char: '𐑒', name: 'Bee',      phonetic: '/b/',  example: 'bit'     },
              { char: '𐑓', name: 'Tee',      phonetic: '/t/',  example: 'tin'     },
              { char: '𐑔', name: 'Dee',      phonetic: '/d/',  example: 'din'     },
              { char: '𐑕', name: 'Chee',     phonetic: '/tʃ/', example: 'chin'    },
              { char: '𐑖', name: 'Jee',      phonetic: '/dʒ/', example: 'gin'     },
              { char: '𐑗', name: 'Kay',      phonetic: '/k/',  example: 'kit'     },
              { char: '𐑘', name: 'Gay',      phonetic: '/ɡ/',  example: 'give'    },
              { char: '𐑙', name: 'Ef',       phonetic: '/f/',  example: 'fun'     },
              { char: '𐑚', name: 'Vee',      phonetic: '/v/',  example: 'vat'     },
              { char: '𐑛', name: 'Eth',      phonetic: '/θ/',  example: 'think'   },
              { char: '𐑜', name: 'Thee',     phonetic: '/ð/',  example: 'the'     },
              { char: '𐑝', name: 'Es',       phonetic: '/s/',  example: 'sin'     },
              { char: '𐑞', name: 'Zee',      phonetic: '/z/',  example: 'zeal'    },
              { char: '𐑟', name: 'Esh',      phonetic: '/ʃ/',  example: 'shore'   },
              { char: '𐑠', name: 'Zhee',     phonetic: '/ʒ/',  example: 'measure' },
              { char: '𐑡', name: 'Er',       phonetic: '/ɜr/', example: 'urban'   },
              { char: '𐑢', name: 'El',       phonetic: '/l/',  example: 'led'     },
              { char: '𐑣', name: 'Em',       phonetic: '/m/',  example: 'met'     },
              { char: '𐑤', name: 'En',       phonetic: '/n/',  example: 'net'     },
              { char: '𐑥', name: 'Eng',      phonetic: '/ŋ/',  example: 'sung'    },
              { char: '𐑦', name: 'Oi',       phonetic: '/ɔɪ/', example: 'foil'    },
              { char: '𐑧', name: 'Ew',       phonetic: '/juː/', example: 'cute'    },
            ].map(({ char, name, phonetic, example }) => (
              <div key={char} className="flex items-center gap-2 text-sm py-1">
                <span className="text-xl w-7 text-center shrink-0">{char}</span>
                <span className="text-zinc-600">
                  <span className="font-medium">{name}</span>{' '}
                  <span className="text-zinc-400">{phonetic}</span>{' '}
                  <span className="italic text-zinc-400">{example}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </details>

      <p className="text-center text-xs text-zinc-400">
        English→Deseret uses phonetic heuristics and may not perfectly reflect irregular spellings.
      </p>
    </div>
  );
}
