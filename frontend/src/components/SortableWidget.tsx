import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Move } from "lucide-react";

type SortableWidgetProps = { id: string; children: React.ReactNode };

const SortableWidget = ({ id, children }: SortableWidgetProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} {...attributes} className="relative">
      <div {...listeners} className="absolute top-2 right-2 cursor-move">
        <Move className="h-4 w-4 text-gray-400" />
      </div>
      {children}
    </div>
  );
};

export default SortableWidget;
