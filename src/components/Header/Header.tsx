import s from "./Header.module.css";
import { ImgHTMLAttributes } from "react";

export function Header({ src }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <header className={s.header}>
      <img src={src} className={s.logo}/>
    </header>
  )
}
