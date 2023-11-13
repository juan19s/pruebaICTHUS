# PruebaICTHUS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Desarrollo de Web con Ionic o Angular y Consumo de API de Personajes de los Simpsons

El objetivo de este ejercicio es crear una aplicación web utilizando Ionic o Angular que muestre en cards los personajes de los Simpsons, consumiendo la siguiente API: [https://apisimpsons.fly.dev/api/personajes](https://apisimpsons.fly.dev/api/personajes). La documentación de la API está disponible en [https://simpsonsapi.000webhostapp.com/Documentacion](https://simpsonsapi.000webhostapp.com/Documentacion).

## Requisitos de la Web

La aplicación web debe cumplir con los siguientes requisitos:

1. Utilizar al menos un componente.
2. Utilizar al menos un servicio.
3. Incluir un archivo de environment para la configuración.
4. Incluir un buscador para encontrar un personaje.
5. Implementar paginación para listar los personajes.
6. Agregar la funcionalidad de agregar o quitar de favoritos a cada personaje.

## Estructura de la Aplicación

La aplicación debe consistir en cards que representen a cada personaje de los Simpsons. Cada tarjeta debe contener un botón que permita eliminar esa tarjeta y, por lo tanto, el personaje asociado de la vista. Además, se debe agregar un ícono que permita agregar o quitar a un personaje de la lista de favoritos.

## Pasos a seguir

A continuación, se proporcionan los pasos básicos que se deben seguir para completar el ejercicio:

1. **Configuración del Proyecto:**

   - Crear un nuevo proyecto utilizando Ionic o Angular.
   - Configurar el archivo de environment para gestionar las variables de entorno, como la URL de la API.

2. **Creación de Componente:**

   - Crear un componente que represente la card de un personaje de los Simpsons.
   - Diseñar la card de manera atractiva, incluyendo la información relevante del personaje.
   - Agregar un botón de eliminación y un ícono para agregar/quitar de favoritos.

3. **Servicio para Consumir la API:**

   - Crear un servicio que se encargue de realizar las llamadas a la API de los Simpsons para obtener la información de los personajes.

4. **Integración de Componente y Servicio:**

   - Utilizar el servicio en el componente para obtener la información de los personajes y mostrarla en las cards.
   - Implementar la paginación para mostrar los personajes en varias páginas.

5. **Funcionalidad de Eliminación:**

   - Agregar la lógica necesaria para que al hacer clic en el botón de eliminación de una tarjeta, esta se elimine de la vista.

6. **Funcionalidad de Agregar/Quitar de Favoritos:**

   - Implementar la funcionalidad de agregar o quitar de favoritos a cada personaje al hacer clic en el ícono correspondiente. El ícono debe cambiar según si el personaje está en la lista de favoritos o no.

7. **Implementación del Buscador:**

   - Agregar un componente de buscador que permita a los usuarios buscar personajes por nombre.

8. **Pruebas y Optimización:**
   - Realizar pruebas exhaustivas para asegurar el buen funcionamiento de la aplicación.
   - Optimizar el código y mejorar la interfaz de usuario según sea necesario.

## Entrega

- **Tiempo:** Tienes un plazo de 24 horas para completar este ejercicio.
- **Formato de Entrega:** La entrega debe realizarse en formato .zip, que contenga el código fuente de la aplicación. Alternativamente, puedes proporcionar un enlace al repositorio de GitHub que contenga el código.

Con estos pasos, deberías tener una aplicación funcional que cumple con los requisitos establecidos. Recuerda consultar la documentación de la API para comprender mejor cómo consumir los datos de los personajes de los Simpsons.

¡Buena suerte en tu desarrollo!

