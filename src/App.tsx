import s from "./App.module.css";
import { Header } from "./components/Header/Header";
import toDoListLogo from "./assets/logo.svg";
import { PlusCircle } from "@phosphor-icons/react";
import "./global.css";
import { TaskProps, Tasks } from "./components/Tasks/Tasks";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskText, setNewTaskText] = useState("");
  const [numberTasksCreated, setNumberTasksCreated] = useState<number>(0);
  const [numberTasksCompleted, setNumberTasksCompleted] = useState<number>(0);

  function handleNumberTasksCreated(deleted: boolean) {
    setNumberTasksCreated((state) => {
      return deleted ? state - 1 : state + 1;
    });
  }

  function handleNumberTasksCompleted(IsCompleted: boolean) {
    setNumberTasksCompleted((state) => {
      return IsCompleted ? state + 1 : state - 1;
    });
  }

  function deleteTask(id: string) {
    const tasksWithoutDeleted = tasks?.filter((task) => {
      return task.id != id;
    });

    setTasks(tasksWithoutDeleted);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    const newTask: TaskProps = {
      id: uuidv4(),
      content: taskText,
      isTaskCompleted: false,
    };

    setTasks([...tasks, newTask]);

    setNewTaskText("");

    handleNumberTasksCreated(false);
  }

  function handleTaskState(id: string, checked: boolean) {
    const tasksWithModifiedBasedOnId = tasks.map((task) => {
      if (task.id === id) {
        task.isTaskCompleted = checked;
      }
      return task;
    });

    setTasks(tasksWithModifiedBasedOnId);
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  return (
    <div>
      <Header src={toDoListLogo} />

      <main>
        <div className={s.form}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={taskText}
            onChange={handleNewTaskTextChange}
          />
          <button type="submit" onClick={handleCreateTask}>
            <span>Criar</span> <PlusCircle size={18} />
          </button>
        </div>

        <Tasks
          tasks={tasks}
          onDeleteTask={deleteTask}
          onTaskState={handleTaskState}
          numberTasksCompleted={numberTasksCompleted}
          numberTasksCreated={numberTasksCreated}
          onNumberTaskCreated={handleNumberTasksCreated}
          onNumberTaskCompleted={handleNumberTasksCompleted}
        />
      </main>
    </div>
  );
}
