# IS2_2023-1

Unit testing proyecto anteriormente ahora actualizado para test de aceptación, utilizamos el proyecto realizado el semestre anterior en Ingeniería de software II. Esta aplicación web fue realizada en React en front end, Flask para la API/backend y SQLAlchemy para la base de datos.

En este entrega, nos enfocamos en hacer test de aceptación utilizando Cypress.

# Instrucciones de testing

## Pre requerimientos (backend y frontend):
* Tener python instalado y como variable de entorno
* Instalar node js ultima versión estable. https://nodejs.org/en
* Clonar el proyecto con `git clone https://github.com/dimaldonado/IS2_2023_testing/edit/main/`

### Activar ambiente virtual:
Una vez ubicado en la carpeta raíz del proyecto (IS2_2023_testing), en la terminal ejecutar:
`.\IS2_2023_testing\is2_backend\venv\Scripts\activate`

### Ejecutar API:
Asumiendo que se encuentra en la carpeta raíz IS2_2023_testing ejecutar `python is2_backend\lib\api\dbAPI.py`

### Ejecución del frontend:
* Abrir otra terminal, en la raíz del proyecto (IS2_2023_testing).
* Primero que nada ubicarse en la carpeta del frontend utilizando `cd is2_frontend`
* Instalar dependencias con `npm install`
* Ejecutar el front end con `npm start`
## Ejecución de cypress:
* Abrir otra terminal, en la raíz del proyecto (IS2_2023_testing).
* Primero que nada ubicarse en la carpeta del frontend utilizando `cd is2_frontend`
* Abrir Cypress utilizando `npx cypress open`

## Ejecución de tests:
Una vez abierto cypress la GUI le hará seleccionar entre Component test y E2E tests, seleccionar E2E testing
![image](https://github.com/dimaldonado/IS2_2023_testing/assets/28035663/84225e29-ac92-4c58-9dbb-1a20cbd591e8)

A continuación elegir el browser para hacer las pruebas automatizadas (por defecto Chrome) 
![image](https://github.com/dimaldonado/IS2_2023_testing/assets/28035663/243f29f0-d185-4673-bfb7-d043d2253f0e)


Luego en 'Specs' seleccionar cada test para su revisión.
Los detalles y comentarios de cada test se encuentran en la siguiente ruta del proyecto 'IS2_2023_testing\is2_frontend\cypress\e2e' y de cual es su relación con cada historia de usuario. Las historias de usuario cubiertas por los tests son:
* bugListFilters.cy.js // (DS4) Como depurador quiero tener una lista de los bugs que se me han asignado
//Observacion: en el titulo no entra la parte de "como depurador debo poder..." por que sino excede la cantidad de caracteres
//CRITERIO DE ACEPTACION:
//en la vista de desarrollador se aprecia una seccion con un listado compacto de los reportes de bugs, 
//por los cuales se puede hacer scroll, y aplicar diversos filtros. Estos tickets deben hacer display de 
//titulo, fecha, software y prioridad.

* assignUrgencyLevel.cy.js:
    Acceptance test for Assign urgency level feature, this is related to the Admin Story 7: "Como admin quiero asignar el nivel de 
    urgencia dependiendo de la urgencia de resolucion de un ticket", for this test to work, the admin must be logged in, so we use 
    cy.login command to login and then visit the bug reporting page. Also, there must be a ticket already created, we 
    can use any of those already created in the database.

    Criteria:
    GIVEN the admin is logged in and on the homepage,
    WHEN the admin navigates to the 'Asignar Bug' section in the sidebar,
    AND there is at least one existing bug ticket in the system,
    THEN the admin should be able to view a list of bug tickets,
    AND the admin can select a specific urgency level a bug.

* bugReporting.cy.js // Acceptance test for bug reporting feature, this is related to the User Story 1: Como Usuario quiero reportar un bug para que sea arreglado,
// for this test to work, the user must be logged in, so we use cy.login command to login and then visit the bug reporting page. 
// Criteria:
// GIVEN the user is logged in his homepage, WHEN the user clicks on the sidebar 'Reportar un bug' and
// fills out the form with the bug information and submits it. Finally, THEN the user should see a success message.
* commentBug.cy.js   Acceptance test for bug comment feature, this is related to the User Story 7: Como  usuario quiero poder 
  comentar el bug report que hice, for this test to work, the user must be logged in, so we use cy.login command 
  to login and then visit the bug reporting page. Also, there must be a bug ticket already created by the user.

  GIVEN that the user is logged in and on the home page,
  AND the user has previously reported a bug
  WHEN the user navigates to the 'Mis reportes' section in the sidebar,
  AND selects the specific bug he wants to comment on,
  THEN the user can add comments to the bug report. And after submitting the comment, 
  the user should see his comment added correctly in the comments.

* devAddCommentBug.cy.js: //(DS6) Ver y publicar comentarios en los bug reports para tener mejor comunicación con los usuarios
//El desarrollador debe tener la facultad de agregar y acceder a los comentarios de cada bug, obteniendo un listado de los comentarios y un promt de texto para añadir otros.
//Observacion: en el titulo no entra la parte de "como desarrollador debo poder..." por que sino excede la cantidad de caracteres
//CRITERIO DE ACEPTACION:
//Una seccion de la vista de desarrollador donde se vean los comentarios de un ticket adyacente a este, junto con la descripcion, el cuerpo de cada uno de los comentarios, titulo y remitente.
//Ingresar texto vacio a la caja de comentarios:
//-no se puede, en caso de tener un enter  se puede realizar (FIX)
//-no se puede ingresar texto sin formato

* devChangingBugStatus.cy.js //(DS1) Developer Story 1:  Actualizar el estado del bug report para establecer si está completado, en espera o en progreso.
//El desarrollador debe ser capaz de modificar el parametro de estado de cada bug, para los siguientes valores:
//  Criterio de aceptación: Given the developer is logged in and is on the home page, when the developer clicks on a bug report,
// then the developer should be able to change the status of the bug report to completed, in progress or on hold.

* Re-AssignBug.cy.js //(DS3) Solicitar reasignación de un bug al administrador para evitar sobrecarga.
//Observacion: en el titulo no entra la parte de "como desarrollador debo poder..." por que sino excede la cantidad de caracteres
//CRITERIO DE ACEPTACION: 
//El desarrollador debe poder pedir una reasignacion de los bug reports a los cual se le ha asignado, por medio 
//de una seccion en la misma vista de lista e bugs.Los desarrolladores deben tener la capacidad de solicitar al 
//administrador la reasignación de un bug en caso de sobrecarga de trabajo o incapacidad para solucionarlo. La 
//solicitud de reasignación debe incluir una justificación adecuada por parte del desarrollador.

* ticketAssign.cy.js     Acceptance test for ticket assign feature, this is related to the Admin Story 2:  "Como admin quiero ver lista de
    tickets y Asignar el personal para que arregle el bug", for this test to work, the admin must be logged in, so we use 
    cy.login command to login and then visit the bug reporting page. Also, there must be a ticket already created, we 
    can use any of those already created in the database.

    Criteria:
    GIVEN the admin is logged in and on the homepage,
    WHEN the admin navigates to the 'Asignar Bug' section in the sidebar,
    AND there is at least one existing bug ticket in the system,
    THEN the admin should be able to view a list of bug tickets,
    AND the admin can select a specific ticket to assign personnel for bug resolution.





