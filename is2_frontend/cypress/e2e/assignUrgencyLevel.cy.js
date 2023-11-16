/*
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

*/

describe('Bug assignment function', () => {
  it('allows the user to assign a bug', () => {
    cy.login('admin@admin','123');
    cy.visit('/adminview')
    // Click on the 'Asignar bug' link in the sidebar
    cy.contains('Asignar Bug').click();
    //Admin selects a bug ticket to assign
   

    // Clickea en la fila que contiene el título "La 'X' para salir no funciona"
    cy.contains('tr', 'La "X" para salir no funciona').click() 
   
    var prioridad = "0";
    //mapa de prioridades y sus valores
    const mapeoPrioridades = {
      "Baja": 1,
      "Media": 2,
      "Alta": 3,
      "Urgente": 4
    };
    // Obtiene la prioridad de la fila seleccionada y la guarda en la variable prioridad
    cy.get("tr.active")
      .find("td")
      .eq(5)
      .invoke("text")
      .then((text) => {
        
        prioridad = mapeoPrioridades[text.trim()];
        cy.log(`La prioridad de la fila seleccionada es: ${prioridad}`);
      });

    // Verifica que exista el elemento con clase .col-md-2 .form-control(selector de prioridad)
    cy.get(".col-md-2 .form-control").should("exist");

    //Obitene las opciones de prioridad y las guarda en la variable options
    //Lo filtra para que ya no este la prioridad que ya tiene el ticket
    cy.get(".col-md-2 select").first().then((select) => {
      const options = select.find("option").toArray().map((option) => option.value);
      cy.log(`Las opciones de prioridad son: ${options}`);
      const prioridadesPosibles = options.filter((val) => val != prioridad);
      cy.log(`Las prioridades posibles son: ${prioridadesPosibles}`);
      const prioridadAleatoria = Cypress._.sample(prioridadesPosibles);
    
      //Selecciona la prioridad aleatoria de las restantes y presiona el botón de asignar

      cy.get(".col-md-2 select").first().select(prioridadAleatoria)
      cy.get(".col-md-2 button.custom-button").click();

      //obtiene la palabra asignada a la prioridad(numero)
      const palabraPrioridad = Object.keys(mapeoPrioridades).find(
        key => mapeoPrioridades[key] === prioridad
      );
      
      // Verifica que la fila seleccionada contenga la nueva prioridad asignada
      cy.get('.table tbody')
      .contains('tr', 'La "X" para salir no funciona')
      .should('exist')
      .within(() => {
        cy.get('td').contains('La "X" para salir no funciona').should('exist');
        cy.get('td').contains(palabraPrioridad).should('exist');
      });
    
        
    });
    
   
  })

})