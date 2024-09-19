const productos = [
  {
    nombre: "Tablet Samsung Galaxy Tab A7 Silver",
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
  },
  {
    nombre: "Tablet Acer 10” 64GB 4GB Android 12 ICONIA Tab M10 Silver",
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
  },
  {
    nombre: "Tablet Lenovo Yoga Tab 13 OctaCore 8GB 128GB",
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
  },
  {
    nombre:
      'Notebook Samsung 15.6" Intel Core i5 10 Núcleos 512GB 8GB Galaxy Book3 Silver',
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
  },
  {
    nombre: 'Notebook HP Core Ultra 5 14" 8GB 512GB SSD',
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
  },
  {
    nombre: "Notebook Acer 15,6” AMD Ryzen 5 8GB 256GB SSD Aspire 3",
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
  },
];
