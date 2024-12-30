import { useState } from "react";
import s from "./Tasks.module.css";
import { ClipboardText } from "@phosphor-icons/react";
import { Task } from "../Task/Task";

export function Tasks() {
  const [isTaskCreated, setIsTaskCreated] = useState(false);

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
        {isTaskCreated ? (
          <>
            <ClipboardText size={56} />
            <span>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </span>
          </>
        ) : (
          <Task />
        )}
      </div>
    </div>
  );
}
