import { getCompletedCourses } from '../utils/storage';

export default function Profile() {
  const completedCourses = getCompletedCourses();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Achievements</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {completedCourses.length === 0 ? (
          <p className="text-center">You haven't completed any courses yet!</p>
        ) : (
          completedCourses.map((courseId, idx) => (
            <div key={idx} className="p-4 bg-green-200 text-center rounded-lg shadow-md">
              <span className="text-xl font-semibold">Course {courseId}</span>
              <div className="mt-2">
                <span className="text-lg text-green-800">🏅 Completed</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
