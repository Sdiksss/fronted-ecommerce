
import { useState, useEffect } from "react"
import "./styles/MainSlider.css"

const MainSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Bienvenido a TemuStore",
      subtitle: "Tecnología de Última Generación",
      description: "Encuentra los mejores productos al mejor precio con garantía y envío gratis.",
      image: "/placeholder.svg?height=600&width=1200&text=Technology",
      cta: "Ver Productos",
      ctaLink: "/productos",
      badge: "Nuevo",
      gradientClass: "gradient-blue-purple",
    },
    {
      id: 2,
      title: "Ofertas Semanales",
      subtitle: "Hasta 50% de Descuento",
      description: "Descuentos increíbles en laptops, smartphones, tablets y accesorios premium.",
      image: "/placeholder.svg?height=600&width=1200&text=Laptop+Deals",
      cta: "Ver Ofertas",
      ctaLink: "/ofertas",
      badge: "Oferta",
      gradientClass: "gradient-red-orange",
    },
    {
      id: 3,
      title: "Nuevos Lanzamientos",
      subtitle: "Sé el Primero en Tenerlo",
      description: "Lo último en innovación tecnológica. Pre-ordena ahora y recibe beneficios exclusivos.",
      image: "/placeholder.svg?height=600&width=1200&text=Innovation",
      cta: "Explorar",
      ctaLink: "/novedades",
      badge: "Exclusivo",
      gradientClass: "gradient-green-teal",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div className="main-slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div key={slide.id} className={`slide ${index === currentIndex ? "active" : ""}`}>
          {/* Background Image */}
          <div className="slide-background" style={{ backgroundImage: `url(${slide.image})` }} />

          {/* Gradient Overlay */}
          <div className={`gradient-overlay ${slide.gradientClass}`} />

          {/* Content */}
          <div className="slide-content">
            <div className="content-wrapper">
              {/* Badge */}
              <div className="slide-badge">
                <svg className="badge-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{slide.badge}</span>
              </div>

              {/* Subtitle */}
              <p className="slide-subtitle">{slide.subtitle}</p>

              {/* Title */}
              <h1 className="slide-title">{slide.title}</h1>

              {/* Description */}
              <p className="slide-description">{slide.description}</p>

              {/* CTA Buttons */}
              {/* <div className="cta-container">
                <a href={slide.ctaLink} className="cta-primary">
                  <svg className="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  {slide.cta}
                </a>

                <button className="cta-secondary">
                  <svg className="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Más Info
                </button>
              </div> */}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="nav-btn nav-btn-left" aria-label="Slide anterior">
        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button onClick={nextSlide} className="nav-btn nav-btn-right" aria-label="Slide siguiente">
        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${((currentIndex + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

export default MainSlider
