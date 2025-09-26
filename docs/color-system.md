# Sistema de Colores Volksoft

## Paleta de Colores Principal

### Colores Base
- **Cian Brillante (#01fdf4)**: Color vibrante para CTAs, elementos destacados y acciones principales
- **Azul Marino Profundo (#051626)**: Color base para fondos, textos principales y elementos de alta jerarquía
- **Verde Azulado Oscuro (#214d58)**: Color para navegación, secciones secundarias y elementos de contraste
- **Teal Medio (#2ea0a5)**: Color para hover states, separadores y elementos de transición

## Aplicación por Componentes

### Header
- **Fondo**: `#214d58` (Verde azulado oscuro)
- **Texto**: `#ffffff` (Blanco)
- **Hover**: `#01fdf4` (Cian brillante)

### Hero
- **Fondo**: `#051626` (Azul marino profundo)
- **Texto**: `#ffffff` (Blanco)
- **Botón CTA**: 
  - Fondo: `#01fdf4`
  - Texto: `#051626`

### Tarjetas/Cards
- **Fondo**: `#ffffff` (Blanco) o `rgba(5, 22, 38, 0.8)` (tema oscuro)
- **Texto**: `#051626` o `#ffffff` (según tema)
- **Borde**: `#2ea0a5` (Teal medio)
- **Botón**: 
  - Fondo: `#01fdf4`
  - Texto: `#051626`

### Botones

#### Botón Primario
- **Fondo**: `#01fdf4` (Cian brillante)
- **Texto**: `#051626` (Azul marino profundo)
- **Hover**: `#2ea0a5` (Teal medio)

#### Botón Secundario
- **Fondo**: `#214d58` (Verde azulado oscuro)
- **Texto**: `#ffffff` (Blanco)
- **Hover**: `#01fdf4` (Cian brillante) con texto `#051626`

### Footer
- **Fondo**: `#051626` (Azul marino profundo)
- **Texto**: `#ffffff` (Blanco)
- **Enlaces**: `#2ea0a5` (Teal medio)
- **Enlaces Hover**: `#01fdf4` (Cian brillante)

## Variables CSS

```css
:root {
  /* Colores primarios */
  --color-cyan-bright: #01fdf4;
  --color-navy-deep: #051626;
  --color-teal-dark: #214d58;
  --color-teal-medium: #2ea0a5;
  
  /* Colores de componentes */
  --header-bg: var(--color-teal-dark);
  --header-text: var(--color-white);
  --header-hover: var(--color-cyan-bright);
  
  --hero-bg: var(--color-navy-deep);
  --hero-text: var(--color-white);
  --hero-cta-bg: var(--color-cyan-bright);
  --hero-cta-text: var(--color-navy-deep);
  
  --btn-primary-bg: var(--color-cyan-bright);
  --btn-primary-text: var(--color-navy-deep);
  --btn-primary-hover: var(--color-teal-medium);
  
  --footer-bg: var(--color-navy-deep);
  --footer-text: var(--color-white);
  --footer-link: var(--color-teal-medium);
  --footer-link-hover: var(--color-cyan-bright);
}
```

## Mejores Prácticas

### Accesibilidad
- **Contraste mínimo**: 4.5:1 para texto normal, 3:1 para texto grande
- **Verificar**: Usar herramientas como WebAIM Contrast Checker
- **Estados de foco**: Siempre visible y con suficiente contraste

### Consistencia
- **CTAs principales**: Siempre usar cian brillante (`#01fdf4`)
- **Navegación**: Consistente en teal oscuro (`#214d58`)
- **Fondos principales**: Azul marino profundo (`#051626`)
- **Elementos interactivos**: Hover en cian brillante

### Limitaciones de Uso
- **Cian brillante**: Solo para elementos clave (máximo 2-3 por vista)
- **Saturación**: Evitar usar todos los colores saturados al mismo tiempo
- **Texto largo**: Usar grises neutros para no cansar la vista
- **Jerarquía**: Mantener consistencia en el uso de colores por tipo de elemento

## Gradientes Recomendados

```css
--gradient-primary: linear-gradient(135deg, #01fdf4 0%, #2ea0a5 100%);
--gradient-secondary: linear-gradient(135deg, #051626 0%, #214d58 100%);
--gradient-hero: linear-gradient(135deg, #051626 0%, rgba(5, 22, 38, 0.9) 50%, #214d58 100%);
```

## Estados de Interacción

### Hover
- **Primario**: `#2ea0a5` (Teal medio)
- **Secundario**: `#01fdf4` (Cian brillante)
- **Enlaces**: `#01fdf4` (Cian brillante)

### Active/Pressed
- **Reducir opacidad**: 0.8
- **Mantener colores base**

### Disabled
- **Opacidad**: 0.5
- **Sin interacciones**

### Focus
- **Outline**: `2px solid #01fdf4`
- **Offset**: `2px`

## Sombras

```css
--shadow-cyan: 0 10px 15px -3px rgba(1, 253, 244, 0.3);
--shadow-teal: 0 10px 15px -3px rgba(46, 160, 165, 0.3);
--shadow-navy: 0 10px 15px -3px rgba(5, 22, 38, 0.3);
```

## Ejemplos de Uso

### Botón CTA Principal
```jsx
<button 
  style={{
    backgroundColor: 'var(--btn-primary-bg)',
    color: 'var(--btn-primary-text)',
    boxShadow: 'var(--shadow-cyan)'
  }}
>
  Comenzar Ahora
</button>
```

### Card con Hover
```jsx
<div 
  className="card-hover"
  style={{
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-teal-medium)'
  }}
>
  Contenido de la tarjeta
</div>
```

### Navegación
```jsx
<nav 
  style={{
    backgroundColor: 'var(--header-bg)',
    color: 'var(--header-text)'
  }}
>
  <Link 
    onMouseEnter={(e) => e.target.style.color = 'var(--header-hover)'}
    onMouseLeave={(e) => e.target.style.color = 'var(--header-text)'}
  >
    Enlace
  </Link>
</nav>
```