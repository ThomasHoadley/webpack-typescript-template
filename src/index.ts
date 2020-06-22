import "./sass/style.scss";
import { formData } from "./script/forms";

const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = formData(form);
	console.log(data);
});
