import s from "./Tasks.module.css";
import { ClipboardText } from "@phosphor-icons/react";
import { Task } from "../Task/Task";

interface Props {
  tasks: TaskProps[];
  onDeleteTask: (id: string) => void;
}

export interface TaskProps {
  id: string;
  content: string;
}

export function Tasks({ tasks, onDeleteTask }: Props) {
  const taskIsEmpty = tasks.length <= 0;

  return (
    <div className={s.container}>
      <div className={s.statusTasks}>
        <div className={s.tasksCreated}>
          <span>Tarefas criadas</span>
          <div className={s.badgeStatusTasks}>0</div>
        </div>

        <div className={s.tasksCompleted}>
          <span>Concluídas</span>
          <div className={s.badgeStatusTasks}>0</div>
        </div>
      </div>

      <div className={s.tasks}>
        {taskIsEmpty ? (
          <>
            <ClipboardText size={56} />
            <span>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </span>
          </>
        ) : (
          tasks.map((task) => <Task onDeleteTask={onDeleteTask} Task={task} key={task.id}/>)
        )}
      </div>
    </div>
  );
}
