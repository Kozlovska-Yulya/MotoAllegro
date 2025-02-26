'use client';

import React, { useState } from 'react';
import './CarFilter.scss';

const CarFilter = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const steps = [
    'Виберіть марку',
    'Виберіть модель',
    'Виберіть модифікацію',
    'Виберіть групу',
    'Оберіть категорію',
  ];

  return (
    <div className="car-filter">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`filter-step ${index + 1 === selectedStep ? 'active' : ''}`}
          onClick={() => setSelectedStep(index + 1)}
        >
          <span className="step-number">{index + 1}</span>
          <p>{step}</p>
          <span className="arrow">▼</span>
        </div>
      ))}

      <button className="search-btn">🔍 Підібрати</button>
    </div>
  );
};

export default CarFilter;
