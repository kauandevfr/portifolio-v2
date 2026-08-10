import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Segunda camada: garante scroll no topo antes do React montar
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

createRoot(document.getElementById("root")!).render(<App />);
