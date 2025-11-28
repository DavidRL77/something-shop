# 🎨 Guía Rápida - Personalización con custom.css

## ✅ Método Más Fácil: Solo Editar `custom.css`

**Archivo a modificar**: `assets/css/custom.css`

**NO necesitas tocar**: HTML, templatemo.css, bootstrap.min.css ni ningún otro archivo.

---

## 🚀 PASO A PASO

### 1️⃣ Abre el archivo
```
assets/css/custom.css
```

### 2️⃣ Elige UNA de estas opciones:

---

## 📌 OPCIÓN A: Usar un Tema Predefinido (Recomendado)

### Temas Disponibles:

#### 🔵 TEMA 1: Azul Moderno
Busca en `custom.css` la línea que dice `/* TEMA 1: AZUL MODERNO */`

**Quita** los `/*` y `*/` de estas líneas:
```css
.text-success { color: #3498db !important; }
.bg-success, .btn-success { background-color: #3498db !important; border-color: #2980b9 !important; }
.btn-success:hover { background-color: #2980b9 !important; }
#templatemo_main_nav a:hover { color: #3498db !important; }
.bg-dark { background-color: #2c3e50 !important; }
```

#### 💗 TEMA 2: Rosa Elegante
```css
.text-success { color: #e91e63 !important; }
.bg-success, .btn-success { background-color: #e91e63 !important; border-color: #c2185b !important; }
.btn-success:hover { background-color: #c2185b !important; }
#templatemo_main_nav a:hover { color: #e91e63 !important; }
.bg-dark { background-color: #1a1a1a !important; }
```

#### 🟠 TEMA 3: Naranja Vibrante
```css
.text-success { color: #ff6f00 !important; }
.bg-success, .btn-success { background-color: #ff6f00 !important; border-color: #e65100 !important; }
.btn-success:hover { background-color: #e65100 !important; }
#templatemo_main_nav a:hover { color: #ff6f00 !important; }
.bg-dark { background-color: #263238 !important; }
```

#### 💜 TEMA 4: Púrpura Profesional
```css
.text-success { color: #9c27b0 !important; }
.bg-success, .btn-success { background-color: #9c27b0 !important; border-color: #7b1fa2 !important; }
.btn-success:hover { background-color: #7b1fa2 !important; }
#templatemo_main_nav a:hover { color: #9c27b0 !important; }
.bg-dark { background-color: #1e1e2e !important; }
```

#### 🟢 TEMA 5: Verde Oscuro
```css
.text-success { color: #2ecc71 !important; }
.bg-success, .btn-success { background-color: #2ecc71 !important; border-color: #27ae60 !important; }
.btn-success:hover { background-color: #27ae60 !important; }
#templatemo_main_nav a:hover { color: #2ecc71 !important; }
.bg-dark { background-color: #1e272e !important; }
```

---

## 📌 OPCIÓN B: Crear tu Propio Color

### Paso 1: Ve al final de `custom.css`
Busca la sección que dice:
```css
/* 
==============================================
TUS PERSONALIZACIONES
==============================================
*/
```

### Paso 2: Pega este código y cambia el color

**Reemplaza `#TU_COLOR` con tu color favorito** (ejemplo: `#ff0000` para rojo):

```css
/* MI TEMA PERSONALIZADO */

/* Color principal */
.text-success,
.h1.text-success,
.navbar-brand.text-success,
.logo.text-success {
  color: #TU_COLOR !important;
}

/* Botones */
.bg-success,
.btn-success {
  background-color: #TU_COLOR !important;
  border-color: #TU_COLOR !important;
}

.btn-success:hover {
  background-color: #TU_COLOR_OSCURO !important;
  border-color: #TU_COLOR_OSCURO !important;
}

/* Enlaces hover */
#templatemo_main_nav a:hover,
.shop-top-menu a:hover,
#tempaltemo_footer a:hover {
  color: #TU_COLOR !important;
}

/* Carrusel */
#template-mo-zay-hero-carousel .carousel-indicators li {
  background-color: #TU_COLOR !important;
}

#template-mo-zay-hero-carousel .carousel-control-next i,
#template-mo-zay-hero-carousel .carousel-control-prev i {
  color: #TU_COLOR !important;
}

/* Servicios */
.services-icon-wap:hover {
  background: #TU_COLOR !important;
}

/* Paginación */
.pagination .page-link:hover,
.pagination .page-link.active {
  background-color: #TU_COLOR !important;
}

/* Botón de búsqueda */
.input-group-text.btn-success,
.input-group-text.bg-success {
  background-color: #TU_COLOR !important;
}
```

