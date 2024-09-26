const productos = [
  {
    nombre: "Tablet Samsung Galaxy Tab A7 Silver",
    categoria: "Tablet",
    marca: "Samsung",
    codigo: "A7LT-T220",
    precio: 349999,
    destacado: true,
    imagenes: [
      "https://images.fravega.com/f300/b6deeaf6779e30c00576f690ca8cb9db.jpg.webp",
      "https://images.fravega.com/f300/374e95a50581b8dc78b2c0cfa1931240.jpg.webp",
      "https://images.fravega.com/f300/19a2264d6e7d2975d1f2cc75ab571347.jpg.webp",
    ],
    descripcion:
      "Posee sistema operativo Android y procesador Octa-Core que te permitirán mejorar el rendimiento. Además, gracias a la memoria interna de 32 GB podrás utilizar tus aplicaciones favoritas, manejar tus redes sociales, llevar tus juegos preferidos, guardar tu música y fotos. Incluso, tendrás la posibilidad de expandirla con una tarjeta microSD en hasta 1TB. Tablet 3 GB RAM Tablet 32 GB Tablet procesador Octa-Core",
    ruta: "/TecnoStore/assets/pages/tablets/tablet-A7LT-T220.html",
  },
  {
    nombre: "Tablet Acer 10” 64GB 4GB Android 12 ICONIA Tab M10 Silver",
    categoria: "Tablet",
    marca: "Acer",
    codigo: "M10-11-K01Z",
    precio: 274999,
    destacado: false,
    imagenes: [
      "https://images.fravega.com/f300/40a4abb86396d962c04c4a90fb82c33b.jpg.webp",
      "https://images.fravega.com/f300/3a833222db8eb6efa74ef76ddd171f00.jpg.webp",
      "https://images.fravega.com/f300/d289a6ac6316af8519729887bf07920a.jpg.webp",
    ],
    descripcion:
      "La Tablet Acer soporta redes WLAN 802.11a/b/g/n/ac, asegurando una conexión inalámbrica rápida y estable. Además, cuenta con Bluetooth 5.0, permitiendo una conexión eficiente con otros dispositivos compatibles. La tablet Acer ICONIA Tab M10 cuenta con una pantalla IPS de 10.1 pulgadas con tecnología IPS y resolución FHD. Tiene el procesador MediaTek M8183C Octa-Core. Cuenta con sistema operativo Android 12, brindando una interfaz moderna, segura y optimizada. Con 64GB de almacenamiento interno y 4GB de RAM.",
    ruta: "/TecnoStore/assets/pages/tablets/tablet-M10-11-K01Z.html",
  },
  {
    nombre: "Tablet Lenovo Yoga Tab 13 OctaCore 8GB 128GB",
    categoria: "Tablet",
    marca: "Lenovo",
    codigo: "Yoga-Tab",
    precio: 799999,
    destacado: true,
    imagenes: [
      "https://images.fravega.com/f300/2fe6f8cae76e791b8d409fda3c254566.png.webp",
      "https://m.media-amazon.com/images/I/51V+sOeGZQL._AC_SX679_.jpg",
      "https://images.fravega.com/f300/10394343e6b8bcb1dfce5489577b04d8.png.webp",
    ],
    descripcion:
      "Tablet procesador Octa-Core. Ponla de pie, cuelga e inclina tu tablet con un soporte de acero inoxidable con una impresionante calidad de imagen 2K a través de Dolby Vision. Audio cinematográfico en movimiento con Dolby Atmos® con cuatro altavoces JBL. Obtén una mayor productividad con doble pantalla.Y el Lenovo Precision Pen 2 opcional (no incluido) es un regalo del cielo para los creadores, ya que te ofrece la destreza y la libertad para dibujar diseños directamente en la pantalla, tal y como lo harías en un bloc de dibujo.",
    ruta: "/TecnoStore/assets/pages/tablets/tablet-Yoga-Tab.html",
  },
  {
    nombre:
      'Notebook Samsung 15.6" Intel Core i5 10 Núcleos 512GB 8GB Galaxy Book3 Silver',
    categoria: "Notebook",
    marca: "Samsung",
    codigo: "NP750XFG-KB2A",
    precio: 1299999,
    destacado: true,
    imagenes: [
      "https://images.fravega.com/f300/6a74c2c706cd166957e58b33d6c1e311.png.webp",
      "https://images.fravega.com/f300/e232c362963ee10936f5355e30aac34e.png.webp",
      "https://images.fravega.com/f300/44992f6ace94937f111b23eddea23601.png.webp",
      "https://images.fravega.com/f300/091572880daaaa7a165cff02d0c6d5bd.png.webp",
    ],
    descripcion:
      "La notebook Samsung Cuenta con un diseño delgado, un peso de menos de 1,6 kg y una pantalla de 15,6 pulgadas y resolución FHD (1920 x 1080). Su memoria de 8 GB LPDDR, 512 GB de almacenamiento SSD y el procesador Intel Core i5 te brindarán una gran eficiencia y velocidad. Cuenta con puertos 2 USB tipo C y 2 USB 3.2, 1 HDMI y una  batería de larga duración de 54 Wh, que ofrece hasta 12 horas de autonomía, podrás usar la notebook durante todo el día sin tener que preocuparte.",
    ruta: "/TecnoStore/assets/pages/notebooks/notebook-NP750XFG-KB2A.html",
  },
  {
    nombre: 'Notebook HP Core Ultra 5 14" 8GB 512GB SSD',
    categoria: "Notebook",
    marca: "HP",
    codigo: "14-EP1002LA",
    precio: 1399999,
    destacado: true,
    imagenes: [
      "https://images.fravega.com/f300/e4ba035aec6e4ac51263711ec7e7c13f.jpg.webp",
      "https://images.fravega.com/f300/c3c0966af7318d899dd8871b0c814f51.jpg.webp",
      "https://images.fravega.com/f300/706043b4472bd406046b6c533f48cb9d.jpg.webp",
      "https://images.fravega.com/f300/eefae7f06d59d5125e269c2989aac538.jpg.webp",
    ],
    descripcion:
      "Combinando su procesador Intel Core Ultra 5 con la memoria RAM de 8GB y el almacenamiento SSD de 512GB, la HP 14-EP1002LA ofrece un gran desempeño. Con una pantalla de 14 pulgadas y su resolución FHD, podrás usar la notebook HP para trabajar o estudiar con comodidad. Con su batería de 3 celdas y 41 Wh podrás llevar tu Notebook HP 14-EP1002LA con vos a todos lados y mantener tu productividad al máximo ya que la duración de esta batería es de hasta 8 horas y 45 minutos. Viene con el sistema operativo Windows 11",
    ruta: "/TecnoStore/assets/pages/notebooks/notebook-14-EP1002LA.html",
  },
  {
    nombre: "Notebook Acer 15,6” AMD Ryzen 5 8GB 256GB SSD Aspire 3",
    categoria: "Notebook",
    marca: "Acer",
    codigo: "A315-24P-R4JA",
    precio: 999999,
    destacado: false,
    imagenes: [
      "https://images.fravega.com/f300/40a0dac3acabb2f5cfa724ba669cbe7d.jpg.webp",
      "https://images.fravega.com/f300/f922626c8f0c3b2bbfbcf77eb29c1811.jpg.webp",
      "https://images.fravega.com/f300/16e0dd1409a4055e6f4aaf0aec5cd38d.jpg.webp",
      "https://images.fravega.com/f300/3b91cd74c4ff9df81e9737d274d577ff.jpg.webp",
    ],
    descripcion:
      "La notebook Acer Aspire 3 cuenta con una pantalla de 15.6 pulgadas con resolución FHD. Está equipada con un procesador AMD Ryzen 5, capaz de manejar tareas multitarea, navegación web, reproducción de videos, y más, con gran fluidez. La Acer Aspire 3 posee una batería de 40 Wh, capaz de ofrecer hasta 11 horas de uso continuo. Viene con un almacenamiento SSD de 256GB que garantiza tiempos de carga rápidos y cuenta con 8GB de memoria SDRAM, lo que permite una multitarea fluida y un rendimiento ágil.",
    ruta: "/TecnoStore/assets/pages/notebooks/notebook-A315-24P-R4JA.html",
  },
  {
    nombre: "Smartphone Samsung Galaxy S23 Ultra 512GB 12GB Phantom Black",
    categoria: "Smartphone",
    marca: "Samsung",
    codigo: "S23U-512GB",
    precio: 4899999,
    destacado: false,
    imagenes: [
      "https://http2.mlstatic.com/D_NQ_NP_730886-MLU79072303759_092024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_980971-MLU76369468128_052024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_770365-MLU76369586574_052024-O.webp",
    ],
    descripcion:
      "El Samsung Galaxy S23 Ultra cuenta con pantalla Dynamic AMOLED 2X de 6,8 pulgadas con resolución QHD+ y frecuencia de actualización de 120 Hz. Procesador Snapdragon 8 Gen 2, almacenamiento de 512GB, 12GB de RAM y cámara principal de 200 MP. Batería de 5000 mAh y sistema operativo Android 13. Además, cuenta con un S-Pen integrado.",
    ruta: "/TecnoStore/assets/pages/smartphones/smartphone-S23U-512GB.html",
  },
  {
    nombre: "Smartphone Apple iPhone 15 Pro Max 256GB Titanio Negro",
    categoria: "Smartphone",
    marca: "Apple",
    codigo: "iPhone15PM-256GB",
    precio: 7999999,
    destacado: true,
    imagenes: [
      "https://http2.mlstatic.com/D_NQ_NP_768125-MLA71783090116_092023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_656811-MLA74808089011_022024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_998337-MLA74805955085_022024-O.webp",
    ],
    descripcion:
      "El Apple iPhone 15 Pro Max cuenta con una pantalla Super Retina XDR OLED de 6,7 pulgadas, procesador A17 Pro, 256GB de almacenamiento, 8GB de RAM y cámara principal de 48 MP. Batería de larga duración con capacidad de 4852 mAh y sistema operativo iOS 17. Construido en titanio, más resistente y ligero.",
    ruta: "/TecnoStore/assets/pages/smartphones/smartphone-iPhone15PM-256GB.html",
  },
  {
    nombre: "Smartphone Google Pixel 8 Pro 128GB 12GB Snow",
    categoria: "Smartphone",
    marca: "Google",
    codigo: "Pixel8P-128GB",
    precio: 3299999,
    destacado: false,
    imagenes: [
      "https://http2.mlstatic.com/D_NQ_NP_758351-MLA77920876754_082024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_998992-MLA76806970306_062024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_795916-MLA76807235352_062024-O.webp",
    ],
    descripcion:
      "El Google Pixel 8 Pro cuenta con pantalla LTPO OLED de 6,7 pulgadas con resolución QHD+ y tasa de refresco adaptativa de 120 Hz. Procesador Tensor G3, 128GB de almacenamiento, 12GB de RAM y cámara principal de 50 MP. Batería de 5050 mAh y sistema operativo Android 14. Resistente al agua y al polvo con certificación IP68.",
    ruta: "/TecnoStore/assets/pages/smartphones/smartphone-Pixel8P-128GB.html",
  },
];

// Funcion que renderiza el listado de productos en productos.html
const container = document.querySelector('.productos-container');

function mostrarProductos(productos) {
  container.innerHTML = ''; // Limpia el contenido previo
  productos.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add('producto-card');

    card.innerHTML = `
      <a href="${producto.ruta}" class="card-link">
        <img src="${producto.imagenes[0]}" alt="${producto.nombre}">
        <div class="producto-info">
          <h3>${producto.nombre}</h3>
          <p class="precio">$${producto.precio.toLocaleString()}</p>
        </div>
      </a>
    `;

    container.appendChild(card);
  });
}

function filtrarProductos(categoria) {
  if (categoria === 'Mostrar todo') {
    mostrarProductos(productos);
  } else {
    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    mostrarProductos(productosFiltrados);
  }
}

// Mostrar todos los productos al cargar la página
mostrarProductos(productos);



