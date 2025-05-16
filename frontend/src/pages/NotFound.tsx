import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center dark:bg-gray-900">
      <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white">
        404
      </h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        <ArrowLeftIcon className="mr-2 h-5 w-5" />
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
