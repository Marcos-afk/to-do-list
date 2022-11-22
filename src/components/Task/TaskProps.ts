export interface TaskProps {
  id: string;
  content: string;
  isFinished: boolean;
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}
