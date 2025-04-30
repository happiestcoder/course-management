import { useState, useEffect } from "react";

// Define the CourseCardProps interface to include all the necessary props
interface CourseCardProps {
  courseId: string;
  title: string;
  description: string;
  isFavorite: boolean;  // Add isFavorite here
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
  const [localIsFavorite, setLocalIsFavorite] = useState(isFavorite);

  const handleFavoriteToggle = () => {
    // Handle favorite toggle logic
    setLocalIsFavorite(!localIsFavorite);
    // You can add any additional logic to handle favorite persistence here (e.g., localStorage)
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border dark:bg-gray-800">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-4">
        <button
          onClick={handleFavoriteToggle}
          className={`text-lg ${localIsFavorite ? 'text-red-500' : 'text-gray-500'}`}
        >
          {localIsFavorite ? '💖 Favorited' : '🤍 Mark as Favorite'}
        </button>
      </div>
      <div className="mt-2 flex items-center gap-4">
        <span className="text-sm text-gray-500">Progress: {progress}%</span>
        {isCompleted ? (
          <span className="text-xs px-2 py-1 bg-green-200 text-green-800 rounded-full">Completed</span>
        ) : (
          <span className="text-xs px-2 py-1 bg-blue-500 text-white rounded-full">In Progress</span>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
