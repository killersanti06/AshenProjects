<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>AshenProjects</title>

<style>

body{
    margin:0;
    font-family:Arial;
    background:#eaeaea;
}

/* HEADER */

header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 30px;
    border-bottom:3px solid black;
}

.logo{
    font-size:40px;
    color:#7ec8e3;
    font-weight:bold;
}

.icons{
    font-size:30px;
}

.icons span{
    margin-left:20px;
    cursor:pointer;
}

/* MAIN LAYOUT */

.container{
    display:grid;
    grid-template-columns:160px 1fr 140px;
    gap:20px;
    padding:20px;
}

/* LEFT MENU */

.menu{
    border:3px solid black;
    padding:10px;
    background:white;
}

.menu button{
    width:100%;
    padding:12px;
    margin:5px 0;
    border:2px solid black;
    background:white;
    cursor:pointer;
}

.menu button:hover{
    background:#ddd;
}

/* CENTER PANEL */

.main{
    border:3px solid black;
    height:400px;
    background:white;
    padding:20px;
}

/* RIGHT NEWS */

.news{
    border:3px solid black;
    height:300px;
    background:white;
    padding:10px;
}

/* BOTTOM AREA */

.bottom{
    grid-column:2;
    display:flex;
    gap:20px;
    margin-top:10px;
}

.bottom button{
    flex:1;
    height:30px;
    border:2px solid black;
}

/* RIGHT BOTTOM */

.right-bottom{
    display:flex;
    gap:10px;
    margin-top:10px;
}

.box{
    width:60px;
    height:60px;
    border:3px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:25px;
    background:white;
}

</style>
</head>

<body>

<header>
<div class="logo">AshenProjects</div>

<div class="icons">
<span>??</span>
<span>?</span>
</div>
</header>

<div class="container">

<div class="menu">
<button onclick="mostrarCategoria('juegos')">Juegos</button>
<button onclick="mostrarCategoria('programas')">Programas</button>
<button onclick="mostrarCategoria('minecraft')">Minecraft</button>
<button onclick="mostrarCategoria('extra')">Extra</button>
</div>

<div class="main" id="contenido">
<h2>Bienvenido</h2>
<p>Selecciona una categoría en el menú.</p>
</div>

<div>
<div class="news">
<b>Noticias</b>
</div>

<div class="right-bottom">
<div class="box">??</div>
<div class="box">??</div>
</div>
</div>

<div class="bottom">
<button></button>
<button></button>
<button></button>
</div>

</div>

<script>

function mostrarCategoria(categoria){

let contenido = document.getElementById("contenido");

if(categoria === "juegos"){
contenido.innerHTML = `
<h2>Juegos</h2>
<p>Aquí aparecerán tus juegos.</p>
<ul>
<li>Juego 1</li>
<li>Juego 2</li>
<li>Juego 3</li>
</ul>
`;
}

if(categoria === "programas"){
contenido.innerHTML = `
<h2>Programas</h2>
<p>Aquí aparecerán tus programas.</p>
<ul>
<li>Programa 1</li>
<li>Programa 2</li>
</ul>
`;
}

if(categoria === "minecraft"){
contenido.innerHTML = `
<h2>Minecraft</h2>
<p>Mods, mapas y herramientas de Minecraft.</p>
<ul>
<li>Mod 1</li>
<li>Mapa 1</li>
</ul>
`;
}

if(categoria === "extra"){
contenido.innerHTML = `
<h2>Extra</h2>
<p>Contenido adicional.</p>
<ul>
<li>Wallpaper</li>
<li>Herramientas</li>
</ul>
`;
}

}

</script>

</body>
</html>