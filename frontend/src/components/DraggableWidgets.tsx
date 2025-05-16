import TodoList from "@/components/TodoList";
import GitHubActivity from "@/components/GitHubActivity";
import StackOverflowTrending from "@/components/StackOverflowTrending";
import PomodoroTimer from "@/components/PomodoroTimer";
import WeatherAndTime from "@/components/WeatherAndTime";
import SortableWidget from "@/components/SortableWidget";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { JSX } from "react";
import useUser from "@/hooks/useUser";

const WIDGETS: Record<Widget, JSX.Element> = {
  todo: <TodoList />,
  github: <GitHubActivity />,
  stack: <StackOverflowTrending />,
  pomodoro: <PomodoroTimer />,
  weather: <WeatherAndTime />,
};

const DEFAULT_WIDGETS: (keyof typeof WIDGETS)[] = [
  "todo",
  "github",
  "stack",
  "pomodoro",
  "weather",
];

const DraggableWidgets = () => {
  const [widgets, setWidgets] = useUser("widgets", DEFAULT_WIDGETS);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = widgets.findIndex((w) => w === active.id);
      const newIndex = widgets.findIndex((w) => w === over?.id);
      const newWidgets = arrayMove(widgets, oldIndex, newIndex);
      setWidgets(newWidgets);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={widgets} strategy={verticalListSortingStrategy}>
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {widgets.map((widget) => (
            <SortableWidget key={widget} id={widget}>
              {WIDGETS[widget]}
            </SortableWidget>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DraggableWidgets;
