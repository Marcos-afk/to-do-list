import { TaskProps } from '../Task/TaskProps';

export interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}
