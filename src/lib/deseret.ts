/**
 * Deseret Alphabet Translator
 *
 * The Deseret alphabet is a phonemic alphabet for English created in the 19th century.
 * Unicode range: U+10400–U+1044F
 *
 * Phoneme reference:
 *  𐑀 Long I   = /iː/  (bee, see)
 *  𐑁 Long E   = /eɪ/  (day, cake)
 *  𐑂 Long A   = /ɑː/  (father, spa)
 *  𐑃 Long Ah  = /ɔː/  (all, thought)
 *  𐑄 Long O   = /oʊ/  (go, bone)
 *  𐑅 Long Oo  = /uː/  (moon, blue)
 *  𐑆 Short I  = /ɪ/   (bit, sit)
 *  𐑇 Short E  = /ɛ/   (pet, bed)
 *  𐑈 Short A  = /æ/   (cat, hat)
 *  𐑉 Short Ah = /ɒ/   (hot, cod)
 *  𐑊 Short O  = /ʌ/   (but, sun)
 *  𐑋 Short Oo = /ʊ/   (book, look)
 *  𐑌 Ay       = /aɪ/  (mine, sky)
 *  𐑍 Ow       = /aʊ/  (cow, out)
 *  𐑎 Wu       = /w/   (wet)
 *  𐑏 Yee      = /j/   (yes)
 *  𐑐 H        = /h/   (hi)
 *  𐑑 Pee      = /p/   (pit)
 *  𐑒 Bee      = /b/   (bit)
 *  𐑓 Tee      = /t/   (tin)
 *  𐑔 Dee      = /d/   (din)
 *  𐑕 Chee     = /tʃ/  (chin)
 *  𐑖 Jee      = /dʒ/  (gin)
 *  𐑗 Kay      = /k/   (kit)
 *  𐑘 Gay      = /ɡ/   (give)
 *  𐑙 Ef       = /f/   (fun)
 *  𐑚 Vee      = /v/   (vat)
 *  𐑛 Eth      = /θ/   (think)
 *  𐑜 Thee     = /ð/   (the)
 *  𐑝 Es       = /s/   (sin)
 *  𐑞 Zee      = /z/   (zeal)
 *  𐑟 Esh      = /ʃ/   (shore)
 *  𐑠 Zhee     = /ʒ/   (measure)
 *  𐑡 Er       = /ɜːr/ (urban, butter)
 *  𐑢 El       = /l/   (led)
 *  𐑣 Em       = /m/   (met)
 *  𐑤 En       = /n/   (net)
 *  𐑥 Eng      = /ŋ/   (sung)
 *  𐑦 Oi       = /ɔɪ/  (foil)
 *  𐑧 Ew       = /juː/ (cute)
 */

// ── Deseret character constants (lowercase forms) ───────────────────────────

