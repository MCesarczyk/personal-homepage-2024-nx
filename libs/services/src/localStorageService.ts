export const localStorageService = {
  getValue: <T>(reference: string, fallback?: T): T => {
    const localStorageValue = localStorage.getItem(reference);
    return localStorageValue ? JSON.parse(localStorageValue) : fallback;
  },

  setValue: <T>(reference: string, value: T): void => {
    localStorage.setItem(reference, JSON.stringify(value));
  },

  removeValue: (reference: string): void => {
    localStorage.removeItem(reference);
  },
};
