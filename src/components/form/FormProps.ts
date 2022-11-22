import { TaskProps } from '../Task/TaskProps';

export interface FormProps {
  useCustomStyle: boolean;
  setUseCustomStyle: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}
