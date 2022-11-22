import { TaskProps } from '../Task/TaskProps';

export interface TasksListProps {
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}
