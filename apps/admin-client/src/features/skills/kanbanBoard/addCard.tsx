import { FormEvent, useRef } from 'react';
import { Task, TaskState } from './types';

interface AddCardProps {
  addCard: (task: Task) => void;
}

export const AddCard = ({ addCard }: AddCardProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const resetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current?.focus();
    }
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const content = formData.get('content');
    if (!content || content.toString().trim() === '') {
      resetInput();
      return;
    }

    if (typeof content === 'string') {
      addCard({
        id: Math.random().toString().slice(2),
        content,
        state: TaskState.PLANNED,
        userId: 'user123',
      });
      resetInput();
    }
  };

  return (
    <form className="flex gap-2" onSubmit={onFormSubmit}>
      <input
        className="py-1 px-2 rounded-lg border border-black"
        ref={inputRef}
        type="text"
        name="content"
      />
      <button className="text-white bg-teal-700 rounded-lg py-1 px-2 cursor-pointer">
        Add
      </button>
    </form>
  );
};
