import React, { useState } from 'react';
import './styles/AboutUs.css'; // Asegúrate de mantener tu ruta de estilos

export default function SavarxpressDashboard() {
  // Estado inicial basado en los datos de la Check-sheet (N = 110)
  const [incidencias, setIncidencias] = useState([
    {
      id: 1,
      categoria: 'Inoperancia de canales de soporte y atención (WhatsApp/Teléfono/Redes)',
      conteo: 38,
    },
    {
      id: 2,
      categoria: 'Retrasos críticos en la distribución física (SLA incumplido)',
      conteo: 25,
    },
    {
      id: 3,
      categoria: 'Falsificación de entrega y pérdida de contenido (Estado falso/Robo)',
      conteo: 20,
    },
    {
      id: 4,
      categoria: 'Falsas visitas y desvío a Almacén de Liquidación',
      conteo: 13,
    },
    {
      id: 5,
      categoria: 'Inexistencia de oficinas físicas en provincias',
      conteo: 9,
    },
    {
      id: 6,
      categoria: 'Trato hostil y exigencia irregular de foto DNI',
      conteo: 5,
    },
  ]);

  const [procesoActivo, setProcesoActivo] = useState('mejorado'); // 'actual' o 'mejorado'

  // Cálculos dinámicos
  const totalMenciones = incidencias.reduce((acc, curr) => acc + curr.conteo, 0);

  // Incrementar conteo de paloteo en tiempo real
  const handleTally = (id) => {
    setIncidencias(
      incidencias.map((item) =>
        item.id === id ? { ...item, conteo: item.conteo + 1 } : item
      )
    );
  };

  // Restablecer conteo al estado inicial
  const handleReset = () => {
    setIncidencias([
      { id: 1, categoria: 'Inoperancia de canales de soporte y atención (WhatsApp/Teléfono/Redes)', conteo: 38 },
      { id: 2, categoria: 'Retrasos críticos en la distribución física (SLA incumplido)', conteo: 25 },
      { id: 3, categoria: 'Falsificación de entrega y pérdida de contenido (Estado falso/Robo)', conteo: 20 },
      { id: 4, categoria: 'Falsas visitas y desvío a Almacén de Liquidación', conteo: 13 },
      { id: 5, categoria: 'Inexistencia de oficinas físicas en provincias', conteo: 9 },
      { id: 6, categoria: 'Trato hostil y exigencia irregular de foto DNI', conteo: 5 },
    ]);
  };

  // Generar representación visual de palotes (tally marks)
  const renderTallyMarks = (count) => {
    let marks = '';
    for (let i = 1; i <= count; i++) {
      marks += '|';
      if (i % 5 === 0) marks += ' '; // Agrupar de 5 en 5
    }
    return marks;
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <span className="subtitle">Control por check list</span>
        <h1 className="title">Savarxpress Logística: Monitor de Calidad y Procesos</h1>
      </header>

      {/* Tarjetas de Métricas */}
      <div className="metrics-grid">
        <div className="metric-card">
          <p className="metric-label">Total Incidencias Auditadas</p>
          <p className="metric-value">{totalMenciones}</p>
          <span className="metric-sub text-red">Muestra activa en tiempo real</span>
        </div>
        <div className="metric-card">
          <p className="metric-label">Causa Principal Vital (Pareto)</p>
          <p className="metric-value text-medium text-red">Canales de Soporte Inoperativos</p>
          <span className="metric-sub text-slate">
            Representa el {((incidencias[0]?.conteo / totalMenciones) * 100).toFixed(1)}% del total de fallos
          </span>
        </div>
        <div className="metric-card">
          <p className="metric-label">Estado del Sistema Operativo</p>
          <div className="status-flex">
            <span className="status-dot"></span>
            <p className="status-text">PostgreSQL + API Activa</p>
          </div>
          <span className="metric-sub text-slate">Simulación del flujo optimizado</span>
        </div>
      </div>

      {/* Bloque Principal */}
      <div className="main-grid">
        {/* SECCIÓN: CHECK-SHEET */}
        <section className="section-card">
          <div className="section-header">
            <div>
              <h2 className="section-title">📊 Hoja de Verificación (Check-sheet)</h2>
              <p className="section-subtitle">ID de Hoja: GCC-2026-CH01 | Auditor: Ruben Laime</p>
            </div>
            <button onClick={handleReset} className="btn-reset">
              Restablecer
            </button>
          </div>

          <div className="table-responsive">
            <table className="check-table">
              <thead>
                <tr>
                  <th>Defecto de Servicio</th>
                  <th>Paloteo (Tally)</th>
                  <th className="text-center">Frec.</th>
                  <th className="text-center">Acción</th>
                </tr>
              </thead>
              <tbody>
                {incidencias.map((item) => (
                  <tr key={item.id}>
                    <td className="col-category">{item.categoria}</td>
                    <td className="col-tally">{renderTallyMarks(item.conteo) || '-'}</td>
                    <td className="col-freq text-center">{item.conteo}</td>
                    <td className="text-center">
                      <button onClick={() => handleTally(item.id)} className="btn-add">
                        +1
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECCIÓN: FLOWCHART COMPARADOR */}
        <section className="section-card">
          <div className="section-header">
            <div>
              <h2 className="section-title">⚙️ Comparación de Procesos (Flowchart)</h2>
              <p className="section-subtitle">Visualiza el impacto de la arquitectura de automatización</p>
            </div>
            <div className="toggle-container">
              <button
                onClick={() => setProcesoActivo('actual')}
                className={`toggle-btn ${procesoActivo === 'actual' ? 'active-red' : ''}`}
              >
                Proceso Actual
              </button>
              <button
                onClick={() => setProcesoActivo('mejorado')}
                className={`toggle-btn ${procesoActivo === 'mejorado' ? 'active-green' : ''}`}
              >
                Proceso Mejorado
              </button>
            </div>
          </div>

          {procesoActivo === 'actual' ? (
            <div className="flowchart-content border-red">
              <div className="badge-wrapper bg-red-dark">
                <span className="badge">Manual e Informal</span>
                <p className="badge-text">
                  Dependencia crítica del ingreso manual de datos y la coordinación mediante mensajes individuales de WhatsApp.
                </p>
              </div>
              <div className="timeline timeline-red">
                <div className="timeline-item">
                  <h4 className="timeline-title">1. Recepción de Lotes</h4>
                  <p className="timeline-desc">El transportista avisa la llegada del camión mediante chat grupal informal.</p>
                </div>
                <div className="timeline-item">
                  <h4 className="timeline-title">2. Registro Manual</h4>
                  <p className="timeline-desc">El operador digita uno a uno los códigos de rastreo en un Excel local.</p>
                </div>
                <div className="timeline-item">
                  <h4 className="timeline-title">3. Notificación Manual</h4>
                  <p className="timeline-desc">Se envían capturas de pantalla o textos de forma manual por WhatsApp.</p>
                </div>
                <div className="timeline-item">
                  <h4 className="timeline-title">4. Distribución Informal</h4>
                  <p className="timeline-desc">Reparto organizado bajo criterio intuitivo del operador, sin optimización.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flowchart-content border-green">
              <div className="badge-wrapper bg-green-dark">
                <span className="badge">Optimizado y Automatizado</span>
                <p className="badge-text">
                  Uso de infraestructura SQL, envíos transaccionales masivos mediante API de WhatsApp y ruteo computacional.
                </p>
              </div>
              <div className="timeline timeline-green">
                <div className="timeline-item">
                  <h4 className="timeline-title">1. Carga Masiva a PostgreSQL</h4>
                  <p className="timeline-desc">Lectura e inserción instantánea de guías en la base de datos relacional.</p>
                </div>
                <div className="timeline-item">
                  <h4 className="timeline-title">2. Envío Masivo Automatizado</h4>
                  <p className="timeline-desc">El Webhook procesa la inserción y dispara plantillas transaccionales por API.</p>
                </div>
                <div className="timeline-item">
                  <h4 className="timeline-title">3. Geocodificación y Ruteo</h4>
                  <p className="timeline-desc">Google Maps traduce direcciones y un script de Python (OR-Tools) genera la ruta óptima.</p>
                </div>
                <div className="timeline-item">
                  <h4 className="timeline-title">4. Dashboard de Control</h4>
                  <p className="timeline-desc">Monitoreo dinámico del estado del servicio, detectando demoras de manera automática.</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      
{/* =======================================================
          FIGURA 2: DIAGRAMA DE FLUJO MEJORADO (ESTILO ERASER)
         ======================================================= */}
      <section className="section-card flowchart-wrapper-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">🗺️ Figura 2: Flujo Automatizado de Pedidos Temu - Savarxpress</h2>
            <p className="section-subtitle">Estructura secuencial paralela de validación y optimización logística</p>
          </div>
        </div>

        <div className="canvas-container">
          
          {/* Leyenda de Símbolos */}
          <div className="canvas-legend">
            <h4 className="legend-title">Leyenda de símbolos</h4>
            <div className="legend-flex">
              <div className="legend-item"><div className="symbol-box sym-green"></div><span>Inicio/Fin</span></div>
              <div className="legend-item"><div className="symbol-box sym-yellow"></div><span>Acción automática</span></div>
              <div className="legend-item"><div className="symbol-box sym-pink"></div><span>Condicional SÍ/NO</span></div>
              <div className="legend-item"><div className="symbol-box sym-blue"></div><span>Entrada/Salida datos</span></div>
              <div className="legend-item"><div className="symbol-box sym-red"></div><span>Ruta de excepción</span></div>
            </div>
          </div>

          {/* Cuerpo de Bloques Paralelos */}
          <div className="eraser-chart-layout">
            
            {/* COLUMNA IZQUIERDA: FLUJO PRINCIPAL */}
            <div className="chart-main-column">
              <div className="flow-node node-green">INICIO</div>
              <div className="flow-line-vertical"></div>
              
              <div className="flow-node node-yellow">Validación de datos del cliente</div>
              <div className="flow-line-vertical"></div>
              
              <div className="flow-node node-pink">¿Datos completos?</div>
              <div className="flow-line-vertical"><span className="arrow-text-yes">SÍ</span></div>
              
              <div className="flow-node node-green text-icon">💬 Enviar confirmación por WhatsApp</div>
              <div className="flow-line-vertical"></div>
              
              <div className="flow-node node-pink">¿Cliente responde antes de 20:00?</div>
              <div className="flow-line-vertical"><span className="arrow-text-yes">SÍ</span></div>
              
              <div className="flow-node node-pink">¿Respuesta = SÍ?</div>
              <div className="flow-line-vertical"><span className="arrow-text-yes">SÍ</span></div>
              
              <div className="flow-node node-green">Estado = Confirmado</div>
              <div className="flow-line-vertical"></div>
              
              <div className="flow-node node-blue">📍 Geocodificación de dirección</div>
              <div className="flow-line-vertical"></div>
              
              <div className="flow-node node-blue">Agregar a matriz de distancias</div>
              <div className="flow-line-vertical"></div>
              
              <div className="flow-node node-purple">🚚 Optimización de ruta (algoritmo)</div>
              <div className="flow-line-vertical"></div>
              
              <div className="flow-node node-pink">¿Ruta generada correctamente?</div>
              <div className="flow-line-vertical"><span className="arrow-text-yes">SÍ</span></div>
              
              <div className="flow-node node-green">🔔 Notificación automática al cliente</div>
              <div className="flow-line-vertical"></div>
              
              <div className="flow-node node-green">📦 Entrega final</div>
              <div className="flow-line-vertical"></div>
              
              <div className="flow-node node-green">FIN</div>
            </div>

            {/* COLUMNA DERECHA: ENTRADAS Y MANEJO DE EXCEPCIONES */}
            <div className="chart-side-column">
              
              {/* Entrada del lote */}
              <div className="side-block-group">
                <div className="flow-node node-blue">Llegada lote Temu<br/>(100 paquetes)</div>
                <div className="flow-node node-yellow mt-10">💾 Registro automático en Base de Datos SQL</div>
              </div>

              {/* Excepción 1 */}
              <div className="side-block-group border-dashed-red">
                <span className="side-conditional-tag text-red">← NO (¿Datos completos?)</span>
                <div className="flow-node node-red">Marcar como "Info Incompleta"</div>
                <div className="flow-line-vertical"></div>
                <div className="flow-node node-red">⚠ Generar alerta para revisión manual</div>
                <div className="flow-line-vertical"></div>
                <div className="flow-node node-red">FIN</div>
              </div>

              {/* Excepción 2 */}
              <div className="side-block-group border-dashed-red">
                <span className="side-conditional-tag text-red">← NO (¿Responde antes 20:00?)</span>
                <div className="flow-node node-red">Estado = No Confirmado</div>
                <div className="flow-line-vertical"></div>
                <div className="flow-node node-red">Excluir de ruta del día siguiente</div>
                <div className="flow-line-vertical"></div>
                <div className="flow-node node-red">FIN</div>
              </div>

              {/* Excepción 3 */}
              <div className="side-block-group border-dashed-yellow">
                <span className="side-conditional-tag text-yellow">← NO (¿Respuesta = SÍ?)</span>
                <div className="flow-node node-yellow">Estado = Reprogramado</div>
                <div className="flow-line-vertical"></div>
                <div className="flow-node node-yellow">Programar entrega otra fecha</div>
              </div>

              {/* Excepción 4 */}
              <div className="side-block-group border-dashed-red">
                <span className="side-conditional-tag text-red">← NO (¿Ruta correcta?)</span>
                <div className="flow-node node-red">⚠ Alerta para operador</div>
                <div className="flow-line-vertical"></div>
                <div className="flow-node node-red">Revisar manualmente</div>
                <div className="re-attempt-line"><span>reintenta ↻</span></div>
              </div>

            </div>

          </div>
        </div>
      </section>




      {/* Footer de Créditos */}
      <footer className="dashboard-footer-credits">
        <p>© 2026 Savarxpress Logistics Optimizer. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}