const D = {
  LONG_I:   '\u{10428}', // 𐑀 /iː/  bee
  LONG_E:   '\u{10429}', // 𐑁 /eɪ/  day
  LONG_A:   '\u{1042A}', // 𐑂 /ɑː/  father
  LONG_AH:  '\u{1042B}', // 𐑃 /ɔː/  all
  LONG_O:   '\u{1042C}', // 𐑄 /oʊ/  go
  LONG_OO:  '\u{1042D}', // 𐑅 /uː/  moon
  SHORT_I:  '\u{1042E}', // 𐑆 /ɪ/   bit
  SHORT_E:  '\u{1042F}', // 𐑇 /ɛ/   pet
  SHORT_A:  '\u{10430}', // 𐑈 /æ/   cat
  SHORT_AH: '\u{10431}', // 𐑉 /ɒ/   hot
  SHORT_O:  '\u{10432}', // 𐑊 /ʌ/   but
  SHORT_OO: '\u{10433}', // 𐑋 /ʊ/   look
  AY:       '\u{10434}', // 𐑌 /aɪ/  mine
  OW:       '\u{10435}', // 𐑍 /aʊ/  cow
  WU:       '\u{10436}', // 𐑎 /w/   wet
  YEE:      '\u{10437}', // 𐑏 /j/   yes
  H:        '\u{10438}', // 𐑐 /h/   hi
  PEE:      '\u{10439}', // 𐑑 /p/   pit
  BEE:      '\u{1043A}', // 𐑒 /b/   bit
  TEE:      '\u{1043B}', // 𐑓 /t/   tin
  DEE:      '\u{1043C}', // 𐑔 /d/   din
  CHEE:     '\u{1043D}', // 𐑕 /tʃ/  chin
  JEE:      '\u{1043E}', // 𐑖 /dʒ/  gin
  KAY:      '\u{1043F}', // 𐑗 /k/   kit
  GAY:      '\u{10440}', // 𐑘 /ɡ/   give
  EF:       '\u{10441}', // 𐑙 /f/   fun
  VEE:      '\u{10442}', // 𐑚 /v/   vat
  ETH:      '\u{10443}', // 𐑛 /θ/   think
  THEE:     '\u{10444}', // 𐑜 /ð/   the
  ES:       '\u{10445}', // 𐑝 /s/   sin
  ZEE:      '\u{10446}', // 𐑞 /z/   zeal
  ESH:      '\u{10447}', // 𐑟 /ʃ/   shore
  ZHEE:     '\u{10448}', // 𐑠 /ʒ/   measure
  ER:       '\u{10449}', // 𐑡 /ɜːr/ urban
  EL:       '\u{1044A}', // 𐑢 /l/   led
  EM:       '\u{1044B}', // 𐑣 /m/   met
  EN:       '\u{1044C}', // 𐑤 /n/   net
  ENG:      '\u{1044D}', // 𐑥 /ŋ/   sung
  OI:       '\u{1044E}', // 𐑦 /ɔɪ/  foil
  EW:       '\u{1044F}', // 𐑧 /juː/ cute
} as const;

// ── Deseret → phonetic English ───────────────────────────────────────────────

