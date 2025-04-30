// src/utils/storage.ts

export const getFavorites = (): string[] => {
    if (typeof window !== "undefined") {
      const favorites = localStorage.getItem("favorites");
      return favorites ? JSON.parse(favorites) : [];
    }
    return [];
  };
  
  export const toggleFavorite = (courseId: string): void => {
    const favorites = getFavorites();
    const newFavorites = favorites.includes(courseId)
      ? favorites.filter(id => id !== courseId)
      : [...favorites, courseId];
  
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };
  
  export const getProgress = (): { [key: string]: number } => {
    if (typeof window !== "undefined") {
      const progress = localStorage.getItem("progress");
      return progress ? JSON.parse(progress) : {};
    }
    return {};
  };
  
  export const addCompletedCourse = (courseId: string): void => {
    const progress = getProgress();
    progress[courseId] = 100;  // Mark the course as completed
    localStorage.setItem("progress", JSON.stringify(progress));
  };
  