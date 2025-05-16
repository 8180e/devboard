const PageLoader = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
      <div className="border-opacity-70 mb-4 h-12 w-12 animate-spin rounded-full border-t-4 border-blue-500"></div>
      <p className="text-lg font-medium">Loading...</p>
    </div>
  );
};

export default PageLoader;
