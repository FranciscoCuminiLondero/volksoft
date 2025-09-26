import React from 'react';
import './buttons.css';

// Componente Button principal
export const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  className = '', 
  onClick,
  disabled = false,
  icon = null,
  ...props 
}) => {
  const baseClass = 'btn-base';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const disabledClass = disabled ? 'btn-disabled' : '';
  
  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

// Botón primario (CTA)
export const PrimaryButton = ({ children, ...props }) => (
  <Button variant="primary" {...props}>
    {children}
  </Button>
);

// Botón secundario
export const SecondaryButton = ({ children, ...props }) => (
  <Button variant="secondary" {...props}>
    {children}
  </Button>
);

// Botón outline
export const OutlineButton = ({ children, ...props }) => (
  <Button variant="outline" {...props}>
    {children}
  </Button>
);

// Botón de texto
export const TextButton = ({ children, ...props }) => (
  <Button variant="text" {...props}>
    {children}
  </Button>
);

// Botón con icono
export const IconButton = ({ icon, ...props }) => (
  <Button variant="icon" {...props}>
    {icon}
  </Button>
);