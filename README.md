# HubSpot Inversiones

Este proyecto se encarga de actualizar las propiedades de contactos en HubSpot basándose en eventos específicos. Utiliza la API de HubSpot para buscar y actualizar contactos.

# HubSpot API Integration Script

Este script permite enviar valores específicos de propiedades a una cuenta de HubSpot a través de su API. Está diseñado para ejecutarse en tu PC y facilitar la integración con HubSpot. (Se debe trabajar la reversión del código para que pueda funcionar en la APP privada de Inversiones)

## Requisitos

- Node.js
- npm (Node Package Manager)
- Cuenta de HubSpot con una API Key
- Archivo `.env` con la variable `HUBSPOT_API_KEY` configurada

## Instalación

1. Clona este repositorio o copia el script en tu proyecto.
2. Instala las dependencias necesarias:

   ```sh
   npm install dotenv axios
   ```
3. Crea un archivo `.env` en la raíz del proyecto y añade tu API Key de HubSpot:

   ```env
   HUBSPOT_API_KEY=tu_api_key_aqui
   ```

## Uso

Asegúrate de reemplazar las siguientes variables con los valores adecuados de la sesión del usuario:

- `email`
- `apiKey`
- `seleccion_de_fondos_digitales`
- `forma_de_pago`
- `monto_a_invertir`

### Ejecución del Script

1. Configura las variables necesarias en el script.
2. Ejecuta el script con Node.js:
   ```sh
   node scriptb.js
   ```

### Funciones Principales

- **getContactIdByEmail(email)**: Busca y devuelve el ID del contacto basado en el email proporcionado.
- **updateContactProperties(contactId, properties)**: Actualiza las propiedades del contacto especificado.
- **getCurrentDateTimeUTC()**: Obtiene la fecha y hora actual en formato UTC ajustado.

### Manejo de Pasos

- **handleStep1()**: Maneja la actualización de propiedades específicas para el paso 1.
- **handleStep3()**: Maneja la actualización de propiedades específicas para el paso 3.
