function toggleMenu() {
  let sidebar = document.getElementById("sidebar");
  sidebar.style.left = sidebar.style.left === "0px" ? "-260px" : "0px";
}

document.addEventListener("click", function(e) {
  let sidebar = document.getElementById("sidebar");
  let menuBtn = document.querySelector(".menu-btn");

  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.style.left = "-260px";
  }
});

function mostrar(seccion) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(seccion).classList.add("active");

  // 👇 cerrar menú automáticamente
  document.getElementById("sidebar").style.left = "-260px";
}

// 💖 CORAZONES
function crearCorazon() {
  const contenedor = document.getElementById("intro").style.display !== "none"
    ? document.querySelector("#intro .hearts")
    : document.getElementById("hearts-global");

  if (contenedor.children.length > 12) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";

  let duracion = 6 + Math.random() * 2;
  heart.style.animationDuration = duracion + "s";

  heart.addEventListener("click", explotarCorazon);

  contenedor.appendChild(heart);

  heart.addEventListener("animationend", () => heart.remove());
}

function explotarCorazon(e) {
  e.stopPropagation();

  const rect = e.target.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  for (let i = 0; i < 20; i++) {
    const spark = document.createElement("div");
    spark.classList.add("spark");

    spark.style.setProperty("--x", (Math.random()-0.5)*120+"px");
    spark.style.setProperty("--y", (Math.random()-0.5)*120+"px");

    spark.style.left = x+"px";
    spark.style.top = y+"px";

    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 600);
  }

  e.target.remove();
}

setInterval(crearCorazon, 1500);

// ✍️ TEXTO INTRO
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

// 🎬 ENTRAR
function entrar() {
  const intro = document.getElementById("intro");
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    document.querySelector(".content").classList.add("show");
  }, 500);
}

// 💌 CARTAS
function abrirCarta(carta) {
  document.querySelectorAll(".carta").forEach(c => {
    if (c !== carta) c.classList.remove("abierta");
  });
  carta.classList.toggle("abierta");
}

// ⏳ CONTADOR
function actualizarContador() {
  const inicio = new Date("2026-02-18T00:00:00");
  const ahora = new Date();
  const diff = ahora - inicio;

  document.getElementById("dias").textContent = Math.floor(diff/(1000*60*60*24));
  document.getElementById("horas").textContent = Math.floor((diff/(1000*60*60))%24);
  document.getElementById("minutos").textContent = Math.floor((diff/(1000*60))%60);
  document.getElementById("segundos").textContent = Math.floor((diff/1000)%60);
}
setInterval(actualizarContador,1000);

// 💖 TE AMO REAL
function calcularTiempoReal() {
  const inicio = new Date(2026,1,18);
  const ahora = new Date();

  let años = ahora.getFullYear()-inicio.getFullYear();
  let meses = ahora.getMonth()-inicio.getMonth();
  let dias = ahora.getDate()-inicio.getDate();

  if(dias<0){
    meses--;
    dias += new Date(ahora.getFullYear(), ahora.getMonth(),0).getDate();
  }
  if(meses<0){
    años--;
    meses+=12;
  }

  document.getElementById("teamo").innerHTML =
  `Te amo desde hace ${años} años, ${meses} meses y ${dias} días 💖<br>Desde el 18 de febrero del 2026`;
}
setInterval(calcularTiempoReal,1000);

// 🖼 MODAL IMAGEN
function abrirImagen(img) {
  document.getElementById("imgGrande").src = img.src;
  document.getElementById("modal").classList.add("activo");
}

function cerrarModal() {
  document.getElementById("modal").classList.remove("activo");
}