import { ChangeEvent, useState } from "react";
import { TaskProps } from "../Tasks/Tasks";
import s from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";

interface Props {
  Task: TaskProps;
  onDeleteTask: (id: string) => void;
  onTaskState: (id: string, checked: boolean) => void;
  onNumberTasksCreated: (deleted: boolean) => void;
  onNumberTaskCompleted: (isCompleted: boolean) => void;
}
export function Task({
  Task,
  onDeleteTask,
  onTaskState,
  onNumberTasksCreated,
  onNumberTaskCompleted,
}: Props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(Task.id);
    onNumberTasksCreated(true);
  }

  function handleTask(id: string, checked: boolean) {
    onTaskState(id, checked);
  }

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;

    setIsChecked(isChecked);
    handleTask(Task.id, isChecked);
    onNumberTaskCompleted(isChecked);
  }

  return (
    <div className={s.task}>
      <label className={s.checkbox}>
        <input
          type="checkbox"
          className={s.checkboxInput}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={s.checkboxInner}></span>
      </label>
      <span className={Task.isTaskCompleted ? s.contentCompleted : s.content}>
        {Task.content}
      </span>
      <Trash className={s.deleteButton} size={24} onClick={handleDeleteTask} />
    </div>
  );
}
