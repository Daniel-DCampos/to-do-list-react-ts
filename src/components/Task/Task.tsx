import { TaskProps } from "../Tasks/Tasks";
import s from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";

interface Props {
  Task: TaskProps;
  onDeleteTask: (id: string) => void
}
export function Task({ Task, onDeleteTask }: Props) {
  function handleDeleteTask() {
    onDeleteTask(Task.id);
  }

  return (
    <div className={s.task}>
      <label className={s.checkbox}>
        <input type="checkbox" className={s.checkboxInput} />
        <span className={s.checkboxInner}></span>
      </label>
      <span className={s.content}>
        {Task.content}
      </span>
      <Trash className={s.deleteButton} size={24} onClick={handleDeleteTask}/>
    </div>
  );
}
