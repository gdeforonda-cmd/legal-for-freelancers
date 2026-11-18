**EADF · Textos de la home nueva v3**

Textos aprobados el 18 de noviembre de 2026 y ya aplicados en la maqueta
(lienzo de Design, versión del 18-nov). Reemplazan por completo a la v2
del 14 de noviembre. Cada texto tiene un número. Para pedir un cambio,
decime el número y cómo querés que quede (por ejemplo, «3.4: cambiar
por...»).

*En la web, varios títulos se ven en mayúsculas porque así los muestra
el diseño. Acá van escritos normal. Las notas en gris y cursiva son
indicaciones de diseño o de enlace, no texto de la web.*

# **Qué cambió respecto de la v2**

Mensaje nuevo, con el giro del negocio. La home habla de cualquier
problema legal con Estados Unidos, no solo de deudas, y casi no menciona
los tribunales de montos bajos. No se mencionan firmas asociadas.

Primera pantalla con el problema del cliente, la promesa de ayuda, tu
foto y un solo botón. Salió el botón secundario «Cómo funciona».

Salió el bloque oscuro «Lo que poca gente sabe». Esa explicación va a
redes y a las páginas por problema.

Las cuatro filas de servicios pasaron a tres puertas (te deben plata o
no te cumplieron, estás por firmar un contrato, otro problema legal con
Estados Unidos). La guía quedó como una línea chica al final de las
preguntas frecuentes.

Los casos reales suben, antes de la explicación, sin la bajada «Contados
con permiso». En los textos de los casos salió «tribunal de montos
bajos» y «carta de pago» pasó a «se le pidió el pago por escrito».

«Cómo es el reclamo, paso a paso» (cinco pasos) pasó a «Cómo funciona»
(tres pasos).

Sobre mí suma un segundo párrafo que dice quién sos, qué hacés, para
quién y desde dónde, pensado para que las IA te encuentren.

Preguntas frecuentes: salió «¿Qué es small claims court?»; se sumaron
«¿Cómo empieza?» y «¿Cuánto cuesta?»; se reescribieron las de abogado,
viaje, duración y prueba. Quedan diez.

Descargo del pie: salió la frase «En los reclamos, quien presenta el
caso es la propia persona».

Se suman los textos para Google y las IA (título de la pestaña y
descripción), sección 10.

# **Movimiento (para la implementación en GitHub)**

Los títulos de cada sección (3.1, 4.1, 5.1, 6.2, 7.1 y 8.1) se van
«pintando» de izquierda a derecha a medida que la persona baja por la
página, como en la web de Noesis. Empiezan en un gris apagado y terminan
en su color. Las tarjetas de casos, las puertas de «¿Qué te pasó?» y los
párrafos aparecen con un fundido y un leve deslizamiento hacia arriba al
entrar en pantalla.

El título de la primera pantalla (1.5) y su texto quedan fijos y en su
color desde el inicio. Los efectos se hacen solo con CSS
(animation-timeline: view()), sin librerías, sobre el texto completo en
el HTML, así Google y las IA leen todo desde el primer segundo. En
navegadores sin soporte y cuando la persona tiene activado «reducir
movimiento», los textos se ven directamente en su color final.

# **Pendientes**

Política de privacidad (9.5): la web enlaza por ahora a la de la
landing. Falta sumarle la web a esa política y los puntos para quienes
escriben desde la Unión Europea.

Formulario de la landing (/caso): agregar debajo del botón «Enviar mi
caso» la línea «Al enviar, aceptas la política de privacidad», con el
link a la política. Va en tú, como el resto de la landing.

Año del caso de José (4.14): está en 2026. Confirmalo.

Nombre de la marca (1.1 y 9.1): queda «EADF · El Abogado del Freelancer»
hasta que decidas el nuevo.

# **Textos**

