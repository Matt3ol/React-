import { Hello } from "./Hello";
import { createRoot } from "react-dom/client";

const helloElement = <Hello />;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(helloElement);
