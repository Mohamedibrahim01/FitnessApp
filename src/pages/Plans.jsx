import Navbar from "../components/Navbar";

export default function Plans() {
  const dummyExercises = [
    { id: 1, name: "Push Ups", muscle: "Chest" },
    { id: 2, name: "Pull Ups", muscle: "Back" },
    { id: 3, name: "Squats", muscle: "Legs" },
    { id: 4, name: "Overhead Press", muscle: "Shoulders" },
    { id: 5, name: "Barbell Bench Press", muscle: "Chest" },
    { id: 6, name: "Deadlift", muscle: "Back" },
    { id: 7, name: "Lunges", muscle: "Legs" },
    { id: 8, name: "Bicep Curls", muscle: "Biceps" },
    { id: 9, name: "Tricep Dips", muscle: "Triceps" },
    { id: 10, name: "Lateral Raises", muscle: "Shoulders" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
          Workout Exercises
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dummyExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-gray-800 rounded-xl p-4 shadow-lg hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-orange-400">
                {exercise.name}
              </h3>
              <p className="text-gray-300">
                Target Muscle:{" "}
                <span className="text-white font-medium">
                  {exercise.muscle}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
