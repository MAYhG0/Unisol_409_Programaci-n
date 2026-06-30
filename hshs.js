const ciudades = [
  {
    nombre: "París",
    lugares: [
      { img: "imagenes/torre_eiffel.jpg", desc: "Torre Eiffel" },
      { img: "imagenes/louvre.jpg", desc: "Museo del Louvre" },
      { img: "imagenes/notre_dame.jpg", desc: "Catedral de Notre Dame" },
      { img: "imagenes/sacre_coeur.jpg", desc: "Basílica del Sagrado Corazón" },
      { img: "imagenes/puente_alexandre.jpg", desc: "Puente Alexandre III" }
    ]
  },
  {
    nombre: "Roma",
    lugares: [
      { img: "imagenes/coliseo.jpg", desc: "Coliseo Romano" },
      { img: "imagenes/fontana_trevi.jpg", desc: "Fontana di Trevi" },
      { img: "imagenes/vaticano.jpg", desc: "Ciudad del Vaticano" },
      { img: "imagenes/panteon.jpg", desc: "Panteón de Agripa" },
      { img: "imagenes/plaza_espana.jpg", desc: "Plaza de España" }
    ]
  },
  // ... Agregar las otras 8 ciudades con 5 lugares cada una
];

function mostrarCiudad(index) {
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = "";

  const ciudad = ciudades[index];
  const divCiudad = document.createElement("div");
  divCiudad.classList.add("ciudad", "active");

  const titulo = document.createElement("h2");
  titulo.textContent = `✈️ ${ciudad.nombre}`;
  divCiudad.appendChild(titulo);

  ciudad.lugares.forEach(lugar => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = lugar.img;
    img.alt = lugar.desc;

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = lugar.desc;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    divCiudad.appendChild(figure);
  });

  contenido.appendChild(divCiudad);
}
