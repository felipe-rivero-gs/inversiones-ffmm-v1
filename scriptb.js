import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

// Variables de entorno y constantes
const apiKey = process.env.HUBSPOT_API_KEY; // Usar variable de entorno
const email = 'test-email-a@testing.com'; // Reemplaza con el email del contacto

// Función para obtener el ID de contacto mediante el email
async function getContactIdByEmail(email) {
  const url = `https://api.hubapi.com/crm/v3/objects/contacts/search`;
  const requestBody = {
    filterGroups: [{
      filters: [{ propertyName: 'email', operator: 'EQ', value: email }]
    }],
    properties: ['email'],
    limit: 1
  };

  try {
    const response = await axios.post(url, requestBody, {
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` }
    });
    if (response.data.results && response.data.results.length > 0) {
      return response.data.results[0].id;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el ID del contacto:', error);
    return null;
  }
}

// Función para actualizar las propiedades del contacto
async function updateContactProperties(contactId, properties) {
  const url = `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`;
  try {
    const response = await axios.patch(url, { properties }, {
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` }
    });
    if (response.status === 200) {
      console.log('Propiedades del contacto actualizadas:', properties);
    } else {
      console.error('Error al actualizar las propiedades del contacto:', response.data);
    }
  } catch (error) {
    console.error('Error al actualizar las propiedades del contacto:', error);
  }
}

// Función para obtener la fecha y hora actual en UTC
function getCurrentDateTimeUTC() {
  const date = new Date();
  date.setHours(date.getHours() - 4); // Ajuste para UTC -4:00
  return date.toISOString();
}

// Función para manejar el paso 1 | Asignamos valores para poder validar la función
async function handleStep1() {
  const fondo = 'fondo_Defensivo';
  const formaDePago = 'Cta. Cte. Banco Security';
  const montoInvertir = 987654.321;
  const propertiesStep1 = {
    "seleccion_de_fondos_digitales": fondo, // variables {fondo_Defensivo, fondo_Protegido, fondo_Balanceado, fondo_Audaz, fondo_Jugado}
    "forma_de_pago": formaDePago, // variables {Cta. Cte. Banco Security, Saldo en caja disponible, Transferencia Electrónica}
    "monto_a_invertir": montoInvertir // Ingresar números con formato 1234.56 ("." se utiliza para decimales
  };
  const contactId = await getContactIdByEmail(email);
  if (contactId) {
    await updateContactProperties(contactId, propertiesStep1);
    console.log('Paso 1 completado.');
  }
}

// Función para manejar el paso 3
async function handleStep3() {
  const fechaOperacion = getCurrentDateTimeUTC();
  const propertiesStep3 = {
    "fecha_de_operacion": fechaOperacion
  };
  const contactId = await getContactIdByEmail(email);
  if (contactId) {
    await updateContactProperties(contactId, propertiesStep3);
    console.log('Paso 3 completado y formulario finalizado.');
  }
}

// Ejecución de los pasos
(async () => {
  await handleStep1();
  console.log('Completar el paso 2 manualmente...');
  // Simulación de espera para el paso 2
  setTimeout(async () => {
    await handleStep3();
  }, 5000); // Espera de 5 segundos para simular el paso 2
})();