/** Maps every Deseret code point (upper and lower case) to a phonetic label. */
const DESERET_TO_PHONETIC: Record<string, string> = {
  // Uppercase (U+10400–U+10427)
  '\u{10400}': 'ee',  // 𐐀 Long I
  '\u{10401}': 'ay',  // 𐐁 Long E
  '\u{10402}': 'ah',  // 𐐂 Long A
  '\u{10403}': 'aw',  // 𐐃 Long Ah
  '\u{10404}': 'oh',  // 𐐄 Long O
  '\u{10405}': 'oo',  // 𐐅 Long Oo
  '\u{10406}': 'i',   // 𐐆 Short I
  '\u{10407}': 'e',   // 𐐇 Short E
  '\u{10408}': 'a',   // 𐐈 Short A
  '\u{10409}': 'o',   // 𐐉 Short Ah
  '\u{1040A}': 'u',   // 𐐊 Short O
  '\u{1040B}': 'uu',  // 𐐋 Short Oo
  '\u{1040C}': 'ai',   // 𐐌 Ay  (/aɪ/ long I sound)
  '\u{1040D}': 'ow',  // 𐐍 Ow
  '\u{1040E}': 'w',   // 𐐎 Wu
  '\u{1040F}': 'y',   // 𐐏 Yee
  '\u{10410}': 'h',   // 𐐐 H
  '\u{10411}': 'p',   // 𐐑 Pee
  '\u{10412}': 'b',   // 𐐒 Bee
  '\u{10413}': 't',   // 𐐓 Tee
  '\u{10414}': 'd',   // 𐐔 Dee
  '\u{10415}': 'ch',  // 𐐕 Chee
  '\u{10416}': 'j',   // 𐐖 Jee
  '\u{10417}': 'k',   // 𐐗 Kay
  '\u{10418}': 'g',   // 𐐘 Gay
  '\u{10419}': 'f',   // 𐐙 Ef
  '\u{1041A}': 'v',   // 𐐚 Vee
  '\u{1041B}': 'th',  // 𐐛 Eth (voiceless)
  '\u{1041C}': 'dh',  // 𐐜 Thee (voiced)
  '\u{1041D}': 's',   // 𐐝 Es
  '\u{1041E}': 'z',   // 𐐞 Zee
  '\u{1041F}': 'sh',  // 𐐟 Esh
  '\u{10420}': 'zh',  // 𐐠 Zhee
  '\u{10421}': 'er',  // 𐐡 Er
  '\u{10422}': 'l',   // 𐐢 El
  '\u{10423}': 'm',   // 𐐣 Em
  '\u{10424}': 'n',   // 𐐤 En
  '\u{10425}': 'ng',  // 𐐥 Eng
  '\u{10426}': 'oi',  // 𐐦 Oi
  '\u{10427}': 'ew',  // 𐐧 Ew

  // Lowercase (U+10428–U+1044F)
  [D.LONG_I]:   'ee',
  [D.LONG_E]:   'ay',
  [D.LONG_A]:   'ah',
  [D.LONG_AH]:  'aw',
  [D.LONG_O]:   'oh',
  [D.LONG_OO]:  'oo',
  [D.SHORT_I]:  'i',
  [D.SHORT_E]:  'e',
  [D.SHORT_A]:  'a',
  [D.SHORT_AH]: 'o',
  [D.SHORT_O]:  'u',
  [D.SHORT_OO]: 'uu',
  [D.AY]:       'ai',   // /aɪ/ (distinct from Short I /ɪ/ → 'i')
  [D.OW]:       'ow',
  [D.WU]:       'w',
  [D.YEE]:      'y',
  [D.H]:        'h',
  [D.PEE]:      'p',
  [D.BEE]:      'b',
  [D.TEE]:      't',
  [D.DEE]:      'd',
  [D.CHEE]:     'ch',
  [D.JEE]:      'j',
  [D.KAY]:      'k',
  [D.GAY]:      'g',
  [D.EF]:       'f',
  [D.VEE]:      'v',
  [D.ETH]:      'th',
  [D.THEE]:     'dh',
  [D.ES]:       's',
  [D.ZEE]:      'z',
  [D.ESH]:      'sh',
  [D.ZHEE]:     'zh',
  [D.ER]:       'er',
  [D.EL]:       'l',
  [D.EM]:       'm',
  [D.EN]:       'n',
  [D.ENG]:      'ng',
  [D.OI]:       'oi',
  [D.EW]:       'ew',
};

/** Metadata for every Deseret letter (used by the virtual keyboard). */
export interface DeseretLetterInfo {
  /** Unicode code point as a string (lowercase form). */
  char: string;
  /** Short phonetic label shown on the keyboard key. */
  phonetic: string;
  /** Example English word that contains the sound. */
  example: string;
  /** Human-readable letter name. */
  name: string;
}

