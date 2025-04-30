import { toggleFavorite, getFavorites, getProgress, addCompletedCourse } from '../utils/storage';
import { useState, useEffect } from 'react';

interface CourseCardProps {
  courseId: string;
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ courseId, title, description }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Fetch favorite status and progress on component mount
  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.includes(courseId));

    const courseProgress = getProgress();
    const courseProgressValue = courseProgress[courseId] || 0;
    setProgress(courseProgressValue);
    setIsCompleted(courseProgressValue === 100);
  }, [courseId]);

  // Handle the favorite toggle action
  const handleFavoriteToggle = () => {
    toggleFavorite(courseId);
    setIsFavorite(!isFavorite);
  };

  // Handle marking course as completed
  const handleCompleteCourse = () => {
    addCompletedCourse(courseId);
    setProgress(100);
    setIsCompleted(true);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border dark:bg-gray-800">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      
      {/* Favorite button */}
      <div className="mt-4">
        <button
          onClick={handleFavoriteToggle}
          className={`text-lg ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
        >
          {isFavorite ? '💖 Favorited' : '🤍 Mark as Favorite'}
        </button>
      </div>

      {/* Progress & completion status */}
      <div className="mt-2 flex items-center gap-4">
        <span className="text-sm text-gray-500">Progress: {progress}%</span>
        {isCompleted ? (
          <span className="text-xs px-2 py-1 bg-green-200 text-green-800 rounded-full">Completed</span>
        ) : (
          <button onClick={handleCompleteCourse} className="px-2 py-1 bg-blue-500 text-white rounded-full">
            Mark as Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
