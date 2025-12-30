const simbolos = ["🍀", "🌳", "🌈", "❤️"];
const slots = [
    document.getElementById("slot1"),
    document.getElementById("slot2"),
    document.getElementById("slot3")
];

const boton = document.getElementById("spin");

// 🔴 CAMBIA AQUÍ TU LINK DE YOUTUBE
const videoGanador = "https://www.youtube.com/watch?v=cODJamc1jbg";

boton.addEventListener("click", () => {
    slots.forEach(slot => slot.classList.add("spin"));

    setTimeout(() => {
        slots.forEach(slot => {
            slot.classList.remove("spin");
            slot.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
        });

        comprobarVictoria();
    }, 1500);
});

function comprobarVictoria() {
    if (slots.every(slot => slot.textContent === "❤️")) {
        setTimeout(() => {
            window.location.href = videoGanador;
        }, 800);
    }
}
