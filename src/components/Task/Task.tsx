import s from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";

export function Task() {
  return (
    <div className={s.task}>
      <label className={s.checkbox}>
        <input type="checkbox" className={s.checkboxInput} />
        <span className={s.checkboxInner}></span>
      </label>
      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>
      <Trash className={s.deleteButton} size={24} />
    </div>
  );
}
