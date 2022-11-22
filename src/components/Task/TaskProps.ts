export interface TaskComponentProps {
  id: string;
  content: string;
  isFinished: boolean;
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

export interface TaskProps {
  id: string;
  content: string;
  isFinished: boolean;
}
