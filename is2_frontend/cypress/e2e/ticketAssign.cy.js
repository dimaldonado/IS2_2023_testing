/*
    Acceptance test for bug reporting feature, this is related to the Admin Story 2:  "Como admin quiero ver lista de
    tickets y Asignar el personal para que arregle el bug", for this test to work, the user must be logged in, so we use 
    cy.login command to login and then visit the bug reporting page. Also, there must be a ticket already created, we 
    can use any of those already created in the database.

    Criteria:
    GIVEN the admin is logged in and on the homepage,
    WHEN the admin navigates to the 'Asignar Bug' section in the sidebar,
    AND there is at least one existing bug ticket in the system,
    THEN the admin should be able to view a list of bug tickets,
    AND the admin can select a specific ticket to assign personnel for bug resolution.

*/

describe('Bug assignment function', () => {
  it('allows the user to assign a bug', () => {
    cy.login('admin@admin','123');
    cy.visit('/adminview')
    // Click on the 'Asignar bug' link in the sidebar
    cy.contains('Asignar Bug').click();
    //Admin selects a bug ticket to assign
    cy.contains('La "X" para salir no funciona').click();
    //Admin selects a developer to assign
    cy.get('input[placeholder="Select Developer"]').click();
    //Admin selects the first developer in the list
    cy.get('#developer-select-item-1').click();
    //Admin clicks on the 'Assign' button
    cy.contains('Assign').click();
    // Then the bug ticket should be assigned successfully

    // check that the ticket is assigned to the developer
    cy.contains('tr', 'La "X" para salir no funciona')
      .should('contain', 'Tersina'); 
  })
})