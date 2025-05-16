import ThemeToggle from "@/components/ThemeToggle";
import { Link, Outlet } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NAVIGATION_ITEMS = [
  { href: "/dashboard", name: "Dashboard" },
  { href: "/login", name: "Log In" },
  { href: "/", name: "Main Menu" },
];

const Header = () => (
  <>
    <header className="flex items-center justify-between bg-white px-4 py-3 shadow dark:bg-gray-900">
      <div className="text-lg font-semibold text-gray-900 dark:text-white">
        📊 DevBoard
      </div>

      <NavigationMenu>
        <NavigationMenuList className="hidden gap-6 text-sm text-gray-700 md:flex dark:text-gray-300">
          {NAVIGATION_ITEMS.map(({ href, name }) => (
            <NavigationMenuItem key={name}>
              <Link to={href} className="hover:text-blue-600">
                {name}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

export default Header;
