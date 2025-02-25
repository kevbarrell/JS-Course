let langCode = prompt("Select language (es, de, en, fr):");

let message;
if (langCode === "es") {
    message = "Hola Mundo";
} else if (langCode === "de") {
    message = "Hallo Welt";
} else if (langCode === "fr") {
    message = "Bonjour le Monde";
} else {
    message = "Hello World";
}

alert(`Hello World translated in ${langCode === "es" ? "Spanish" : langCode === "de" ? "German" : langCode === "fr" ? "French" : "English"} is: ${message}`);