export const DESERET_LETTERS: DeseretLetterInfo[] = [
  { char: D.LONG_I,   phonetic: 'ee',  example: 'bee',     name: 'Long I'   },
  { char: D.LONG_E,   phonetic: 'ay',  example: 'day',     name: 'Long E'   },
  { char: D.LONG_A,   phonetic: 'ah',  example: 'father',  name: 'Long A'   },
  { char: D.LONG_AH,  phonetic: 'aw',  example: 'all',     name: 'Long Ah'  },
  { char: D.LONG_O,   phonetic: 'oh',  example: 'go',      name: 'Long O'   },
  { char: D.LONG_OO,  phonetic: 'oo',  example: 'moon',    name: 'Long Oo'  },
  { char: D.SHORT_I,  phonetic: 'i',   example: 'bit',     name: 'Short I'  },
  { char: D.SHORT_E,  phonetic: 'e',   example: 'pet',     name: 'Short E'  },
  { char: D.SHORT_A,  phonetic: 'a',   example: 'cat',     name: 'Short A'  },
  { char: D.SHORT_AH, phonetic: 'o',   example: 'hot',     name: 'Short Ah' },
  { char: D.SHORT_O,  phonetic: 'u',   example: 'but',     name: 'Short O'  },
  { char: D.SHORT_OO, phonetic: 'uu',  example: 'look',    name: 'Short Oo' },
  { char: D.AY,       phonetic: 'ai',  example: 'mine',    name: 'Ay'       },
  { char: D.OW,       phonetic: 'ow',  example: 'cow',     name: 'Ow'       },
  { char: D.WU,       phonetic: 'w',   example: 'wet',     name: 'Wu'       },
  { char: D.YEE,      phonetic: 'y',   example: 'yes',     name: 'Yee'      },
  { char: D.H,        phonetic: 'h',   example: 'hi',      name: 'H'        },
  { char: D.PEE,      phonetic: 'p',   example: 'pit',     name: 'Pee'      },
  { char: D.BEE,      phonetic: 'b',   example: 'bit',     name: 'Bee'      },
  { char: D.TEE,      phonetic: 't',   example: 'tin',     name: 'Tee'      },
  { char: D.DEE,      phonetic: 'd',   example: 'din',     name: 'Dee'      },
  { char: D.CHEE,     phonetic: 'ch',  example: 'chin',    name: 'Chee'     },
  { char: D.JEE,      phonetic: 'j',   example: 'gin',     name: 'Jee'      },
  { char: D.KAY,      phonetic: 'k',   example: 'kit',     name: 'Kay'      },
  { char: D.GAY,      phonetic: 'g',   example: 'give',    name: 'Gay'      },
  { char: D.EF,       phonetic: 'f',   example: 'fun',     name: 'Ef'       },
  { char: D.VEE,      phonetic: 'v',   example: 'vat',     name: 'Vee'      },
  { char: D.ETH,      phonetic: 'th',  example: 'think',   name: 'Eth'      },
  { char: D.THEE,     phonetic: 'dh',  example: 'the',     name: 'Thee'     },
  { char: D.ES,       phonetic: 's',   example: 'sin',     name: 'Es'       },
  { char: D.ZEE,      phonetic: 'z',   example: 'zeal',    name: 'Zee'      },
  { char: D.ESH,      phonetic: 'sh',  example: 'shore',   name: 'Esh'      },
  { char: D.ZHEE,     phonetic: 'zh',  example: 'measure', name: 'Zhee'     },
  { char: D.ER,       phonetic: 'er',  example: 'urban',   name: 'Er'       },
  { char: D.EL,       phonetic: 'l',   example: 'led',     name: 'El'       },
  { char: D.EM,       phonetic: 'm',   example: 'met',     name: 'Em'       },
  { char: D.EN,       phonetic: 'n',   example: 'net',     name: 'En'       },
  { char: D.ENG,      phonetic: 'ng',  example: 'sung',    name: 'Eng'      },
  { char: D.OI,       phonetic: 'oi',  example: 'foil',    name: 'Oi'       },
  { char: D.EW,       phonetic: 'ew',  example: 'cute',    name: 'Ew'       },
];

// ── Deseret → English ────────────────────────────────────────────────────────

/**
 * Converts Deseret alphabet text to a phonetic English representation.
 * Non-Deseret characters (spaces, punctuation, etc.) are preserved as-is.
 */
export function deseretToEnglish(text: string): string {
  const result: string[] = [];
  // Iterate using spread to correctly handle supplementary Unicode code points.
  for (const char of text) {
    const phonetic = DESERET_TO_PHONETIC[char];
    if (phonetic !== undefined) {
      result.push(phonetic);
    } else {
      result.push(char);
    }
  }
  return result.join('');
}

// ── English → Deseret ────────────────────────────────────────────────────────

