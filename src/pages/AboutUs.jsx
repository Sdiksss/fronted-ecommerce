import React from 'react';
import './styles/AboutUs.css';

const categorias = [
  { id: 1, nombre: 'Carga y energía', descripcion: 'Cargadores rápidos, power banks y cables certificados.' },
  { id: 2, nombre: 'Audio', descripcion: 'Audífonos, parlantes y micrófonos para trabajar, jugar y crear.' },
  { id: 3, nombre: 'Protección', descripcion: 'Fundas, láminas y estuches para celulares, tablets y laptops.' },
  { id: 4, nombre: 'Gaming', descripcion: 'Mandos, teclados, mouse y soportes para tu setup.' },
  { id: 5, nombre: 'Hogar inteligente', descripcion: 'Enchufes, focos y cámaras que se controlan desde el celular.' },
  { id: 6, nombre: 'Almacenamiento', descripcion: 'Memorias, discos externos y lectores de tarjetas.' },
];

const valores = [
  { id: 1, titulo: 'Probamos antes de vender', texto: 'Cada producto pasa por nuestras manos. Si no lo usaríamos, no está en el catálogo.' },
  { id: 2, titulo: 'Garantía por escrito', texto: 'Todos los accesorios incluyen garantía. Si falla, lo cambiamos sin discusiones.' },
  { id: 3, titulo: 'Precios claros', texto: 'El precio que ves es el que pagas. Sin cargos ocultos ni letras pequeñas.' },
  { id: 4, titulo: 'Atención que responde', texto: 'Escríbenos por WhatsApp y te contesta una persona, con nombre y con tiempo para ayudarte.' },
];

const historia = [
  { anio: '2019', texto: 'Empezamos vendiendo cables y fundas desde un pequeño stand.' },
  { anio: '2021', texto: 'Abrimos la tienda online y comenzamos a enviar a todo el país.' },
  { anio: '2023', texto: 'Sumamos audio, gaming y hogar inteligente al catálogo.' },
  { anio: '2026', texto: 'Hoy atendemos a miles de clientes y seguimos probando cada producto.' },
];

export default function AboutUs() {
  return (
    <div className="about-page">
      <header className="about-hero">
        <h1 className="about-hero__title">
          Accesorios tecnológicos que funcionan, de verdad.
        </h1>
        <p className="about-hero__text">
          Somos una tienda de accesorios para celulares, computadoras, audio y gaming.
          Seleccionamos productos confiables para que no compres dos veces lo mismo.
        </p>
        <div className="about-hero__actions">
          <a href="/tienda" className="btn btn--primary">Ver productos</a>
          <a href="/contacto" className="btn btn--ghost">Hablar con nosotros</a>
        </div>
      </header>

      <section className="about-story">
        <div className="about-story__intro">
          <h2 className="about-heading">Quiénes somos</h2>
          <p className="about-paragraph">
            Todo empezó con un cable que dejó de cargar a la semana de comprarlo.
            Nos cansamos de los accesorios que prometen mucho y duran poco, así que
            decidimos armar la tienda que nos hubiera gustado encontrar.
          </p>
          <p className="about-paragraph">
            Hoy trabajamos directamente con proveedores verificados, revisamos cada lote
            y explicamos en lenguaje simple qué hace cada producto y para quién sirve.
          </p>
        </div>

        <ol className="timeline">
          {historia.map((hito) => (
            <li key={hito.anio} className="timeline__item">
              <span className="timeline__year">{hito.anio}</span>
              <p className="timeline__text">{hito.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-categories">
        <h2 className="about-heading">Lo que encontrarás</h2>
        <div className="categories-grid">
          {categorias.map((cat) => (
            <article key={cat.id} className="category-card">
              <h3 className="category-card__name">{cat.nombre}</h3>
              <p className="category-card__desc">{cat.descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-values">
        <h2 className="about-heading">Nuestra forma de trabajar</h2>
        <dl className="values-list">
          {valores.map((valor) => (
            <div key={valor.id} className="values-list__row">
              <dt className="values-list__title">{valor.titulo}</dt>
              <dd className="values-list__text">{valor.texto}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="about-cta">
        <h2 className="about-cta__title">¿No sabes cuál elegir?</h2>
        <p className="about-cta__text">
          Cuéntanos qué dispositivo tienes y para qué lo usas. Te recomendamos el accesorio justo.
        </p>
        <a href="/contacto" className="btn btn--light">Pedir recomendación</a>
      </section>

      <footer className="about-footer">
        <p>© 2026 Tu Tienda Tech. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}