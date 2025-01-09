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
    };

    console.log(newTask);

    setTasks([...tasks, newTask]);

    setNewTaskText("");
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

        <Tasks tasks={tasks} onDeleteTask={deleteTask} />
      </main>
    </div>
  );
}