/**
 * Ordered list of [englishPattern, deseretReplacement] pairs.
 * Longer / more-specific patterns must come before shorter ones.
 * All patterns are lowercase.
 */
const ENGLISH_TO_DESERET_RULES: [string, string][] = [
  // ── 4-char patterns ──────────────────────────────────────────────────────
  ['tion',  D.ESH + D.EN],          // -tion  → sh + n
  ['sion',  D.ESH + D.EN],          // -sion  → sh + n
  ['ight',  D.AY + D.TEE],          // -ight  → aɪ + t
  ['augh',  D.LONG_AH],             // caught → /ɔː/
  ['ough',  D.LONG_AH],             // thought → /ɔː/ (most common)
  ['eigh',  D.LONG_E],              // eight  → /eɪ/

  // ── 3-char patterns ──────────────────────────────────────────────────────
  ['tch',  D.CHEE],                 // catch  → ch
  ['dge',  D.JEE],                  // badge  → j
  ['sch',  D.ESH],                  // school → sh
  ['igh',  D.AY],                   // high   → /aɪ/
  ['ugh',  D.LONG_O],               // dough  → /oʊ/ (approximate)
  ['eau',  D.LONG_O],               // beau   → /oʊ/
  ['iew',  D.LONG_I],               // view   → /iː/ + w (approximate)

  // ── 2-char consonant clusters ─────────────────────────────────────────────
  ['th',   D.THEE],                 // the, this → voiced /ð/ (most common)
  ['sh',   D.ESH],                  // shore → /ʃ/
  ['ch',   D.CHEE],                 // chin  → /tʃ/
  ['ng',   D.ENG],                  // sing  → /ŋ/
  ['ph',   D.EF],                   // phone → /f/
  ['wh',   D.WU],                   // what  → /w/
  ['qu',   D.KAY + D.WU],           // queen → /kw/
  ['ck',   D.KAY],                  // back  → /k/
  ['zh',   D.ZHEE],                 // azure → /ʒ/
  ['kn',   D.EN],                   // knit  → silent k
  ['wr',   D.ER],                   // write → silent w
  ['gn',   D.EN],                   // gnome → silent g
  ['mb',   D.EM],                   // lamb  → silent b

  // ── 2-char vowel clusters ─────────────────────────────────────────────────
  ['ee',   D.LONG_I],               // bee   → /iː/
  ['ea',   D.LONG_I],               // sea   → /iː/ (most common)
  ['ie',   D.LONG_I],               // field → /iː/
  ['ay',   D.LONG_E],               // day   → /eɪ/
  ['ai',   D.LONG_E],               // rain  → /eɪ/
  ['ei',   D.LONG_E],               // veil  → /eɪ/
  ['ey',   D.LONG_E],               // they  → /eɪ/
  ['oa',   D.LONG_O],               // boat  → /oʊ/
  ['oe',   D.LONG_O],               // toe   → /oʊ/
  ['ow',   D.LONG_O],               // snow  → /oʊ/ (common silent-w spelling)
  ['ou',   D.OW],                   // out   → /aʊ/
  ['oo',   D.LONG_OO],              // moon  → /uː/
  ['ue',   D.LONG_OO],              // blue  → /uː/
  ['ui',   D.LONG_OO],              // suit  → /uː/
  ['oi',   D.OI],                   // foil  → /ɔɪ/
  ['oy',   D.OI],                   // boy   → /ɔɪ/
  ['ew',   D.EW],                   // new   → /juː/
  ['au',   D.LONG_AH],              // cause → /ɔː/
  ['aw',   D.LONG_AH],              // saw   → /ɔː/
  ['er',   D.ER],                   // butter → /ər/
  ['ir',   D.ER],                   // bird  → /ɜːr/
  ['ur',   D.ER],                   // burn  → /ɜːr/

  // ── single consonants ─────────────────────────────────────────────────────
  ['b',    D.BEE],
  ['d',    D.DEE],
  ['f',    D.EF],
  ['h',    D.H],
  ['j',    D.JEE],
  ['k',    D.KAY],
  ['l',    D.EL],
  ['m',    D.EM],
  ['n',    D.EN],
  ['p',    D.PEE],
  ['r',    D.ER],
  ['t',    D.TEE],
  ['v',    D.VEE],
  ['w',    D.WU],
  ['x',    D.KAY + D.ES],           // box → /ks/
  ['y',    D.YEE],
  ['z',    D.ZEE],

  // ── single vowels (short sounds as defaults) ──────────────────────────────
  ['a',    D.SHORT_A],              // cat  → /æ/
  ['e',    D.SHORT_E],              // pet  → /ɛ/
  ['i',    D.SHORT_I],              // bit  → /ɪ/
  ['o',    D.SHORT_AH],             // hot  → /ɒ/
  ['u',    D.SHORT_O],              // but  → /ʌ/
];

