# EADF web · Implementación de la home nueva (v3)

Instrucciones para la sesión de Claude que trabaja en el repositorio `gdeforonda-cmd/legal-for-freelancers`. El dueño es Gonzalo de Foronda, abogado argentino. Escribile siempre en español rioplatense (voseo), con frases simples.

## 1. Quién es Gonzalo y cómo trabajar con él

- No tiene experiencia con GitHub, Vercel ni código. Guialo **un paso por vez**, con instrucciones concretas de dónde hacer clic. Él te va a mandar capturas de pantalla en cada paso. Esperá su captura antes de dar el paso siguiente.
- No le expliques teoría ni le muestres código salvo que lo pida. Decile qué hiciste y qué tiene que mirar.
- Cuando algo depende de una decisión suya, preguntale una sola cosa por vez.

## 2. Reglas del repositorio (no negociables)

- El sitio está hecho con Lovable (React + Vite) y se publica en Vercel. **Vercel publica automáticamente todo lo que entra a `main`.**
- **Nunca toques `main` directamente.** Trabajá en una rama nueva llamada `rediseno-home-v3`.
- Abrí un Pull Request de esa rama contra `main`. Vercel genera un link de vista previa del PR. Ese link es lo que Gonzalo revisa.
- **Solo se hace merge a `main` cuando Gonzalo lo aprueba por escrito en el chat.**
- Durante el rediseño no se edita nada en Lovable.
- Antes de cambiar nada, revisá la estructura del repo y contale a Gonzalo en tres o cuatro líneas qué encontraste (páginas, rutas, cómo se construye) y qué vas a hacer. Esperá su OK.

## 3. Qué hay que construir

La home nueva de `elabogadodelfreelancer.com`, igual a la maqueta aprobada.

Archivos de este kit:

- `maqueta-home-v3.html`: la maqueta final aprobada, en HTML y CSS. Es la referencia de diseño, estructura, espaciados, colores, tipografías, comportamiento en celular y enlaces. Abrila en un navegador para verla.
- `textos-home-v3.md` y `textos-home-v3.pdf`: el documento de textos aprobado, numerado (1.1 a 10.2). **Si hay cualquier diferencia entre la maqueta y el documento de textos, manda el documento de textos.** Ningún texto se cambia sin aprobación de Gonzalo, ni una coma.
- Foto: Gonzalo la agrega a esta carpeta como `gonzalo-retrato.jpg` (si tiene otro nombre, es la única foto de la carpeta). Se usa dos veces. Grande en «Sobre mí», proporción 3:2, encuadre `object-position: 55% 30%`. Y recortada en círculo de 44 px, centrada en la cara, junto a la etiqueta de la portada (`gonzalo-avatar`, generala vos a partir del retrato). Optimizalas (WebP o JPG comprimido, con `width` y `height` declarados y `alt` como en la maqueta).
- Esta carpeta del kit es solo de referencia. No forma parte del sitio publicado: no la pongas dentro de `public/` y sacala de la rama antes del merge (o movela a `docs/`, fuera del build).

Detalles de diseño que hay que respetar:

- Tipografías de Google Fonts: Inter Tight (600–900) para títulos, Inter (400–600) para texto y JetBrains Mono (400–500) para etiquetas, menú y botones.
- Colores: fondo `#E9E6E0`, fondo claro `#F3EEE4`, tarjetas `#FBF8F2`, oscuro `#121212`, texto `#111111`, secundarios `#3A3833` y `#55524C`, claro sobre oscuro `#F2EFE9` y `#CFCAC1`, bronce `#8A5A22`, bronce claro (botón sobre oscuro) `#D9A867`.
- Corte de diseño para celular en 820 px, como en la maqueta. Probá a 390 px de ancho: nada se sale de la pantalla y no hay scroll horizontal.
- La franja de ejemplos (2.1) se desplaza en bucle de derecha a izquierda y se detiene si el usuario tiene activado «reducir movimiento».
- Las tarjetas de casos reales miden lo que mide su texto (`align-items: start`), sin estirarse a la misma altura.

Si en el repo hay otras páginas o rutas (por ejemplo política de privacidad u otras), dejalas funcionando. Si alguna queda vieja o contradice la home nueva, avisale a Gonzalo antes de tocarla.

## 4. Movimiento de los textos (aprobado)

Efecto como el de noesiscreativelab.com, solo con CSS y sin librerías:

- Los títulos de sección (3.1 «¿Qué te pasó?», 4.1 «Casos reales», 5.1 «Cómo funciona», 6.2 «Soy Gonzalo de Foronda…», 7.1 «Preguntas frecuentes» y 8.1 «Contame qué pasó.») se van «pintando» de izquierda a derecha a medida que la persona baja. Técnica: `background-clip: text` con un degradado de dos tonos (color final al 50 % y el mismo color muy apagado en el otro 50 %), `background-size: 220% 100%`, y una animación de `background-position` de `100% 0` a `0 0` atada al scroll con `animation-timeline: view()` y `animation-range: entry 24% cover 62%`. Las palabras en bronce dentro de un título se pintan en bronce.
- Las tarjetas, las tres puertas de «¿Qué te pasó?», los pasos y los párrafos aparecen con un fundido y un deslizamiento de unos 26 px hacia arriba al entrar en pantalla (`animation-timeline: view()`, `animation-range: entry cover 24%`).
- El título de la portada (1.5) y su texto quedan fijos y en su color desde el inicio.
- Todo dentro de `@supports (animation-timeline: view())` y `@media (prefers-reduced-motion: no-preference)`. Sin soporte o con «reducir movimiento», el texto se ve directamente en su color final. El texto completo siempre está en el HTML.

