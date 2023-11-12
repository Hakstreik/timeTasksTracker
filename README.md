# Manage Tasks

## Descripción
Manage Tasks es una aplicación diseñada para rastrear el tiempo dedicado a diversas tareas, representadas visualmente por imágenes. Cada imagen simboliza una tarea diferente, y la aplicación se encarga de guardar el tiempo dedicado a cada una de ellas.

## Funcionalidad
Los usuarios pueden iniciar o detener temporizadores asociados a cada tarea mediante clics en las imágenes correspondientes o presionando la tecla asignada a cada tarea. Para reiniciar el tiempo de una tarea a cero, se utiliza un botón de reset.

## Instalación y Configuración
1. Asegúrate de tener instalado Node.js, preferiblemente la versión 18 (aunque puede funcionar con otras versiones).
2. Clona o descarga el repositorio del proyecto.
3. Navega a la carpeta del proyecto y ejecuta `npm start` para iniciar la aplicación.

## Uso
1. Agrega imágenes a la carpeta `/src/imagenes`. Cada imagen representa una tarea diferente.
2. Abre la aplicación. Las imágenes cargadas aparecerán en pantalla.
3. Haz clic en una imagen o presiona la tecla correspondiente para iniciar/detener el temporizador de esa tarea.
4. Usa el botón de reset para poner a cero el temporizador de una tarea.

## Contribuciones y Licencia
Este proyecto es de código abierto y las contribuciones son bienvenidas. La aplicación está bajo una licencia libre.

## Explicación del Código

### Funciones Clave
- `loadInitialFigures`: Carga las figuras iniciales y sus estados desde el almacenamiento local.
- `toggleTimer`: Inicia o detiene el temporizador de una figura específica.
- `stopAllTimers`: Detiene todos los temporizadores en ejecución.
- `resetTimer`: Reinicia el temporizador de una figura específica.
- `formatTime`: Formatea el tiempo de seguimiento en horas, minutos y segundos.

### Flujo del Código
1. **Inicialización de Estados**: Las figuras y sus estados (como el tiempo transcurrido) se inicializan utilizando `useState`.
2. **Manejo de Eventos de Teclado**: Se utiliza `useEffect` para agregar y eliminar event listeners que manejan la interacción del usuario con el teclado.
3. **Actualización de Temporizadores**: Otro `useEffect` se encarga de actualizar los temporizadores cada segundo.
4. **Persistencia de Datos**: Los estados de las figuras se guardan en el almacenamiento local para mantener el seguimiento entre sesiones.

## Agradecimientos

- Este proyecto fue desarrollado con la asistencia de ChatGPT de OpenAI, que proporcionó orientación y soporte en la generación de código y documentación.
