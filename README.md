# Trabajo Práctico Globalizador
## Diseño de Sitios Web 2023
### Alumno Diego Mario Maldini Freyre
## Consigna
Construcción de portal web responsive optimizado para dispositivos móviles.
## Contexto
Un cliente ha solicitado la construcción de un portal web para la venta de sus productos.
## Maquetación
### Deberá maquetar las siguientes interfaces:
- Portada del sitio web
- Pantalla de Registro
- Formulario de Login
- Detalle de artículos
- Secciones comunes:
    - Encabezado del sitio
    - Navegación del sitio
    - Pie de página o footer
    - Enlaces sociales
### Características de la maquetación
- Debe ser responsiva utilizando el Framework Bootstrap 5.
- Debe funcionar en resoluciones Pequeñas, medianas y grandes (Celular, Tablet y PC)
#### Portada del sitio
- Slide destacados:
    - Slide de fotos + titulo + descripción + precio + enlace a la sección correspondiente
- Productos destacados:
    - Listará productos de mayor importancia con la siguiente información:
        - Categoría
        - Titulo
        - Breve descripción
        - Foto
        - Precio
        - Enlace a la sección correspondiente
- Banners y promociones
#### Login
El formulario deberá contener como mínimo:
- Un checkbox para recordar contraseña
- Un Input para introducir el nombre de usuario (email)
- Un Input para introducir la contraseña
- Un botón para ingresar
- Un botón o enlace para recuperar contraseña. Al hacer clic en recuperar contraseña debe ocultarse el formulario de login y aparecer el formulario para recuperar contraseña en el mismo contenido abierto.
#### Formulario de registro
- Nombre
- Apellido
- DNI
- Email
- Fecha de nacimiento (Calendario)
- País (lista desplegable)
- Provincia (lista desplegable)
- Un checkbox para aceptar términos y condiciones
- Botón de registrarse.
Al hacer submit del formulario se deben ejecutar validaciones y mostrar errores según el caso:
- Se debe ser mayor de edad.
- Se deben aceptar términos y condiciones.
#### Detalle de producto
Los requerimientos mínimos son:
- Visualización de galería de fotos de productos
- Productos relacionados
- Opción de compra
## Componentes
Será requisito fundamental que el alumno implemente los siguientes componentes Bootstrap mínimos:
- Tooltip
- Slider
- Modal
- DropDown
- Collapse
## Exigencias para la aprobación
A los efectos de poder aprobar el trabajo, será requisito fundamental:
- Sitio web responsive para Celular, Tablet y PC.
    - Se validarán las 3 resoluciones.
- NO pueden utilizarse generadores de sitios web.
    - La maquetación deberá ser realizada por el alumno.
- Entregar todo el código fuente del proyecto.
- El trabajo práctico es individual.
- Se deberá personalizar el Theme Bootstrap.
    - No puede utilizarse el theme por defecto.
    - Se deberán aplicar reglas de estilos y colores propios para adecuar Bootstrap al diseño del sitio así como también crear estilos propios.
- Se valorará calidad y originalidad a la hora de puntuar.
- Defensa del TP aprobada.
## Detalles de presentación del TP
Deberá adjuntarse una carpeta con el proyecto web comprimida en formato ZIP, GZIP, RAR o TAR con el siguiente nombre de archivo:
> DSW-2023-TP-apellido-nombre.<extensión>

Todos los archivos necesarios para deben estar incluidos y el sitio debe funcionar en cualquier path y en cualquier lugar.
No se deben utilizar rutas absolutas. (ej.: Referencias a carpetas del alumno.)
En caso de ser necesario, se podrá agregar un archivo readme.txt, .doc o lo que el alumno prefiera con aclaraciones al profesor.