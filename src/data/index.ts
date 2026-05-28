import { Category } from './types';
import { pythonData } from './python';
import { numpyData } from './numpy';
import { pandasData } from './pandas';
import { matplotlibData } from './matplotlib';
import { sklearnData } from './sklearn';
import { cData } from './c';
import { cppData } from './cpp';
import { javaData } from './java';
import { oopsData } from './oops';
import { dsaData } from './dsa';
import { sqlData } from './sql';
import { osData } from './os';
import { systemDesignData } from './systemdesign';
import { cryptoData } from './cryptography';
import { gitData } from './git';
import { dockerData } from './docker';

export const allCategories: Category[] = [
  pythonData,
  numpyData,
  pandasData,
  matplotlibData,
  sklearnData,
  cData,
  cppData,
  javaData,
  oopsData,
  dsaData,
  sqlData,
  osData,
  systemDesignData,
  cryptoData,
  gitData,
  dockerData,
];

export const getCategoryById = (id: string): Category | undefined =>
  allCategories.find((c) => c.id === id);

export const getSectionById = (categoryId: string, sectionId: string) => {
  const category = getCategoryById(categoryId);
  return category?.sections.find((s) => s.id === sectionId);
};

// Flat list of all searchable snippets
export interface SearchItem {
  categoryId: string;
  categoryTitle: string;
  categoryIcon: string;
  sectionId: string;
  sectionTitle: string;
  description: string;
  code: string;
}

export const getAllSnippets = (): SearchItem[] => {
  const items: SearchItem[] = [];
  for (const cat of allCategories) {
    for (const sec of cat.sections) {
      for (const snippet of sec.snippets) {
        items.push({
          categoryId: cat.id,
          categoryTitle: cat.title,
          categoryIcon: cat.icon,
          sectionId: sec.id,
          sectionTitle: sec.title,
          description: snippet.description,
          code: snippet.code,
        });
      }
    }
  }
  return items;
};
