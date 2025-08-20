function Marquet() {
    // check for dependencies are loaded inside window
    if (typeof window.potion === "undefined") {
        throw new Error("potion is not loaded");
    }
    if (typeof window.Bédédé === "undefined") {
        throw new Error("Bédédé is not loaded");
    }
    alert("hey");
}

export { Marquet as default };