<table>
<colgroup>
<col style="width: 8%" />
<col style="width: 24%" />
<col style="width: 67%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>N.º</strong></th>
<th><strong>Qué es</strong></th>
<th><strong>Texto en la web</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td colspan="3"><strong>1. Barra superior y primera
pantalla</strong></td>
</tr>
<tr class="even">
<td><strong>1.1</strong></td>
<td>Marca (arriba a la izquierda)</td>
<td><p>EADF · El Abogado del Freelancer</p>
<p><em>En celular se ve solo «EADF».</em></p></td>
</tr>
<tr class="odd">
<td><strong>1.2</strong></td>
<td>Menú</td>
<td><p>Qué hago · Casos · Cómo funciona · Preguntas · Sobre mí</p>
<p><em>No aparece en celular.</em></p></td>
</tr>
<tr class="even">
<td><strong>1.3</strong></td>
<td>Botón de la barra</td>
<td><p>Contame tu caso</p>
<p><em>Lleva al formulario de la landing
(sesion.elabogadodelfreelancer.com/caso).</em></p></td>
</tr>
<tr class="odd">
<td><strong>1.4</strong></td>
<td>Etiqueta junto a tu foto</td>
<td>Gonzalo de Foronda · Abogado argentino</td>
</tr>
<tr class="even">
<td><strong>1.5</strong></td>
<td>Título principal</td>
<td><p>¿Tenés un problema legal con Estados Unidos?</p>
<p><em>«Estados Unidos» va en color bronce, con la misma letra del
título.</em></p></td>
</tr>
<tr class="odd">
<td><strong>1.6</strong></td>
<td>Texto debajo del título</td>
<td><p>Si una empresa o una persona de Estados Unidos no te pagó, no
cumplió lo acordado o tenés cualquier otro problema legal con ese país,
contame qué pasó. Analizo tu caso, te explico qué se puede hacer y te
acompaño en cada paso.</p>
<p><em>«te acompaño en cada paso.» va en negrita.</em></p></td>
</tr>
<tr class="even">
<td><strong>1.7</strong></td>
<td>Nota al costado</td>
<td><p>El análisis de tu caso no tiene costo.</p>
<p><em>No aparece en celular.</em></p></td>
</tr>
<tr class="odd">
<td><strong>1.8</strong></td>
<td>Botón principal</td>
<td><p>Contame tu caso</p>
<p><em>Único botón de la primera pantalla. Lleva al formulario de la
landing.</em></p></td>
</tr>
<tr class="even">
<td colspan="3"><strong>2. Franja que se desplaza</strong></td>
</tr>
<tr class="odd">
<td><strong>2.1</strong></td>
<td>Ejemplos de problemas</td>
<td><p>Trabajo que no te pagaron · Contratos que te piden firmar · Meses
sin cobrar · Bonos y preavisos impagos · Ventas que no te pagaron ·
Compras que nunca llegaron · Depósitos y reembolsos · Préstamos ·
Contratos incumplidos · Otros problemas legales con Estados Unidos</p>
<p><em>Se mueve de derecha a izquierda.</em></p></td>
</tr>
<tr class="even">
<td colspan="3"><strong>3. ¿Qué te pasó?</strong></td>
</tr>
<tr class="odd">
<td><strong>3.1</strong></td>
<td>Título</td>
<td>¿Qué te pasó?</td>
</tr>
<tr class="even">
<td><strong>3.2</strong></td>
<td>Bajada</td>
<td>Buscá la frase que se parece a tu situación. Si la tuya no está,
escribime igual.</td>
</tr>
<tr class="odd">
<td><strong>3.3</strong></td>
<td>Puerta 1 · Nombre</td>
<td>Te deben plata o no te cumplieron</td>
</tr>
<tr class="even">
<td><strong>3.4</strong></td>
<td>Puerta 1 · Descripción</td>
<td>Trabajo, ventas, compras, depósitos, préstamos o cualquier acuerdo
que no cumplieron desde Estados Unidos. Analizo tu caso, te digo si se
puede reclamar y te acompaño hasta que se resuelva.</td>
</tr>
<tr class="odd">
<td><strong>3.5</strong></td>
<td>Puerta 1 · Frase del cliente</td>
<td>«Trabajé meses para una empresa de Estados Unidos y me dejaron de
pagar.»</td>
</tr>
<tr class="even">
<td><strong>3.6</strong></td>
<td>Puerta 1 · Enlace</td>
<td><p>Contame tu caso →</p>
<p><em>Lleva al formulario de la landing.</em></p></td>
</tr>
<tr class="odd">
<td><strong>3.7</strong></td>
<td>Puerta 2 · Nombre</td>
<td>Estás por firmar un contrato</td>
</tr>
<tr class="even">
<td><strong>3.8</strong></td>
<td>Puerta 2 · Descripción</td>
<td>Te mandaron un contrato en inglés con una empresa de Estados Unidos.
Lo leo antes de que firmes, te marco las cláusulas que te perjudican y
te ayudo a proponer cambios. Si necesitás tus propios contratos para
trabajar o contratar con Estados Unidos, también los redacto.</td>
</tr>
<tr class="odd">
<td><strong>3.9</strong></td>
<td>Puerta 2 · Frase del cliente</td>
<td>«Me dieron dos días para firmar y tiene una cláusula de
arbitraje.»</td>
</tr>
<tr class="even">
<td><strong>3.10</strong></td>
<td>Puerta 2 · Enlace</td>
<td><p>Consultar →</p>
<p><em>Abre WhatsApp.</em></p></td>
</tr>
<tr class="odd">
<td><strong>3.11</strong></td>
<td>Puerta 3 · Nombre</td>
<td>Otro problema legal con Estados Unidos</td>
</tr>
<tr class="even">
<td><strong>3.12</strong></td>
<td>Puerta 3 · Descripción</td>
<td>No todo es una deuda o un contrato. Si tenés cualquier otro problema
legal con Estados Unidos y no sabés por dónde empezar, contame qué pasó
y te digo cómo seguir.</td>
</tr>
<tr class="odd">
<td><strong>3.13</strong></td>
<td>Puerta 3 · Frase del cliente</td>
<td>«Tengo un problema en Estados Unidos y no sé a quién recurrir desde
acá.»</td>
</tr>
<tr class="even">
<td><strong>3.14</strong></td>
<td>Puerta 3 · Enlace</td>
<td><p>Contame tu caso →</p>
<p><em>Lleva al formulario de la landing.</em></p></td>
</tr>
<tr class="odd">
<td colspan="3"><strong>4. Casos reales</strong></td>
</tr>
<tr class="even">
<td><strong>4.1</strong></td>
<td>Título</td>
<td><p>Casos reales</p>
<p><em>«reales» va en color bronce, con la misma letra del
título.</em></p></td>
</tr>
<tr class="odd">
<td><strong>4.2</strong></td>
<td>Caso 1 · Etiqueta</td>
<td><p>Reclamo · Nueva York · 2026</p>
<p><em>Primera fila: reclamos. Cada tarjeta mide lo que mide su
texto.</em></p></td>
</tr>
<tr class="even">
<td><strong>4.3</strong></td>
<td>Caso 1 · Nombre</td>
<td>Joel, desde Bolivia</td>
</tr>
<tr class="odd">
<td><strong>4.4</strong></td>
<td>Caso 1 · Texto</td>
<td>Una agencia de Nueva York le dejó de pagar su trabajo. Presentó el
reclamo ante un tribunal de Nueva York sin moverse de Bolivia, y ya
tiene fecha de audiencia.</td>
</tr>
<tr class="even">
<td><strong>4.5</strong></td>
<td>Caso 2 · Etiqueta</td>
<td>Reclamo · Massachusetts · 2026</td>
</tr>
<tr class="odd">
<td><strong>4.6</strong></td>
<td>Caso 2 · Nombre</td>
<td>Alejandro, desde Argentina</td>
</tr>
<tr class="even">
<td><strong>4.7</strong></td>
<td>Caso 2 · Texto</td>
<td>Cuando terminó su relación con una empresa de Massachusetts, le
quedaron pagos sin cobrar. Primero se le pidió el pago por escrito. Como
no pagaron, presentó el reclamo, y la audiencia va a ser de manera
remota desde Argentina.</td>
</tr>
<tr class="odd">
<td><strong>4.8</strong></td>
<td>Caso 3 · Etiqueta</td>
<td>Reclamo · Florida · 2026</td>
</tr>
<tr class="even">
<td><strong>4.9</strong></td>
<td>Caso 3 · Nombre</td>
<td>Pablo, desde Argentina</td>
</tr>
<tr class="odd">
<td><strong>4.10</strong></td>
<td>Caso 3 · Texto</td>
<td>Pagó mercadería a un vendedor de Florida y nunca se la enviaron. Ya
se le pidió el pago por escrito y el siguiente paso es presentar el
reclamo.</td>
</tr>
<tr class="even">
<td><strong>4.11</strong></td>
<td>Caso 4 · Etiqueta</td>
<td><p>Revisión de contrato · 2026</p>
<p><em>Segunda fila: contratos.</em></p></td>
</tr>
<tr class="odd">
<td><strong>4.12</strong></td>
<td>Caso 4 · Nombre</td>
<td>Nicolás, desde Argentina</td>
</tr>
<tr class="even">
<td><strong>4.13</strong></td>
<td>Caso 4 · Texto</td>
<td>Le dieron dos días para firmar un acuerdo de terminación. Lo primero
que le recomendé fue asegurarse de que no quedara ninguna cláusula de
arbitraje que le cerrara la puerta a reclamar.</td>
</tr>
<tr class="odd">
<td><strong>4.14</strong></td>
<td>Caso 5 · Etiqueta</td>
<td><p>Contratos a medida · 2026</p>
<p><em>Año pendiente de confirmar.</em></p></td>
</tr>
<tr class="even">
<td><strong>4.15</strong></td>
<td>Caso 5 · Nombre</td>
<td>José, desde España</td>
</tr>
<tr class="odd">
<td><strong>4.16</strong></td>
<td>Caso 5 · Texto</td>
<td>Iba a sumar colaboradores a su empresa y necesitaba contratos que lo
protegieran. Le redacté los contractor agreements.</td>
</tr>
<tr class="even">
<td colspan="3"><strong>5. Cómo funciona</strong></td>
</tr>
<tr class="odd">
<td><strong>5.1</strong></td>
<td>Título</td>
<td>Cómo funciona</td>
</tr>
<tr class="even">
<td><strong>5.2</strong></td>
<td>Bajada</td>
<td>Tres pasos. Vos me contás, yo te digo cómo seguir.</td>
</tr>
<tr class="odd">
<td><strong>5.3</strong></td>
<td>Paso 1 · Título</td>
<td>Me contás qué pasó</td>
</tr>
<tr class="even">
<td><strong>5.4</strong></td>
<td>Paso 1 · Texto</td>
<td>Juntás lo que tengas, como el contrato, las facturas, los emails o
los mensajes, y me escribís. Analizo tu caso y te digo si es viable. No
tiene costo.</td>
</tr>
<tr class="odd">
<td><strong>5.5</strong></td>
<td>Paso 2 · Título</td>
<td>Reclamamos por escrito</td>
</tr>
<tr class="even">
<td><strong>5.6</strong></td>
<td>Paso 2 · Texto</td>
<td>Antes de ir a un tribunal, se le pide a la empresa o a la persona
que cumpla. Muchas veces el problema se resuelve en este paso.</td>
</tr>
<tr class="odd">
<td><strong>5.7</strong></td>
<td>Paso 3 · Título</td>
<td>Si no responde, seguimos adelante</td>
</tr>
<tr class="even">
<td><strong>5.8</strong></td>
<td>Paso 3 · Texto</td>
<td>El reclamo se presenta en Estados Unidos, donde corresponde según el
caso. Te acompaño en cada paso hasta que se resuelva.</td>
</tr>
<tr class="odd">
<td colspan="3"><strong>6. Sobre mí</strong></td>
</tr>
<tr class="even">
<td><strong>6.1</strong></td>
<td>Etiqueta</td>
<td>Sobre mí</td>
</tr>
<tr class="odd">
<td><strong>6.2</strong></td>
<td>Título</td>
<td><p>Soy Gonzalo de Foronda, abogado argentino.</p>
<p><em>«abogado argentino.» va en color bronce, con la misma letra del
título.</em></p></td>
</tr>
<tr class="even">
<td><strong>6.3</strong></td>
<td>Párrafo 1</td>
<td>Viví varios años en Estados Unidos y trabajé para firmas de abogados
de allá. Lo sigo haciendo. Desde ese lugar vi algo que se repite. Mucha
gente no sabe cómo reclamar cuando le deben dinero o no le cumplen lo
acordado desde Estados Unidos, y termina dejándolo pasar.</td>
</tr>
<tr class="odd">
<td><strong>6.4</strong></td>
<td>Párrafo 2</td>
<td>Desde Argentina ayudo a personas y pequeñas empresas de
Latinoamérica y España que tienen un problema legal con Estados Unidos.
Una empresa o una persona que no les pagó, un contrato que no se
cumplió, un contrato que les piden firmar o cualquier otra cuestión
legal con ese país. Trabajo de manera remota y en español, y acompaño a
cada cliente desde el primer análisis hasta el final de su caso.</td>
</tr>
<tr class="even">
<td colspan="3"><strong>7. Preguntas frecuentes</strong></td>
</tr>
<tr class="odd">
<td><strong>7.1</strong></td>
<td>Título</td>
<td>Preguntas frecuentes</td>
</tr>
<tr class="even">
<td><strong>7.2</strong></td>
<td>Pregunta 1</td>
<td><p><strong>¿Puedo reclamarle a una empresa de Estados Unidos si vivo
en otro país?</strong></p>
<p>Sí, desde cualquier país. Lo que importa es que quien te debe o te
incumplió esté en Estados Unidos.</p></td>
</tr>
<tr class="odd">
<td><strong>7.3</strong></td>
<td>Pregunta 2</td>
<td><p><strong>¿Qué tipo de problemas tomás?</strong></p>
<p>Trabajo o meses que no te pagaron, bonos y preavisos, ventas que no
te pagaron, compras que nunca llegaron, depósitos, reembolsos, préstamos
y contratos que no se cumplieron. También contratos para revisar antes
de firmar o para redactar, y otros problemas legales con Estados Unidos.
Son ejemplos. Si no sabés si lo tuyo entra, escribime.</p></td>
</tr>
<tr class="even">
<td><strong>7.4</strong></td>
<td>Pregunta 3</td>
<td><p><strong>¿Necesito contratar un abogado en Estados
Unidos?</strong></p>
<p>Primero contame tu caso. Muchos problemas se resuelven sin que tengas
que contratar un abogado allá. Si tu caso necesita algo más, te lo digo
cuando lo analizo, y lo vemos juntos.</p></td>
</tr>
<tr class="odd">
<td><strong>7.5</strong></td>
<td>Pregunta 4</td>
<td><p><strong>¿Tengo que viajar a Estados Unidos?</strong></p>
<p>Depende del caso. Muchos se pueden llevar de manera remota, sin
viajar.</p></td>
</tr>
<tr class="even">
<td><strong>7.6</strong></td>
<td>Pregunta 5</td>
<td><p><strong>¿Cómo empieza?</strong></p>
<p>Me escribís por el formulario o por WhatsApp, me contás qué pasó y me
mandás lo que tengas. Leo tu caso y te respondo con un análisis y los
siguientes pasos.</p></td>
</tr>
<tr class="odd">
<td><strong>7.7</strong></td>
<td>Pregunta 6</td>
<td><p><strong>¿Cuánto dura?</strong></p>
<p>Depende del caso. Muchas veces el reclamo por escrito lo resuelve en
pocas semanas. Si hay que presentar el reclamo, el tiempo depende del
estado y del tipo de problema, y te doy una idea cuando analizo tu
caso.</p></td>
</tr>
<tr class="even">
<td><strong>7.8</strong></td>
<td>Pregunta 7</td>
<td><p><strong>¿Cuánto tiempo tengo para reclamar?</strong></p>
<p>En general, de 2 a 10 años, según el estado y el tipo de reclamo.
Igual, cuanto antes empieces, mejor.</p></td>
</tr>
<tr class="odd">
<td><strong>7.9</strong></td>
<td>Pregunta 8</td>
<td><p><strong>¿Qué me sirve de prueba?</strong></p>
<p>El contrato, las facturas aunque las hayas emitido vos, los emails,
los mensajes, los pagos anteriores y, en muchos casos,
testigos.</p></td>
</tr>
<tr class="even">
<td><strong>7.10</strong></td>
<td>Pregunta 9</td>
<td><p><strong>Mi contrato tiene una cláusula de arbitraje. ¿Puedo
reclamar igual?</strong></p>
<p>Depende de la cláusula. Si todavía no firmaste, pedí que también se
pueda reclamar en los tribunales, porque en reclamos chicos el arbitraje
puede costar casi lo mismo que la deuda.</p></td>
</tr>
<tr class="odd">
<td><strong>7.11</strong></td>
<td>Pregunta 10</td>
<td><p><strong>¿Cuánto cuesta?</strong></p>
<p>El análisis de tu caso no tiene costo. Lo demás depende del tipo de
problema y te lo explico con claridad antes de empezar, para que decidas
sabiendo cómo se cobra.</p></td>
</tr>
<tr class="even">
<td><strong>7.12</strong></td>
<td>Línea chica al final de las preguntas (guía)</td>
<td><p>¿Te deben un monto bajo y preferís reclamarlo por tu cuenta?
Tengo una guía paso a paso. Pedila por WhatsApp →</p>
<p><em>Abre WhatsApp con el mensaje «Hola, quiero la guía para reclamar
por mi cuenta».</em></p></td>
</tr>
<tr class="odd">
<td colspan="3"><strong>8. Cierre</strong></td>
</tr>
<tr class="even">
<td><strong>8.1</strong></td>
<td>Título</td>
<td>Contame qué pasó.</td>
</tr>
<tr class="odd">
<td><strong>8.2</strong></td>
<td>Texto</td>
<td>Te digo qué se puede hacer. El análisis no tiene costo.</td>
</tr>
<tr class="even">
<td><strong>8.3</strong></td>
<td>Botón 1</td>
<td><p>Contame tu caso</p>
<p><em>Lleva al formulario de la landing.</em></p></td>
</tr>
<tr class="odd">
<td><strong>8.4</strong></td>
<td>Botón 2</td>
<td><p>Escribime por WhatsApp</p>
<p><em>Abre WhatsApp.</em></p></td>
</tr>
<tr class="even">
<td colspan="3"><strong>9. Pie de página</strong></td>
</tr>
<tr class="odd">
<td><strong>9.1</strong></td>
<td>Marca</td>
<td>EADF · El Abogado del Freelancer</td>
</tr>
<tr class="even">
<td><strong>9.2</strong></td>
<td>Columna «Qué hago»</td>
<td><p>Te deben plata o no te cumplieron · Contratos · Otros problemas
legales con Estados Unidos · Guía para reclamar por tu cuenta</p>
<p><em>Cada línea baja a su sección. La guía baja a la línea
7.12.</em></p></td>
</tr>
<tr class="odd">
<td><strong>9.3</strong></td>
<td>Columna Contacto</td>
<td><p>elabogadodelfreelancer@gmail.com · WhatsApp +54 9 11 5387-3068 ·
Instagram · LinkedIn</p>
<p><em>Instagram y LinkedIn son enlaces. LinkedIn lleva a tu perfil
personal.</em></p></td>
</tr>
<tr class="even">
<td><strong>9.4</strong></td>
<td>Descargo</td>
<td>Gonzalo de Foronda es abogado argentino, residente del mismo país.
No está licenciado en ningún estado de Estados Unidos. Sus servicios no
constituyen representación legal en Estados Unidos. La información de
este sitio es general y no reemplaza el análisis de un caso
concreto.</td>
</tr>
<tr class="odd">
<td><strong>9.5</strong></td>
<td>Línea final</td>
<td><p>© 2026 EADF · Política de privacidad</p>
<p><em>Por ahora enlaza a la política de la landing
(sesion.elabogadodelfreelancer.com/privacidad).</em></p></td>
</tr>
<tr class="even">
<td colspan="3"><strong>10. Textos para Google y las IA (no se ven en la
página)</strong></td>
</tr>
<tr class="odd">
<td><strong>10.1</strong></td>
<td>Título de la pestaña</td>
<td>Problemas legales con Estados Unidos, resueltos desde tu país |
Gonzalo de Foronda, abogado argentino</td>
</tr>
<tr class="even">
<td><strong>10.2</strong></td>
<td>Descripción para buscadores</td>
<td>¿Vivís en Latinoamérica o España y tenés un problema legal con
Estados Unidos? Una deuda, un contrato que no se cumplió o un contrato
por firmar. Gonzalo de Foronda, abogado argentino, analiza tu caso sin
costo.</td>
</tr>
</tbody>
</table>
