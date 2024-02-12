export type AppState = 'loading' | 'error' | 'success';

export type Theme = 'light' | 'dark';

export interface RepositoryDTO {
  id: number;
  title: string;
  description: string;
  homepage: string;
  html_url: string;
}
