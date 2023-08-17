import ThemeSwitcher from "../components/ThemeToggle";

export default function ({ c }) {
  return <div className="text-slate-800 dark:text-slate-200 bg-slate-200 dark:bg-black min-h-screen">
    <p className="text-center text-6xl font-bold">Change Theme</p>
    <ThemeSwitcher c={c} /></div>
}

export let metadata = {
  title: "Theme Tester",
};