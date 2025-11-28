# 🎨 Guía de Personalización - Zay Shop

Esta guía te ayudará a personalizar los colores y fuentes de tu plantilla Zay Shop de manera fácil y efectiva.

---

## 📁 Estructura de Archivos CSS

La plantilla utiliza los siguientes archivos CSS:

```
assets/css/
├── bootstrap.min.css       (Framework Bootstrap - NO modificar)
├── templatemo.css          (Estilos principales - EDITAR AQUÍ)
├── templatemo.min.css      (Versión minificada)
├── custom.css              (Tus estilos personalizados - EDITAR AQUÍ)
├── fontawesome.min.css     (Iconos - NO modificar)
└── slick.min.css          (Carrusel - NO modificar)
```

### ✅ Archivos que DEBES editar:
1. **`custom.css`** - Para tus personalizaciones (RECOMENDADO)
2. **`templatemo.css`** - Para cambios en los estilos base

---

## 🎨 CAMBIAR COLORES

### Colores Actuales de la Plantilla

| Elemento | Color Actual | Código Hex |
|----------|--------------|------------|
| Color Principal (Success) | Verde | `#59ab6e` |
| Color Hover | Verde Claro | `#69bb7e` |
| Fondo Oscuro | Gris Oscuro | `#212934` |
| Fondo Negro | Negro Azulado | `#1d242d` |
| Fondo Claro | Gris Claro | `#e9eef5` |
| Texto Warning | Amarillo | `#ede861` |
| Texto Muted | Gris | `#bcbcbc` |

### 📝 Método 1: Usar `custom.css` (RECOMENDADO)

Abre el archivo `assets/css/custom.css` y agrega tus colores personalizados:

```css
/* 
==============================================
PERSONALIZACIÓN DE COLORES
==============================================
*/

/* Color Principal - Cambia el verde por tu color */
.text-success,
.h1.text-success,
.navbar-brand.text-success,
.logo.text-success {
  color: #ff6b6b !important; /* Rojo coral */
}

.bg-success,
.btn-success {
  background-color: #ff6b6b !important; /* Rojo coral */
  border-color: #ff5252 !important;
}

.btn-success:hover {
  background-color: #ff5252 !important;
  border-color: #ff3838 !important;
}

/* Enlaces hover */
#templatemo_main_nav a:hover,
.shop-top-menu a:hover,
#tempaltemo_footer a:hover {
  color: #ff6b6b !important;
}

/* Indicadores del carrusel */
#template-mo-zay-hero-carousel .carousel-indicators li {
  background-color: #ff6b6b !important;
}

#template-mo-zay-hero-carousel .carousel-control-next i,
#template-mo-zay-hero-carousel .carousel-control-prev i {
  color: #ff6b6b !important;
}

/* Servicios hover */
.services-icon-wap:hover {
  background: #ff6b6b !important;
}

/* Paginación */
.pagination .page-link:hover,
.pagination .page-link.active {
  background-color: #ff6b6b !important;
}

/* Input group button */
.input-group-text.btn-success,
.input-group-text.bg-success {
  background-color: #ff6b6b !important;
}

/* 
==============================================
FONDOS
==============================================
*/

/* Fondo oscuro personalizado */
.bg-dark {
  background-color: #1a1a2e !important; /* Azul oscuro */
}

/* Fondo negro personalizado */
.bg-black {
  background-color: #16213e !important; /* Azul muy oscuro */
}

/* Fondo claro personalizado */
.bg-light {
  background-color: #f5f5f5 !important; /* Gris muy claro */
}

/* 
==============================================
COLORES DE TEXTO
==============================================
*/

/* Texto de navegación */
#templatemo_main_nav a {
  color: #2c3e50 !important; /* Gris azulado */
}

/* Texto warning (estrellas) */
.text-warning {
  color: #ffd93d !important; /* Amarillo dorado */
}

/* Texto muted */
.text-muted {
  color: #95a5a6 !important; /* Gris suave */
}
```

### 📝 Método 2: Editar `templatemo.css` directamente

Si prefieres editar el archivo principal, busca estas líneas en `assets/css/templatemo.css`:

**Líneas 53-68** - Colores generales:
```css
.text-success { color: #59ab6e !important;} /* Cambia aquí */
.bg-success { background-color: #59ab6e !important;} /* Cambia aquí */
.btn-success {
  background-color: #59ab6e !important; /* Cambia aquí */
  border-color: #56ae6c !important; /* Cambia aquí */
}
```

**Línea 74** - Hover de navegación:
```css
#templatemo_main_nav a:hover { color: #69bb7e;} /* Cambia aquí */
```

---

## 🔤 CAMBIAR FUENTES

### Fuente Actual
La plantilla usa **Roboto** de Google Fonts.

### 📝 Método 1: Cambiar a otra fuente de Google Fonts

#### Paso 1: Edita `index.html` (y todos los archivos HTML)

Busca la línea 17:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap">
```

Cámbiala por tu fuente favorita. Ejemplos:

**Poppins (moderna y limpia):**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap">
```

**Montserrat (elegante):**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap">
```

**Inter (profesional):**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap">
```

