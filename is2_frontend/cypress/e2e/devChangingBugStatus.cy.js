//(DS1) Developer Story 1:  Actualizar el estado del bug report para establecer si está completado, en espera o en progreso.
//El desarrollador debe ser capaz de modificar el parametro de estado de cada bug, para los siguientes valores:
//  Criterio de aceptación: Given the developer is logged in and is on the home page, when the developer clicks on a bug report,
// then the developer should be able to change the status of the bug report to completed, in progress or on hold.
describe('Developer Story 1', () => {
    let initialStatus; // Declare initialStatus here

    beforeEach(() => {
        // Given the developer is logged in and is on the home page
        cy.login('tmycock0@opera.com', '@X0r');
        cy.visit('/devview');
    });

    it('allow the developer to select a bug report', () => {
        cy.get('.bg-title-card').should('have.length.greaterThan', 0);
        cy.get('.bg-title-card').first().click();
    });

    it('allows the developer to change the status of a bug report', () => {
        cy.get('.bg-title-card').first().click();

        // Check if the status dropdown is present
        cy.get('.select-status').first().should('exist');

        // Get the current status
        cy.get('.select-status').first().invoke('val').then((status) => {
            initialStatus = status; // Store the initial status

            // Select a different status from the dropdown
            cy.get('.select-status').first().select('Pending',{force: true});

            // Wait for a short time to ensure the status change is processed
            cy.wait(1000);

            // Check if the status has changed
            cy.get('.select-status').first().invoke('val').should('not.equal', initialStatus);
        });
    });

    // Cleanup: Set the status back to the initial state
    afterEach(() => {
        if (initialStatus) {
            cy.get('.select-status').first().select('ToDo', {force: true});
        }
    });
});