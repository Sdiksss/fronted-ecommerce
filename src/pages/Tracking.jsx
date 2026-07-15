import React, { useState } from 'react';
import './styles/Tracking.css';

export default function SavarxpressTracking() {
  const [confirmado, setConfirmado] = useState(null); // null, 'SI', 'NO', 'LOCAL'
  const [pasoActual, setPasoActual] = useState(3); 
  const [algoritmoEjecutado, setAlgoritmoEjecutado] = useState(false);
  const [optimizando, setOptimizando] = useState(false);
  const [idPaquete] = useState("TM-100PK-JU26-N110");

  const infoPaquete = {
    trackingID: "TM-100PK-JU26-N110",
    plataformaOrigen: "TEMU - Comercio Electrónico",
    fechaLlegadaAlmacen: "15/07/2026 - 06:45 AM",
    operadorRecepcion: "Auditor: Ruben Laime (GCC-2026)",
    pesoRegistrado: "1.45 Kg",
    remitente: "Temu Logistics Hub International",
    estadoFisico: "Verificado (Check-Sheet Óptimo)"
  };

  const pasosLogistica = [
    { id: 1, titulo: "Llegada de Lote Temu & Registro SQL", descripcion: "Lote ingresado en la base de datos PostgreSQL.", icono: "💾" },
    { id: 2, titulo: "Validación de Datos del Cliente", descripcion: "Filtro automatizado de dirección aprobado.", icono: "🔍" },
    { id: 3, titulo: "Ventana de Confirmación WhatsApp (Límite 20:00h)", descripcion: "Respuesta del usuario validada por Webhook.", icono: "💬" },
    { id: 4, titulo: "Geocodificación y Matriz de Distancias", descripcion: "Conversión a coordenadas GPS de precisión.", icono: "📍" },
    { id: 5, titulo: "Algoritmo de Ruteo Crítico (OR-Tools)", descripcion: algoritmoEjecutado ? "¡Ruta reducida respetando sentidos de calles!" : "Análisis de sentidos de tráfico (Grafo Dirigido).", icono: "🚚" },
    { id: 6, titulo: "Entrega Finalizada / Cierre de Operación", descripcion: "Paquete en destino final con éxito.", icono: "📦" }
  ];

  const handleRespuestaCliente = (opcion) => {
    setConfirmado(opcion);
    if (opcion === 'SI') {
      setPasoActual(4);
    } else {
      setPasoActual(6);
    }
  };

  const ejecutarAlgoritmo = () => {
    setOptimizando(true);
    setTimeout(() => {
      setOptimizando(false);
      setAlgoritmoEjecutado(true);
      setPasoActual(5);
    }, 2000);
  };

  const simularSiguientePaso = () => {
    if (pasoActual < 6) {
      setPasoActual(pasoActual + 1);
    }
  };

  const reiniciarFlujo = () => {
    setConfirmado(null);
    setAlgoritmoEjecutado(false);
    setPasoActual(3);
  };

  // Definición de las flechas de sentido para la cuadrícula 8x8 (simulación visual)
  const callesHorizontales = [
    { id: 1, top: '10%', sentido: '→', clase: 'sentido-derecha' },
    { id: 2, top: '22%', sentido: '←', clase: 'sentido-izquierda' },
    { id: 3, top: '34%', sentido: '→', clase: 'sentido-derecha' },
    { id: 4, top: '46%', sentido: '⇄', clase: 'sentido-doble' },
    { id: 5, top: '58%', sentido: '←', clase: 'sentido-izquierda' },
    { id: 6, top: '70%', sentido: '→', clase: 'sentido-derecha' },
    { id: 7, top: '82%', sentido: '←', clase: 'sentido-izquierda' },
    { id: 8, top: '94%', sentido: '⇄', clase: 'sentido-doble' },
  ];

  const callesVerticales = [
    { id: 1, left: '10%', sentido: '↓', clase: 'sentido-abajo' },
    { id: 2, left: '22%', sentido: '↑', clase: 'sentido-arriba' },
    { id: 3, left: '34%', sentido: '↓', clase: 'sentido-abajo' },
    { id: 4, left: '46%', sentido: '⇅', clase: 'sentido-v-doble' },
    { id: 5, left: '58%', sentido: '↑', clase: 'sentido-arriba' },
    { id: 6, left: '70%', sentido: '↓', clase: 'sentido-abajo' },
    { id: 7, left: '82%', sentido: '↑', clase: 'sentido-arriba' },
    { id: 8, left: '94%', sentido: '⇅', clase: 'sentido-v-doble' },
  ];

  return (
    <div className="tracking-page-container">
      {/* Header */}
      <header className="tracking-header">
        <div className="header-text">
          <span className="subtitle-brand">Savarxpress Express Delivery</span>
          <h1 className="title-page">Centro de Monitoreo y Rastreo Satelital</h1>
          <p className="subtitle-desc font-12">Simulador de Grafo Dirigido ($8 \times 8$). Cálculo de trayectoria óptima respetando sentidos de vía únicos.</p>
        </div>
        {confirmado === 'SI' && (
          <div className="control-buttons-wrapper">
            {!algoritmoEjecutado && !optimizando && (
              <button className="btn-algorithm-run" onClick={ejecutarAlgoritmo}>
                Optimizar Ruta (OR-Tools) ⚡
              </button>
            )}
            {algoritmoEjecutado && pasoActual < 6 && (
              <button className="btn-simulate" onClick={simularSiguientePaso}>
                Avanzar Entrega 🚚
              </button>
            )}
            <button className="btn-reset-tracking" onClick={reiniciarFlujo}>↻</button>
          </div>
        )}
      </header>

      {/* Ficha de Ingreso */}
      <section className="section-card package-manifest-card">
        <div className="card-header-manifest">
          <h2 className="manifest-title">📋 Ficha de Control e Ingreso de Paquete</h2>
          <span className="manifest-id-badge">{infoPaquete.trackingID}</span>
        </div>
        <div className="manifest-data-grid">
          <div className="manifest-item"><span>Origen:</span> <strong>{infoPaquete.plataformaOrigen}</strong></div>
          <div className="manifest-item"><span>Ingreso Almacén:</span> <strong>{infoPaquete.fechaLlegadaAlmacen}</strong></div>
          <div className="manifest-item"><span>Registrado Por:</span> <strong>{infoPaquete.operadorRecepcion}</strong></div>
          <div className="manifest-item"><span>Peso:</span> <strong>{infoPaquete.pesoRegistrado}</strong></div>
          <div className="manifest-item"><span>Remitente:</span> <strong>{infoPaquete.remitente}</strong></div>
          <div className="manifest-item"><span>Calidad:</span> <strong className="text-green-accent">{infoPaquete.estadoFisico}</strong></div>
        </div>
      </section>

      {/* Ventana de Confirmación WhatsApp */}
      {!confirmado && (
        <section className="section-card alert-window-card">
          <div className="alert-content-layout">
            <div className="alert-icon-bell">🔔</div>
            <div className="alert-text-wrapper">
              <span className="alert-tag-red">CONFIRMACIÓN REQUERIDA ANTES DE LAS 8:00 P.M.</span>
              <h2 className="alert-main-title">¿Desea programar su entrega para mañana?</h2>
              <p className="alert-description-text">
                El sistema estructurará la matriz de distribución respetando el diseño urbano de un solo sentido para evitar atascos y demoras críticas.
              </p>
              <div className="action-buttons-flex">
                <button className="btn-action btn-confirm" onClick={() => handleRespuestaCliente('SI')}>SÍ, recibir mañana</button>
                <button className="btn-action btn-reprogram" onClick={() => handleRespuestaCliente('NO')}>NO, reprogramar fecha</button>
                <button className="btn-action btn-local" onClick={() => handleRespuestaCliente('LOCAL')}>Recoger en local</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Panel Principal */}
      {confirmado && (
        <div className="tracking-main-layout">
          
          {/* SECCIÓN MAPA 8X8 */}
          <section className="map-card-section">
            <div className="card-header-map">
              <h2 className="card-title-light">
                {algoritmoEjecutado ? "🗺️ Grafo Dirigido 8x8: Ruta Óptima" : "🗺️ Grafo Dirigido 8x8: Trayectoria Convencional"}
              </h2>
              <div className={`badge-route-status ${algoritmoEjecutado ? 'bg-status-green' : 'bg-status-orange'}`}>
                <span className="pulse-indicator"></span>
                {algoritmoEjecutado ? "Ruta Corta" : "Ruta de Desvío"}
              </div>
            </div>

            {/* Canvas de Mapa de Cuadrícula Real */}
            <div className="map-view-canvas grid-8x8-canvas">
              
              {/* Render de Calles Horizontales */}
              {callesHorizontales.map((calle) => (
                <div key={`h-${calle.id}`} className="map-street-h" style={{ top: calle.top }}>
                  <span className={`street-indicator ${calle.clase}`}>{calle.sentido} {calle.sentido} {calle.sentido}</span>
                </div>
              ))}

              {/* Render de Calles Verticales */}
              {callesVerticales.map((calle) => (
                <div key={`v-${calle.id}`} className="map-street-v" style={{ left: calle.left }}>
                  <span className={`street-indicator-v ${calle.clase}`}>{calle.sentido}<br/>{calle.sentido}<br/>{calle.sentido}</span>
                </div>
              ))}

              {/* Animación del Algoritmo */}
              {optimizando && (
                <div className="map-overlay-message panel-blue">
                  <div className="spinner-circle"></div>
                  <h3>Optimizando Grafo...</h3>
                  <p>Resolviendo restricciones de calles unidireccionales mediante A* Search.</p>
                </div>
              )}

              {/* Render del Path de la ruta (Siempre respetando los sentidos de circulación) */}
              {confirmado === 'SI' && !optimizando && (
                <svg className="map-svg-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {algoritmoEjecutado ? (
                    /* RUTA CORTA OPTIMIZADA: Sube por Calle vertical 2 (Hacia arriba) y va a la derecha por Calle horizontal 1 (Hacia la derecha) */
                    <polyline 
                      points="10,82 22,82 22,10 94,10 94,22 82,22" 
                      fill="none" 
                      stroke="#10b981" 
                      strokeWidth="2.5" 
                      strokeDasharray="4,2" 
                      className="animated-route-stroke"
                    />
                  ) : (
                    /* RUTA LARGA NO OPTIMIZADA: Desvíos masivos por dar vueltas a la manzana respetando los sentidos contrarios */
                    <polyline 
                      points="10,82 10,94 46,94 46,58 34,58 34,46 70,46 70,22 82,22" 
                      fill="none" 
                      stroke="#ef4444" 
                      strokeWidth="2" 
                      strokeDasharray="4,2" 
                      className="animated-route-stroke"
                    />
                  )}
                </svg>
              )}

              {/* Marcadores de origen y destino en intersecciones exactas del grid */}
              <div className="marker label-almacen" style={{ left: '6%', top: '78%' }}>🏢 Almacén</div>
              
              {confirmado === 'SI' && !optimizando && (
                <>
                  <div className="marker label-destino" style={{ left: '78%', top: '18%' }}>📍 Domicilio</div>
                  
                  {/* Furgoneta en la cuadrícula */}
                  <div className={`marker delivery-truck step-grid-pos-${pasoActual} ${algoritmoEjecutado ? 'truck-opt' : 'truck-long'}`}>
                    {pasoActual === 6 ? "✅" : "🚚"}
                  </div>
                </>
              )}

              {confirmado === 'NO' && (
                <div className="map-overlay-message panel-orange">
                  <h3>🔄 Estado = Reprogramado</h3>
                  <p>Paquete en espera. Se recalculará una nueva ventana de ruta con el operador.</p>
                </div>
              )}

              {confirmado === 'LOCAL' && (
                <div className="map-overlay-message panel-purple">
                  <h3>🏢 Recojo en Oficina</h3>
                  <p>Paquete listo en la ventanilla de Savarxpress. Código: {infoPaquete.trackingID}</p>
                </div>
              )}
            </div>

            {/* Footer Métricas */}
            <div className="map-metrics-footer">
              <div className="metric-box-sub"><span className="m-label">Grafo</span><span className="m-value font-mono">8x8 Manzanas</span></div>
              <div className="metric-box-sub">
                <span className="m-label">Distancia</span>
                <span className={`m-value ${algoritmoEjecutado ? 'text-green-accent' : 'text-red-accent'}`}>
                  {confirmado === 'SI' ? (pasoActual === 6 ? "0.0 km" : algoritmoEjecutado ? "4.2 km (Ruta Corta)" : "11.8 km (Desvíos)") : "--"}
                </span>
              </div>
              <div className="metric-box-sub">
                <span className="m-label">Tiempo Estimado</span>
                <span className="m-value">
                  {confirmado === 'SI' ? (pasoActual === 6 ? "Completado" : algoritmoEjecutado ? "6 min" : "18 min") : "Pausado"}
                </span>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="timeline-card-section">
            <div className="card-header-timeline">
              <h2 className="card-title-light">📋 Estado del Flujo Logístico</h2>
            </div>
            <div className="flow-vertical-timeline">
              {pasosLogistica.map((paso) => {
                let esCompletado = paso.id < pasoActual;
                let esActivo = paso.id === pasoActual;
                let claseEstado = "step-pending";
                if (esCompletado) claseEstado = "step-completed";
                if (esActivo) claseEstado = "step-active";

                return (
                  <div key={paso.id} className={`timeline-step-row ${claseEstado}`}>
                    <div className="step-badge-icon">{esCompletado ? "✓" : paso.icono}</div>
                    <div className="step-text-content">
                      <h3 className="step-title-text">{paso.titulo}</h3>
                      <p className="step-description-text">{paso.descripcion}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      )}
    </div>
  );
}