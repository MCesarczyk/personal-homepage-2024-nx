export interface Card {
  title: string;
}

export enum TaskState {
  PLANNED = 'PLANNED',
  RUNNING = 'RUNNING',
  COMPLETED = 'COMPLETED'
}

export interface Task {
  id: string;
  content: string;
  state: TaskState;
  userId: string;
}
