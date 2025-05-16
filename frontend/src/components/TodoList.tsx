import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CheckCircle, Trash2 } from "lucide-react";
import useUser from "@/hooks/useUser";

type Priority = "High" | "Medium" | "Low";

const TodoList = () => {
  const [todos, setTodos] = useUser("todos", []);
  const [input, setInput] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("Medium");

  const addTodo = async () => {
    if (input.trim() !== "") {
      const newTodos = [...todos, { text: input, done: false, priority }];
      setTodos(newTodos);
      setInput("");
      setPriority("Medium");
    }
  };

  const toggleDone = async (index: number) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const removeTodo = async (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const priorityColor = (level: Priority) => {
    switch (level) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Todo List</h2>
        <div className="mb-4 flex flex-col gap-2 md:flex-row">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
            className="flex-1"
          />
          <Select
            value={priority}
            onValueChange={(value) => setPriority(value as Priority)}
          >
            <SelectTrigger className="md:w-36">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={addTodo}>Add</Button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm dark:bg-gray-800"
            >
              <div>
                <span
                  className={`block ${
                    todo.done ? "text-gray-400 line-through" : ""
                  }`}
                >
                  {todo.text}
                </span>
                <span className={`text-sm ${priorityColor(todo.priority)}`}>
                  Priority: {todo.priority}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleDone(index)}
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeTodo(index)}
                >
                  <Trash2 className="h-5 w-5 text-red-500" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TodoList;
