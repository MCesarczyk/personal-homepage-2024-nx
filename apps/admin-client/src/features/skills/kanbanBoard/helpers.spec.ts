import { Task, TaskState } from './types';
import { filterTasksByState } from './helpers';

describe('FilterTasksByState', () => {
  it('should filter tasks by state', () => {
    const tasks = [
      { id: '1', content: 'lorem ipsum', state: 'PLANNED', userId: '1' },
      { id: '2', content: 'ipsum lorem', state: 'RUNNING', userId: '2' },
      { id: '3', content: 'muspi merol', state: 'COMPLETED', userId: '3' }
    ] as Task[];
    const result = filterTasksByState(tasks, 'PLANNED' as TaskState);
    expect(result).toEqual([{ id: '1', content: 'lorem ipsum', state: 'PLANNED', userId: '1' }]);
  });
});
