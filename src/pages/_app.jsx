import App from "@reejs/react/app";
import useDarkMode from "use-dark-mode";
import { getCookie } from 'hono/cookie'
export default function (props) {
  const theme = getCookie(props.children.props.c, 'theme');
  props.children.props.c.theme = theme;
  const darkMode = useDarkMode(theme == "dark" ? true : false, { classNameDark: "dark" });
  //seperate children from props
  return <App className={`${darkMode.value ? 'dark' : ''} transition-all duration-500`}
    {...props}
  >
    {props.children}
  </App>;
}