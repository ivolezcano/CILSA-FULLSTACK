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
