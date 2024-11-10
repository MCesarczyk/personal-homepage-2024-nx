import { useDroppable } from '@dnd-kit/core';
import { KanbanCard } from './kanbanCard';
import { Task, TaskState } from './types';

interface KanbanLaneProps {
  title: string;
  state: TaskState;
  items: Task[];
}

export function KanbanLane({ title, state, items }: KanbanLaneProps) {
  const { setNodeRef } = useDroppable({
    id: state,
  });
  return (
    <div className="flex flex-col p-4 min-h-fit border border-gray-500">
      <p className="font-bold capitalize">{title}</p>
      <div
        className="flex-1 flex flex-col rounded-lg bg-gray-200 p-2"
        ref={setNodeRef}
      >
        {items.map((task, key) => (
          <KanbanCard task={task} key={key} index={key} parent={state} />
        ))}
      </div>
    </div>
  );
}
