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