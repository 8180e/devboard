import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useUser("theme", "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      className="absolute top-4 right-4"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
};

export default ThemeToggle;
