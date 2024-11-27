// utils/theme.ts

// Obtiene el tema guardado en localStorage (si existe)
export const getSavedTheme = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme');
  }
  return null;
}

// Guarda el tema en localStorage
export const saveTheme = (theme: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
}

// Aplica el tema en el documento
export const applyTheme = (theme: string): void => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
