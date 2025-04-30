"use client";  // Add this line at the top

import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { getFavorites, getProgress } from "../utils/storage"; // Ensure this import is correct

// Dummy data for courses
const courses = [
  { id: "course1", title: "Math 101", description: "Learn the basics of Mathematics." },
  { id: "course2", title: "History 201", description: "Dive deep into world history." },
  { id: "course3", title: "Science 301", description: "Explore the world of Science." },
];

export default function Home() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [progress, setProgress] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Get favorites from localStorage
    const favoriteCourses = getFavorites();
    setFavorites(favoriteCourses);

    // Get course progress from localStorage
    const courseProgress = getProgress();
    setProgress(courseProgress);
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <h1 className="text-3xl font-bold text-center sm:text-left mb-6">
        Available Courses
      </h1>

      {courses.map((course) => {
        const isFavorite = favorites.includes(course.id);
        const courseProgress = progress[course.id] || 0;
        const isCompleted = courseProgress === 100;

        return (
          <CourseCard
            key={course.id}
            courseId={course.id}
            title={course.title}
            description={course.description}
            isFavorite={isFavorite}
            progress={courseProgress}
            isCompleted={isCompleted}
          />
        );
      })}
    </div>
  );
}
