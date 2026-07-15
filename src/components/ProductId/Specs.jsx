import React, { useState, useEffect } from 'react';
import './styles/Specs.css';

/**
 * Specs
 * - Si no recibes props o recibes {}, usa datos simulados por defecto.
 */

  

const Specs = ({ specs }) => {
  const defaultSpecs = {
    peso: '1.5 kg',
    dimensiones: '30 x 20 x 10 cm',
    color: 'Negro',
    material: 'Aluminio',
    marca: 'MarcaEjemplo',
    modelo: 'XE-1000',
    garantia: '2 años',
  };

  const finalSpecs =
    specs && Object.keys(specs).length > 0 ? specs : defaultSpecs;

  const entries = Object.entries(finalSpecs);

  return (
    <div
      className="specs-container"
      style={{ padding: 16, border: '1px solid #ddd', borderRadius: 6 }}
    >
      <h2 style={{ marginTop: 0 }}>Especificaciones</h2>

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #eee', padding: 8, textAlign: 'left' }}>
              Atributo
            </th>
            <th style={{ border: '1px solid #eee', padding: 8, textAlign: 'left' }}>
              Detalle
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([key, value]) => (
            <tr key={key}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {formatKey(key)}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {typeof value === 'object' && value !== null
                  ? JSON.stringify(value)
                  : value ?? '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const formatKey = (key) => {
  const withSpaces = key.replace(/_/g, ' ');
  return withSpaces.replace(/\b\w/g, (c) => c.toUpperCase());
};

/**
 * ProductPage - demo de uso
 * - Simula cargar specs después de 1.2s.
 */
export default function ProductPage() {
  const [specs, setSpecs] = useState(null);
  const [loading, setLoading] = useState(true);

  const exampleSpecs = {
    peso: '1.5 kg',
    dimensiones: '30 x 20 x 10 cm',
    color: 'Negro',
    material: 'Aluminio',
    marca: 'Marca',
    modelo: 'XE-1000'
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setSpecs(exampleSpecs); 
      setLoading(false);
    }, 1200);

    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{  margin: '24px auto', fontFamily: 'Arial, sans-serif' }}
    >
      {loading ? <p>Cargando especificaciones...</p> : <Specs specs={specs} />}
    </div>
  );
}
