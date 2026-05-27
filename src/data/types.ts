export interface Snippet {
  code: string;
  description: string;
  language?: string;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  snippets: Snippet[];
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  sections: Section[];
}
