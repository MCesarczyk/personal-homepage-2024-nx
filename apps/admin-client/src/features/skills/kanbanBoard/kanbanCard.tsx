import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Task } from './types';

interface KanbanCardProps {
  task: Task;
  index: number;
  parent: string;
}

export const KanbanCard = ({ task, index, parent }: KanbanCardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: {
      id: task.id,
      content: task.content,
      index,
      parent,
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      className="p-3 bg-white m-2 rounded-lg border-2 border-gray-500 shadow-md"
      style={style}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
    >
      <p>{task.content}</p>
    </div>
  );
};
