# IS2_2023-1

Unit testing proyecto anteriormente ahora actualizado para test de aceptación, utilizamos el proyecto realizado el semestre anterior en Ingeniería de software II. Esta aplicación web fue realizada en React en front end, Flask para la API/backend y SQLAlchemy para la base de datos.

En este entrega, nos enfocamos en hacer test de aceptación utilizando Cypress.

# Instrucciones de testing

## Pre requerimientos (backend y frontend):
Tener python instalado y como variable de entorno
Instalar node js ultima versión estable. https://nodejs.org/en
Clonar el proyecto con `git clone https://github.com/dimaldonado/IS2_2023_testing/edit/main/`

Una vez ubicado en la carpeta raíz del proyecto (IS2_2023_testing), en la terminal ejecutar:

### Activar ambiente virtual:
`.\IS2_2023_testing\is2_backend\venv\Scripts\activate`

### Ejecutar API:
Asumiendo que se encuentra en la carpeta raíz IS2_2023_testing ejecutar `python is2_backend\lib\api\dbAPI.py`
## Ejecución de cypress:
Abrir otra terminal, en la raíz del proyecto (IS2_2023_testing).
Primero que nada ubicarse en la carpeta del frontend utilizando `cd is2_frontend`
Instalar dependencias con `npm install`
Abrir Cypress utilizando `npx cypress open`

## Ejecución de tests:
Una vez abierto cypress la GUI le hará seleccionar entre Component test y E2E tests, seleccionar E2E testing
![image](https://github.com/dimaldonado/IS2_2023_testing/assets/28035663/84225e29-ac92-4c58-9dbb-1a20cbd591e8)

A continuación elegir el browser para hacer las pruebas automatizadas (por defecto Chrome) 
![image](https://github.com/dimaldonado/IS2_2023_testing/assets/28035663/243f29f0-d185-4673-bfb7-d043d2253f0e)


Luego en 'Specs' seleccionar cada test para su revisión.
Los detalles y comentarios de cada test se encuentran en la siguiente ruta del proyecto 'IS2_2023_testing\is2_frontend\cypress\e2e'




