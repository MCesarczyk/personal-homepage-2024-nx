export type AppState = 'loading' | 'error' | 'success';

export interface RepositoryDTO {
  id: number;
  title: string;
  description: string;
  homepage: string;
  html_url: string;
}
