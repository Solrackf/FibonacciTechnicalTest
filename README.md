# Fibonacci Protección Technical Test

## Descripción
Este proyecto implementa una aplicación web que genera series de Fibonacci utilizando una API RESTful. La serie se calcula en el servidor y se muestra en el cliente utilizando React y Redux Toolkit.

## Instalación
Para comenzar, asegúrate de tener Node.js y npm instalados. Luego, sigue estos pasos:

1. Clona este repositorio.
2. Instala las dependencias usando npm:

npm install

## Configuración
Asegúrate de tener un servidor local ejecutándose en `http://localhost:3001` para la API del servidor. Este servidor proporciona la serie de Fibonacci basada en la hora actual.

## Uso
Para iniciar la aplicación en modo de desarrollo, usa el siguiente comando:

npm start

Esto iniciará la aplicación en tu navegador predeterminado en `http://localhost:3000`.

## Scripts Disponibles
- `npm start`: Inicia la aplicación en modo de desarrollo.
- `npm build`: Construye la aplicación para producción.
- `npm test`: Ejecuta pruebas utilizando Jest.
- `npm eject`: Expone las configuraciones de herramientas de React para personalización avanzada.

## API de Fibonacci
La serie de Fibonacci se genera haciendo una solicitud GET a `http://localhost:3001/api/fibonacci`, que devuelve un JSON con la serie calculada.

## Documentación
La documentación de la API está disponible en `http://localhost:3001/api-docs`, donde se puede explorar utilizando Swagger UI.

## Tecnologías Utilizadas
- React
- Redux Toolkit
- Axios
- Jest (para pruebas)
- Tailwind CSS (para estilos)

## Contribución
Si deseas contribuir a este proyecto, por favor crea un pull request con tus cambios propuestos.

## Licencia
Este proyecto es privado y no está licenciado para distribución pública.
