import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Flame } from "lucide-react";
import axios from "axios";
import useUser from "@/hooks/useUser";

type StackOverflowQuestion = { link: string; title: string };

const axiosInstance = axios.create({ headers: { Authorization: "" } });

const LANGUAGES: Language[] = [
  "javascript",
  "python",
  "java",
  "go",
  "csharp",
  "typescript",
];

const StackOverflowTrending = () => {
  const [language, setLanguage] = useUser("language", LANGUAGES[0]);
  const [questions, setQuestions] = useState<StackOverflowQuestion[]>([]);

  const decodeHTML = (str: string) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  };

  const handleValueChange = (value: Language) => setLanguage(value);

  useEffect(() => {
    const fetchTrending = async () => {
      const { data }: { data: { items: StackOverflowQuestion[] } } =
        await axiosInstance.get(
          `https://api.stackexchange.com/2.3/questions?order=desc&sort=votes&tagged=${language}&site=stackoverflow`,
        );
      const decodedData = data.items.map((item) => ({
        ...item,
        title: decodeHTML(item.title),
      }));
      setQuestions(decodedData || []);
    };
    fetchTrending();
  }, [language]);

  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6">
        <div className="mb-4">
          <Label
            htmlFor="language"
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Choose Language
          </Label>
          <Select value={language} onValueChange={handleValueChange}>
            <SelectTrigger
              id="language"
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-700 dark:text-white"
            >
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Flame className="h-5 w-5" />
          Trending on StackOverflow
        </h2>
        <ul className="space-y-2 text-sm text-gray-800">
          {questions.slice(0, 5).map((q, i) => (
            <li key={i}>
              <a
                href={q.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {q.title}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default StackOverflowTrending;
