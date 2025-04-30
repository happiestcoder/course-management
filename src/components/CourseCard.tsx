// src/components/CourseCard.tsx
import { toggleFavorite, getProgress, addCompletedCourse } from '../utils/storage';
import { useState, useEffect } from 'react';

interface CourseCardProps {
  courseId: string;
  title: string;
  description: string;
  isFavorite: boolean;
  progress: number;
  isCompleted: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  courseId,
  title,
  description,
  isFavorite,
  progress,
  isCompleted
}) => {
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const [progressState, setProgressState] = useState(progress);
  const [isCompletedState, setIsCompletedState] = useState(isCompleted);

  useEffect(() => {
    // Update based on incoming props if necessary
  }, [courseId]);

  const handleFavoriteToggle = () => {
    toggleFavorite(courseId);
    setIsFavoriteState(!isFavoriteState);
  };

  const handleCompleteCourse = () => {
    addCompletedCourse(courseId);
    setProgressState(100);
    setIsCompletedState(true);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border dark:bg-gray-800">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-4">
        <button
          onClick={handleFavoriteToggle}
          className={`text-lg ${isFavoriteState ? 'text-red-500' : 'text-gray-500'}`}
        >
          {isFavoriteState ? '💖 Favorited' : '🤍 Mark as Favorite'}
        </button>
      </div>
      <div className="mt-2 flex items-center gap-4">
        <span className="text-sm text-gray-500">Progress: {progressState}%</span>
        {isCompletedState ? (
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