## 5. Que Google y las IA encuentren el sitio (obligatorio)

Los rastreadores de ChatGPT, Claude y Perplexity no ejecutan JavaScript. Hoy el sitio es una SPA de React, así que esos rastreadores ven una página vacía.

- **Prerender o generación estática**: el HTML que sirve Vercel para `/` tiene que traer todos los textos de la home ya escritos (títulos, puertas, casos, pasos, sobre mí, las diez preguntas con sus respuestas, pie y descargo). Elegí la forma más simple y estable para este proyecto (por ejemplo `vite-plugin-prerender`, `vite-react-ssg` o similar) y explicale a Gonzalo en una línea qué elegiste. **Verificalo**: hacé `curl` del HTML de la vista previa y mostrá que aparecen, por ejemplo, «¿Tenés un problema legal con Estados Unidos?» y «¿Cuánto tiempo tengo para reclamar?».
- **Etiquetas**: `<html lang="es">`; `<title>` = texto 10.1; `<meta name="description">` = texto 10.2; `<link rel="canonical" href="https://elabogadodelfreelancer.com/">`.
- **Imagen para compartir** (Open Graph y Twitter): reemplazá la imagen y los textos que dejó Lovable. `og:title` = 10.1, `og:description` = 10.2, `og:image` = una imagen nueva de 1200×630 con el estilo de la web (fondo `#121212`, título «¿Tenés un problema legal con Estados Unidos?» en Inter Tight blanca con «Estados Unidos» en bronce, y la foto de Gonzalo). `twitter:card` = `summary_large_image`. Sacá cualquier rastro de Lovable (meta tags, favicon, autor).
- **Favicon** nuevo simple: «EADF» o «E» en Inter Tight negra sobre `#E9E6E0`.
- **Datos estructurados (JSON-LD)** en la home:
  - `Person`: Gonzalo de Foronda, `jobTitle` «Abogado argentino», `address` Argentina, `sameAs` con su LinkedIn (`https://www.linkedin.com/in/gonzalodeforonda/`) e Instagram (`https://www.instagram.com/elabogadodelfreelancer`).
  - `ProfessionalService` (no `LegalService` con nada que sugiera licencia en Estados Unidos): nombre «EADF · El Abogado del Freelancer», URL, `founder` Gonzalo, `areaServed` Latinoamérica y España, `availableLanguage` español, email y teléfono de WhatsApp, descripción = 10.2.
  - `FAQPage` con las diez preguntas y respuestas de 7.2 a 7.11, con el texto exacto.
  - Nada en los datos estructurados puede decir o insinuar que Gonzalo está licenciado o representa en Estados Unidos.
- **`robots.txt`**: permitir todo, incluidos GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Google-Extended y Bingbot; con la línea del sitemap.
- **`sitemap.xml`** con la home (y las demás páginas públicas que existan).
- **Después de publicar** (cuando Gonzalo apruebe el merge): guialo paso a paso para dar de alta el sitio en **Google Search Console** y en **Bing Webmaster Tools**, verificar la propiedad (meta tag o DNS, lo que sea más simple con su proveedor de dominio) y enviar el sitemap.

## 6. Enlaces

- Todos los botones «Contame tu caso» y los enlaces «Contame tu caso →»: `https://sesion.elabogadodelfreelancer.com/caso`
- WhatsApp: `https://wa.me/5491153873068` (los «Consultar →» y «Escribime por WhatsApp»).
- Guía (7.12): `https://wa.me/5491153873068?text=Hola%2C%20quiero%20la%20gu%C3%ADa%20para%20reclamar%20por%20mi%20cuenta`
- Email: `mailto:elabogadodelfreelancer@gmail.com`
- Instagram: `https://www.instagram.com/elabogadodelfreelancer` · LinkedIn: `https://www.linkedin.com/in/gonzalodeforonda/`
- Política de privacidad (9.5): por ahora `https://sesion.elabogadodelfreelancer.com/privacidad`.
- Anclas internas del menú y del pie como en la maqueta (`#que-hago`, `#casos`, `#como-funciona`, `#preguntas`, `#sobre-mi`, `#deudas`, `#contratos`, `#otros`, `#guia`). El menú fijo no debe tapar el título de la sección al saltar (`scroll-margin-top`).

## 7. Antes de pedirle a Gonzalo que mire la vista previa

Revisá vos mismo, con capturas a 1440 px y a 390 px de ancho, que:

1. Cada texto coincide letra por letra con el documento de textos (incluidas las comillas «» y los acentos).
2. Ningún elemento se sale de la pantalla en celular.
3. Todos los enlaces llevan a donde dicen.
4. El HTML servido trae los textos (prueba con `curl`).
5. El título, la descripción y la imagen para compartir son los nuevos.

Recién entonces pasale a Gonzalo el link de vista previa de Vercel y decile qué mirar.

## 8. Fuera de alcance por ahora

- Cambiar el nombre de la marca (queda «EADF · El Abogado del Freelancer»).
- Páginas por problema y política de privacidad propia: vienen después.
- No agregues textos, secciones, precios, testimonios ni nada que no esté en el documento de textos.
