import React, { useState, useEffect } from "react"
import "./styles/MainSlider.css"


const MainSlider = () => {



  const slides = [
    {
      id: 1,
      title: "Bienvenido a TechStore",
      subtitle: "Tecnología de Última Generación",
      description: "Encuentra los mejores productos al mejor precio.",
      image: "https://source.unsplash.com/1200x600/?technology",
      cta: "Ver Productos",
      ctaLink: "/",
    },
    {
      id: 2,
      title: "Ofertas Semanales",
      subtitle: "No te las pierdas",
      description: "Descuentos en laptops, smartphones y más.",
      image: "https://source.unsplash.com/1200x600/?laptop",
      cta: "Ver Ofertas",
      ctaLink: "/",
    },
    {
      id: 3,
      title: "Nuevos Lanzamientos",
      subtitle: "Sé el primero en tenerlo",
      description: "Lo último en innovación y tecnología.",
      image: "https://source.unsplash.com/1200x600/?innovation",
      cta: "Explorar",
      ctaLink: "/",
    },
  ]
  
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }
  
    useEffect(() => {
      const timer = setInterval(nextSlide, 5000)
      return () => clearInterval(timer)
    }, [])
  
  
    return (
      <div className="header-slider">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h3>{slide.subtitle}</h3>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <a href={slide.ctaLink} className="cta-btn">
                {slide.cta}
              </a>
            </div>
          </div>
        ))}
  
        <button className="nav-btn btn-left" onClick={prevSlide}>❮</button>
        <button className="nav-btn btn-right" onClick={nextSlide}>❯</button>
  
        <div className="indicators">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    )
}

export default MainSlider