---

## 🎨 Cómo Elegir Colores

### Herramientas Online:
1. **Google**: Busca "color picker" y elige tu color
2. **Coolors.co**: Genera paletas automáticas
3. **Adobe Color**: Rueda de colores profesional

### Ejemplos de Colores Populares:

| Color | Código Hex | Vista Previa |
|-------|------------|--------------|
| Rojo | `#e74c3c` | 🔴 |
| Azul | `#3498db` | 🔵 |
| Verde | `#2ecc71` | 🟢 |
| Naranja | `#ff6f00` | 🟠 |
| Rosa | `#e91e63` | 💗 |
| Púrpura | `#9c27b0` | 💜 |
| Turquesa | `#1abc9c` | 🩵 |
| Amarillo | `#f1c40f` | 🟡 |

---

## 🔤 CAMBIAR FUENTES (Opcional)

### Opción Simple: Solo con custom.css

**Paso 1**: Agrega esto al **inicio** de `custom.css`:

```css
/* Importar fuente de Google */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
```

**Paso 2**: Agrega esto al **final** de `custom.css`:

```css
/* Aplicar fuente */
body, ul, li, p, a, label, input, div,
.h1, .h2, .h3, h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif !important;
}
```

### Fuentes Populares para Copiar/Pegar:

#### Poppins (Moderna y Limpia)
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

body, ul, li, p, a, label, input, div,
.h1, .h2, .h3, h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif !important;
}
```

#### Montserrat (Elegante)
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

body, ul, li, p, a, label, input, div,
.h1, .h2, .h3, h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif !important;
}
```

#### Inter (Profesional)
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body, ul, li, p, a, label, input, div,
.h1, .h2, .h3, h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif !important;
}
```

#### Raleway (Sofisticada)
```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');

body, ul, li, p, a, label, input, div,
.h1, .h2, .h3, h1, h2, h3, h4, h5, h6 {
  font-family: 'Raleway', sans-serif !important;
}
```

---

## ✅ APLICAR CAMBIOS

1. **Guarda** el archivo `custom.css`
2. **Abre** `index.html` en tu navegador
3. **Refresca** la página (presiona `Ctrl + F5` para limpiar caché)
4. **¡Listo!** Verás tus cambios aplicados

---

## 💡 CONSEJOS

✅ **Solo modifica** `custom.css`  
✅ **Descomenta** solo UN tema a la vez  
✅ **Usa** `!important` para sobrescribir estilos  
✅ **Refresca** con `Ctrl + F5` para ver cambios  
✅ **Prueba** diferentes temas hasta encontrar el que te guste  

❌ **NO modifiques** `bootstrap.min.css`  
❌ **NO modifiques** `templatemo.css` (usa `custom.css`)  
❌ **NO modifiques** archivos `.min.css`  

---

## 🎯 EJEMPLO COMPLETO

Aquí está un ejemplo completo de `custom.css` con tema azul y fuente Poppins:

```css
/* Importar fuente */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* TEMA AZUL MODERNO */
.text-success { color: #3498db !important; }
.bg-success, .btn-success { background-color: #3498db !important; border-color: #2980b9 !important; }
.btn-success:hover { background-color: #2980b9 !important; }
#templatemo_main_nav a:hover { color: #3498db !important; }
.bg-dark { background-color: #2c3e50 !important; }

/* Aplicar fuente Poppins */
body, ul, li, p, a, label, input, div,
.h1, .h2, .h3, h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif !important;
}
```

**Copia y pega** este código al final de tu `custom.css` y tendrás un tema azul con fuente moderna. ¡Así de fácil! 🎉

---

## 🆘 SOLUCIÓN DE PROBLEMAS

**Problema**: No veo los cambios  
**Solución**: Refresca con `Ctrl + F5` o limpia el caché del navegador

**Problema**: Los colores no cambian  
**Solución**: Asegúrate de usar `!important` en tus estilos

**Problema**: La fuente no cambia  
**Solución**: Verifica que el `@import` esté al inicio del archivo

---

¡Listo! Ahora puedes personalizar tu plantilla editando solo `custom.css`. 🚀
