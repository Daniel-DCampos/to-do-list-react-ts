import s from "./App.module.css";
import { Header } from "./components/Header/Header";
import toDoListLogo from "./assets/logo.svg";
import { PlusCircle } from "@phosphor-icons/react";
import "./global.css";

export default function App() {
  return (
    <div>
      <Header src={toDoListLogo} />

      <main className={s.main}>
        <div className={s.form}>
          <input placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            <span>Criar</span> <PlusCircle size={18} />
          </button>
        </div>
      </main>
    </div>
  );
}
