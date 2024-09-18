const tablets = [
  {
    nombre: "Tablet Samsung Galaxy Tab A7 Silver",
    marca: "Samsung",
    codigo: "A7LT-T220",
    precio: 349999,
    imagenes: [
      "https://images.fravega.com/f300/b6deeaf6779e30c00576f690ca8cb9db.jpg.webp",
      "https://images.fravega.com/f300/374e95a50581b8dc78b2c0cfa1931240.jpg.webp",
      "https://images.fravega.com/f300/19a2264d6e7d2975d1f2cc75ab571347.jpg.webp",
    ],
    descripcion:
      "Posee sistema operativo Android y procesador Octa-Core que te permitirán mejorar el rendimiento. Además, gracias a la memoria interna de 32 GB podrás utilizar tus aplicaciones favoritas, manejar tus redes sociales, llevar tus juegos preferidos, guardar tu música y fotos. Incluso, tendrás la posibilidad de expandirla con una tarjeta microSD en hasta 1TB. Tablet 3 GB RAM Tablet 32 GB Tablet procesador Octa-Core",
  },
  {
    nombre: "Tablet Acer 10” 64GB 4GB Android 12 ICONIA Tab M10 Silver",
    marca: "Acer",
    codigo: "M10-11-K01Z",
    precio: 274999,
    imagenes: [
      "https://images.fravega.com/f300/40a4abb86396d962c04c4a90fb82c33b.jpg.webp",
      "https://images.fravega.com/f300/3a833222db8eb6efa74ef76ddd171f00.jpg.webp",
      "https://images.fravega.com/f300/d289a6ac6316af8519729887bf07920a.jpg.webp",
    ],
    descripcion:
      "La Tablet Acer soporta redes WLAN 802.11a/b/g/n/ac, asegurando una conexión inalámbrica rápida y estable. Además, cuenta con Bluetooth 5.0, permitiendo una conexión eficiente con otros dispositivos compatibles. La tablet Acer ICONIA Tab M10 cuenta con una pantalla IPS de 10.1 pulgadas con tecnología IPS y resolución FHD. Tiene el procesador MediaTek M8183C Octa-Core. Cuenta con sistema operativo Android 12, brindando una interfaz moderna, segura y optimizada. Con 64GB de almacenamiento interno y 4GB de RAM.",
  },
  {
    nombre: "Tablet Lenovo Yoga Tab 13 OctaCore 8GB 128GB",
    marca: "Lenovo",
    codigo: "Yoga-Tab",
    precio: 799999,
    imagenes: [
      "https://images.fravega.com/f300/2fe6f8cae76e791b8d409fda3c254566.png.webp",
      "https://m.media-amazon.com/images/I/51V+sOeGZQL._AC_SX679_.jpg",
      "https://images.fravega.com/f300/10394343e6b8bcb1dfce5489577b04d8.png.webp",
    ],
    descripcion:
      "Tablet procesador Octa-Core. Ponla de pie, cuelga e inclina tu tablet con un soporte de acero inoxidable con una impresionante calidad de imagen 2K a través de Dolby Vision. Audio cinematográfico en movimiento con Dolby Atmos® con cuatro altavoces JBL. Obtén una mayor productividad con doble pantalla.Y el Lenovo Precision Pen 2 opcional (no incluido) es un regalo del cielo para los creadores, ya que te ofrece la destreza y la libertad para dibujar diseños directamente en la pantalla, tal y como lo harías en un bloc de dibujo.",
  },
];

const dibujarPantalla = (tablet) => {
  let container = document.getElementById("container");
  let div = document.createElement("div");
  div.className = "d-flex flex-wrap justify-content-center gap-3 row";

  div.innerHTML = `
        <div
          id="carouselExampleIndicators"
          class="carousel carousel-dark slide col-md"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner" id="imgs">
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>`;
  let imgs = div.querySelector("#imgs");
  tablet.imagenes.forEach((imagen, index) => {
    let div = document.createElement("div");
    div.className = `carousel-item ${index === 0 ? "active" : ""}`;
    let img = document.createElement("img");
    img.src = imagen;
    img.className = "d-block w-100 img-thumbnail p-5 img-fluid";
    img.alt = "Imagen de la tablet";
    div.appendChild(img);
    imgs.appendChild(div);
  });
  div.innerHTML += `<div class="card col-lg">
          <div class="card-body d-flex flex-column justify-content-between">
            <h4 class="card-text text-body-secondary">${tablet.marca}</h4>
            <div>
              <h2 class="card-title">${tablet.nombre}</h2>
              <p class="card-text">
                <strong>Codigo</strong> <mark> ${tablet.codigo}</mark>
              </p>
            </div>

            <h3 class="card-title">$${tablet.precio}</h3>
            <div>
              <h4>Descripcion</h4>
              <p class="card-text">
                ${tablet.descripcion}
              </p>
            </div>
            <div class="d-grid">
              <a href="#" class="btn btn-primary btn-lg">Comprar</a>
            </div>
          </div>
        </div>`;
  container.appendChild(div);
};
