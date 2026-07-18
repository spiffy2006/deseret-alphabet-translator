# deseret-alphabet-translator

A Next.js single-page application that converts between English and the
19th-century phonemic **Deseret Alphabet**.

## Features

- **English → Deseret** — Rule-based phonetic transliteration from English
  spelling to Deseret Unicode characters.
- **Deseret → English** — Direct character-by-character mapping that shows the
  phonetic value of each Deseret letter.
- **Virtual Deseret keyboard** — Click to insert any of the 40 Deseret letters
  when translating from Deseret to English.
- **Copy to clipboard** — One-click copy of the translated output.
- **Alphabet reference** — Expandable legend listing every letter with its IPA
  value and an example English word.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## The Deseret Alphabet

The Deseret alphabet was created in the 1850s under Brigham Young for use by
members of The Church of Jesus Christ of Latter-day Saints.  It contains
40 phonemic letters covering all sounds found in English and uses a
Unicode block at **U+10400–U+1044F**.

> **Note on English → Deseret translation:** English spelling is famously
> irregular.  The translator uses phonetic heuristics that work well for most
> common words, but unusual or silent-letter spellings may not transliterate
> perfectly.
