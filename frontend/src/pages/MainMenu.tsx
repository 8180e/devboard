import { ChartBarIcon, Code2Icon, LockIcon } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: ChartBarIcon },
  { name: "Log In", href: "/login", icon: LockIcon },
];

const MainMenu = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
        🧭 Main Menu
      </h1>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {menuItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            to={href}
            className="flex items-center gap-4 rounded bg-white p-4 shadow transition hover:bg-gray-100 hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Icon className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
              {name}
            </span>
          </Link>
        ))}
        <a
          href="https://github.com/8180e"
          target="_blank"
          className="flex items-center gap-4 rounded bg-white p-4 shadow transition hover:bg-gray-100 hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Code2Icon className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
            My GitHub
          </span>
        </a>
      </div>
    </div>
  );
};

export default MainMenu;
