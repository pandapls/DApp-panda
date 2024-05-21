import { atom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';

const countAtom = atom(0);
const mangaAtomObj = atomWithImmer({ a: 1 });

export { countAtom, mangaAtomObj };
