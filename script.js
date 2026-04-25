function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
  
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-260px"; // cerrar
    } else {
      sidebar.style.left = "0px"; // abrir
    }
  }
  document.addEventListener("click", function(e) {
    let sidebar = document.getElementById("sidebar");
    let menuBtn = document.querySelector(".menu-btn");
  
    // si el click NO fue en el menú ni en el botón
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.style.left = "-260px";
    }
  });

  function mostrar(seccion) {
    document.querySelectorAll("section").forEach(sec => {
      sec.classList.remove("active");
    });
  
    document.getElementById(seccion).classList.add("active");
  
    // cerrar menú automáticamente
    document.getElementById("sidebar").style.left = "-250px";
  }
  function crearCorazon() {
    const contenedor = document.querySelector("#intro .hearts");
  
    // LIMITE DE CORAZONES
    if (contenedor.children.length > 15) return;
  
    const heart = document.createElement("div");
    heart.classList.add("heart");
  
    heart.style.left = Math.random() * 100 + "vw";
  
    let duracion = 6 + Math.random() * 2;
    heart.style.animationDuration = duracion + "s";
  
    heart.addEventListener("click", explotarCorazon);
  
    contenedor.appendChild(heart);
  
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
  function explotarCorazon(e) {
    e.stopPropagation(); // evita conflictos
  
    const rect = e.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
  
    const cantidad = 20;
  
    for (let i = 0; i < cantidad; i++) {
      const spark = document.createElement("div");
      spark.classList.add("spark");
  
      const offsetX = (Math.random() - 0.5) * 120 + "px";
      const offsetY = (Math.random() - 0.5) * 120 + "px";
  
      spark.style.setProperty("--x", offsetX);
      spark.style.setProperty("--y", offsetY);
  
      spark.style.left = x + "px";
      spark.style.top = y + "px";
  
      document.body.appendChild(spark);
  
      setTimeout(() => spark.remove(), 600);
    }
  
    // eliminar corazón al explotar
    e.target.remove();
  }

  
  setInterval(crearCorazon, 1500);
  // TEXTO INTRO
const texto = "Tengo algo especial para ti...";
let i = 0;

function escribir() {
  if (i < texto.length) {
    document.getElementById("textoIntro").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribir, 50);
  }
}

escribir();

// ENTRAR A LA PÁGINA
function entrar() {
    const intro = document.getElementById("intro");
  
    // animación de salida
    intro.style.transform = "scale(1.2)";
    intro.style.opacity = "0";
  
    setTimeout(() => {
        intro.style.display = "none";
      
        // 👇 ESTA ES LA PARTE IMPORTANTE
        document.querySelector(".content").classList.add("show");
      
      }, 600);
  }
  