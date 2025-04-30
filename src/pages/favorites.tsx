import { getFavorites } from '../utils/storage';
import CourseCard from '../components/CourseCard';

export default function Favorites() {
  const favorites = getFavorites();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Favorite Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {favorites.length === 0 ? (
          <p className="text-center">No favorite courses yet!</p>
        ) : (
          favorites.map(courseId => (
            <CourseCard
              key={courseId}
              courseId={courseId}
              title={`Course ${courseId}`}
              description={`Description for ${courseId}`}
            />
          ))
        )}
      </div>
    </div>
  );
}
