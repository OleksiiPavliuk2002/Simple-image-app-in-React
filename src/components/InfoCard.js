import React from 'react'

export default function InfoCard({ color, caption, number }) {
  return (
    <div className="info-card" style={{ borderColor: color }}>
      <p className="info-number" style={{ color: color }}>{number}</p>
      <p className="info-caption" style={{ color: color }}>{caption}</p>
    </div>
  );
}
