
# HubSpot Inversiones

Este proyecto se encarga de actualizar las propiedades de contactos en HubSpot basándose en eventos específicos. Utiliza la API de HubSpot para buscar y actualizar contactos de manera automatizada.

## Descripción

El script `scripta.js` realiza las siguientes acciones:

1. **Buscar el ID de un contacto** usando su correo electrónico.
2. **Actualizar las propiedades del contacto** con valores proporcionados en el script.

## Requisitos

- Node.js
- npm
- Cuenta de HubSpot con acceso a la API

## Instalación

1. **Configurar el entorno**:

   - Asegúrate de tener Node.js y npm instalados en tu sistema.
   - Abre una terminal y navega a la carpeta del proyecto.
2. **Inicializar el proyecto de Node.js**:

   - En la terminal, ejecuta:
     ```bash
     npm init -y
     ```
3. **Instalar dependencias**:

   - En la terminal, ejecuta:
     ```bash
     npm install node-fetch dotenv
     ```
4. **Configurar variables de entorno**:

   - Crea un archivo `.env` en la raíz del proyecto y añade tu clave API de HubSpot:

## Uso

1. **Editar `scripta.js`**:

   - Asegúrate de que el correo electrónico y las propiedades a actualizar sean correctas:
     ```javascript
     const email = 'test-email-a@testing.com'; // Correo del contacto relacionado al evento
     const propertiesToUpdate = {
       "seleccion_de_fondos_digitales": "fondo-Defensivo" // Propiedades a actualizar con sus valores correspondientes
     };
     ```
2. **Ejecutar el script**:

   - En la terminal, ejecuta:
     ```bash
     node scripta.js
     ```

## URLs usadas

1. **Buscar el ID del contacto**:
   ```http
   POST https://api.hubapi.com/crm/v3/objects/contacts/search
   ```