// Context-sensitive single-char rules applied *after* multi-char table matches.
const SOFT_C_TRIGGERS = new Set(['e', 'i', 'y']);
const SOFT_G_TRIGGERS = new Set(['e', 'i', 'y']);

// Separate multi-char patterns (length >= 2) from single-char patterns for
// efficient two-phase lookup in englishToDeseret.
const MULTI_CHAR_RULES = ENGLISH_TO_DESERET_RULES.filter(([p]) => p.length >= 2);
const SINGLE_CHAR_RULES = new Map(
  ENGLISH_TO_DESERET_RULES.filter(([p]) => p.length === 1)
);

/**
 * Converts English text to Deseret alphabet using phonetic heuristics.
 *
 * Note: English spelling is notoriously irregular. This function provides
 * a reasonable phonetic approximation for most common words, but unusual
 * spellings may not transliterate perfectly.
 */
export function englishToDeseret(text: string): string {
  const lower = text.toLowerCase();
  let result = '';
  let i = 0;

  while (i < lower.length) {
    const ch = lower[i];

    // ── Non-alphabetic: pass through unchanged ─────────────────────────────
    if (!/[a-z]/.test(ch)) {
      result += text[i];
      i++;
      continue;
    }

    // ── Phase 1: multi-char patterns (longest match wins) ──────────────────
    const remaining = lower.slice(i);
    let matched = false;

    for (const [pattern, deseret] of MULTI_CHAR_RULES) {
      if (remaining.startsWith(pattern)) {
        result += deseret;
        i += pattern.length;
        matched = true;
        break;
      }
    }

    if (matched) continue;

    // ── Phase 2: context-sensitive single chars ────────────────────────────
    const nextCh = i + 1 < lower.length ? lower[i + 1] : '';

    if (ch === 'c') {
      result += SOFT_C_TRIGGERS.has(nextCh) ? D.ES : D.KAY;
      i++;
      continue;
    }

    if (ch === 'g') {
      result += SOFT_G_TRIGGERS.has(nextCh) ? D.JEE : D.GAY;
      i++;
      continue;
    }

    if (ch === 's') {
      // Approximate voiced S between vowels → /z/
      const prevCh = i > 0 ? lower[i - 1] : '';
      const isVowel = (c: string) => c.length > 0 && 'aeiou'.includes(c);
      result += (isVowel(prevCh) && isVowel(nextCh)) ? D.ZEE : D.ES;
      i++;
      continue;
    }

    // ── Phase 3: single-char rule table ────────────────────────────────────
    const mapped = SINGLE_CHAR_RULES.get(ch);
    if (mapped !== undefined) {
      result += mapped;
    } else {
      result += text[i]; // Fallback: pass through unchanged
    }
    i++;
  }

  return result;
}

// ── Detection helper ─────────────────────────────────────────────────────────

const DESERET_RANGE_RE = /[\u{10400}-\u{1044F}]/u;

/** Returns true when the string contains at least one Deseret character. */
export function containsDeseret(text: string): boolean {
  return DESERET_RANGE_RE.test(text);
}
