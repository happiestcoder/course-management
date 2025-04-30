import { getFavorites, getProgress } from '../utils/storage';
import CourseCard from '../components/CourseCard';

export default function Favorites() {
  const favorites = getFavorites();
  const progress = getProgress();  // Get progress data

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Favorite Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {favorites.length === 0 ? (
          <p className="text-center">No favorite courses yet!</p>
        ) : (
          favorites.map(courseId => {
            const courseProgress = progress[courseId] || 0;  // Get course progress for each favorite
            const isCompleted = courseProgress === 100;

            return (
              <CourseCard
                key={courseId}
                courseId={courseId}
                title={`Course ${courseId}`}
                description={`Description for ${courseId}`}
                isFavorite={true}  // Always true since it's a favorite
                progress={courseProgress}
                isCompleted={isCompleted}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
