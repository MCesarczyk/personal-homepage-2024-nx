import { useState } from 'react';
import { rectIntersection } from '@dnd-kit/core';
import { KanbanLane } from './kanbanLane';
import { AddCard } from './addCard';
import { Task, TaskState } from './types';
import { tasksMock } from './fixtures';
import { filterTasksByState } from './helpers';
import { DragDropContainer } from './sensors';
import { Trash } from './trash';

export function KanbanBoard() {
  const [tasks, setTasks] = useState<Array<Task>>(tasksMock as Task[]);
  const [proposedTasks, setProposedTasks] = useState<Array<Task>>([]);

  const [confirmationPrompt, setConfirmationPrompt] = useState(false);

  const onItemDelete = () => {
    setConfirmationPrompt(true);

    setTimeout(() => {
      setConfirmationPrompt(false);
      setProposedTasks([]);
    }, 2_000);
  };

  const onDeleteConfirmation = () => {
    setTasks([...proposedTasks]);
    setConfirmationPrompt(false);
    setProposedTasks([]);
  };

  const addNewCard = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <DragDropContainer
      collisionDetection={rectIntersection}
      onDragEnd={(e) => {
        const container = e.over?.id;
        const taskId = e.active.data.current?.id ?? '';
        const parent = e.active.data.current?.parent;

        const currentTask = tasks.find((task) => task.id === taskId);

        if (container === undefined && parent === TaskState.PLANNED) {
          return;
        }

        const newTasks = tasks.filter((task) => task.id !== taskId);

        if (!currentTask) {
          return;
        }

        switch (container) {
          case 'REMOVE':
            onItemDelete();
            setProposedTasks([...newTasks]);
            break;
          case TaskState.COMPLETED:
            setTasks([
              ...newTasks,
              { ...currentTask, state: TaskState.COMPLETED },
            ]);
            break;
          case TaskState.RUNNING:
            setTasks([
              ...newTasks,
              { ...currentTask, state: TaskState.RUNNING },
            ]);
            break;
          default:
            setTasks([
              ...newTasks,
              { ...currentTask, state: TaskState.PLANNED },
            ]);
        }
      }}
    >
      <div className="flex flex-col gap-1 p-1">
        <div className="flex justify-between gap-1">
          <AddCard addCard={addNewCard} />
          {confirmationPrompt ? (
            <button
              className="text-black bg-orange-400 rounded-lg p-2 capitalize cursor-pointer"
              onClick={onDeleteConfirmation}
            >
              Confirm
            </button>
          ) : (
            <Trash />
          )}
        </div>
        <div className="grid grid-cols-3">
          <KanbanLane
            title="planned"
            state={TaskState.PLANNED}
            items={filterTasksByState(tasks, TaskState.PLANNED)}
          />
          <KanbanLane
            title="running"
            state={TaskState.RUNNING}
            items={filterTasksByState(tasks, TaskState.RUNNING)}
          />
          <KanbanLane
            title="completed"
            state={TaskState.COMPLETED}
            items={filterTasksByState(tasks, TaskState.COMPLETED)}
          />
        </div>
      </div>
    </DragDropContainer>
  );
}