**Playfair Display (elegante para títulos):**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap">
```

#### Paso 2: Actualiza `custom.css`

Agrega esto a `assets/css/custom.css`:

```css
/* 
==============================================
PERSONALIZACIÓN DE FUENTES
==============================================
*/

/* Cambiar fuente principal */
body, ul, li, p, a, label, input, div,
.h1, .h2, .h3, h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif !important; /* Cambia 'Poppins' por tu fuente */
}

/* Fuente para títulos grandes (opcional) */
.h1, h1 {
  font-family: 'Playfair Display', serif !important;
  font-weight: 700 !important;
}

/* Ajustar pesos de fuente */
body, ul, li, p, a, label, input, div {
  font-weight: 400 !important; /* Normal */
}

.h1, h1 {
  font-weight: 700 !important; /* Bold */
}

.h2, h2 {
  font-weight: 600 !important; /* Semi-bold */
}

.h3, h3 {
  font-weight: 500 !important; /* Medium */
}

/* Logo */
.logo {
  font-weight: 700 !important;
  letter-spacing: 2px; /* Espaciado entre letras */
}
```

### 📝 Método 2: Usar fuentes locales

Si tienes archivos de fuentes (.woff, .woff2, .ttf):

#### Paso 1: Crea una carpeta para fuentes
```
assets/fonts/
└── tu-fuente.woff2
```

#### Paso 2: Agrega esto en `custom.css`:

```css
/* Importar fuente local */
@font-face {
  font-family: 'MiFuente';
  src: url('../fonts/tu-fuente.woff2') format('woff2'),
       url('../fonts/tu-fuente.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

/* Aplicar fuente */
body, ul, li, p, a, label, input, div,
.h1, .h2, .h3 {
  font-family: 'MiFuente', sans-serif !important;
}
```

---

## 🎯 EJEMPLOS DE COMBINACIONES

### Ejemplo 1: Tema Azul Moderno
```css
/* En custom.css */

/* Colores */
.text-success { color: #3498db !important; }
.bg-success, .btn-success { background-color: #3498db !important; }
.bg-dark { background-color: #2c3e50 !important; }

/* Fuente */
body, ul, li, p, a, label, input, div {
  font-family: 'Inter', sans-serif !important;
}
```

### Ejemplo 2: Tema Rosa Elegante
```css
/* En custom.css */

/* Colores */
.text-success { color: #e91e63 !important; }
.bg-success, .btn-success { background-color: #e91e63 !important; }
.bg-dark { background-color: #1a1a1a !important; }

/* Fuente */
body, ul, li, p, a, label, input, div {
  font-family: 'Poppins', sans-serif !important;
}

.h1, h1 {
  font-family: 'Playfair Display', serif !important;
}
```

### Ejemplo 3: Tema Naranja Vibrante
```css
/* En custom.css */

/* Colores */
.text-success { color: #ff6f00 !important; }
.bg-success, .btn-success { background-color: #ff6f00 !important; }
.bg-dark { background-color: #263238 !important; }

/* Fuente */
body, ul, li, p, a, label, input, div {
  font-family: 'Montserrat', sans-serif !important;
}
```

---

## 🔧 HERRAMIENTAS ÚTILES

### Paletas de Colores
- [Coolors.co](https://coolors.co/) - Generador de paletas
- [Adobe Color](https://color.adobe.com/) - Rueda de colores
- [Color Hunt](https://colorhunt.co/) - Paletas prediseñadas

### Fuentes
- [Google Fonts](https://fonts.google.com/) - Fuentes gratuitas
- [Font Pair](https://fontpair.co/) - Combinaciones de fuentes

### Convertidor de Colores
- [HTML Color Codes](https://htmlcolorcodes.com/) - Convertir colores

---

## ✅ CHECKLIST DE PERSONALIZACIÓN

- [ ] Elegir paleta de colores
- [ ] Actualizar color principal en `custom.css`
- [ ] Actualizar colores de hover
- [ ] Actualizar fondos (dark, light, black)
- [ ] Elegir fuente principal
- [ ] Agregar enlace de Google Fonts en HTML
- [ ] Actualizar font-family en `custom.css`
- [ ] Probar en navegador
- [ ] Verificar todos los archivos HTML (index, about, shop, contact)

---

## 🚀 APLICAR CAMBIOS

1. **Edita** `assets/css/custom.css` con tus personalizaciones
2. **Guarda** el archivo
3. **Refresca** el navegador (Ctrl + F5 para limpiar caché)
4. **Verifica** que los cambios se apliquen correctamente

---

## 💡 CONSEJOS

1. **Usa `!important`** para sobrescribir estilos de Bootstrap
2. **Mantén `custom.css` organizado** con comentarios
3. **No modifiques** `bootstrap.min.css` ni `fontawesome.min.css`
4. **Prueba en diferentes navegadores** (Chrome, Firefox, Safari)
5. **Usa colores con buen contraste** para accesibilidad
6. **Combina máximo 2-3 fuentes** diferentes

---

## 📞 ARCHIVOS A MODIFICAR

Recuerda aplicar los cambios de fuentes en TODOS estos archivos HTML:
- `index.html`
- `about.html`
- `shop.html`
- `shop-single.html`
- `contact.html`

---

¡Listo! Ahora puedes personalizar tu plantilla Zay Shop fácilmente. 🎉
