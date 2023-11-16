// Acceptance test for bug reporting feature, this is related to the User Story 1: Como Usuario quiero reportar un bug para que sea arreglado,
// for this test to work, the user must be logged in, so we use cy.login command to login and then visit the bug reporting page. 
// Criteria:
// GIVEN the user is logged in his homepage, WHEN the user clicks on the sidebar 'Reportar un bug' and
// fills out the form with the bug information and submits it. Finally, THEN the user should see a success message.


describe('Bug Reporting Feature', () => {

  it('allows the user to report a bug', () => {
    cy.login('dlyte3@usnews.com','WIzWM!t5');
    cy.visit('/my_reports')
    // Click on the 'Reportar un bug' link in the sidebar
    cy.contains('Reportar un bug').click();
    // When the user fills out the bug report form and submits it
    cy.get('[name="title"]').should('exist').type('Test Bug Title');
    cy.get('[name="software"]').should('exist').select('CyberSense');
    cy.get('textarea[name="description"]').should('exist').type('Detailed description of the bug');
    cy.get('[name="pasos"]').should('exist').type('Steps to reproduce the bug');
    cy.get('[type="submit"]').should('exist').click();

    // Then the bug report should be submitted successfully
    cy.get('#alert-success').should('be.visible');
  });
});




