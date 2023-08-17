// components/ThemeSwitcher.tsx
import useDarkMode from "use-dark-mode";
import React from "react";

export default function ThemeSwitcher(props) {
  let theme;
  if (props?.c?.theme) theme = props.c.theme;
  if (!theme) {
    //get system preference
    if (globalThis?.window?.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      theme = "dark";
  }
  const darkMode = useDarkMode(theme == "dark" ? true : false, { classNameDark: "dark", classNameLight: "light" });
  let toggle = () => {
    if (darkMode.value) {
      darkMode.disable();
      document.cookie = "theme=light; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    } else {
      darkMode.enable();
      document.cookie = "theme=dark; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    }
  };
  return (
    <div className="mx-6">
    <button className="rounded-lg bg-yellow-600 font-bold text-4xl px-6 py-4 dark:bg-indigo-900" onClick={toggle}>{!darkMode.value ? "🌞" : "🌙"}</button>
    </div>
  );
}