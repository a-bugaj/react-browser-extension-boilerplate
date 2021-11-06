import ReactDOM from "react-dom";
import { Content } from "@/containers";

const div = document.createElement("div");
div.setAttribute("id", `ReactCrossBrowserExtensionContent-${Math.random()}`);
const html = document.getElementsByTagName("html")[0];
const preparedElement = html.appendChild(div);

ReactDOM.render(<Content />, preparedElement);
