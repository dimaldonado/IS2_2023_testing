//(DS1) Developer Story 1:  Actualizar el estado del bug report para establecer si está completado, en espera o en progreso.
//El desarrollador debe ser capaz de modificar el parametro de estado de cada bug, para los siguientes valores:
//  Criterio de aceptación: Given the developer is logged in and is on the home page, when the developer clicks on a bug report,
// then the developer should be able to change the status of the bug report to completed, in progress or on hold.
describe('Developer Story 1', () => {
    let initialStatus;

    beforeEach(() => {
        cy.login('tmycock0@opera.com', '@X0r');
        cy.visit('/devview');
        cy.get('.bg-title-card').first().click();
        cy.get('.select-status').first().select('ToDo');
    });

    it('allow the developer to select a bug report', () => {
        cy.get('.bg-title-card').should('have.length.greaterThan', 0);
        cy.get('.bg-title-card').first().click();
    });

    it('allows the developer to change the status of a bug report', () => {
        cy.get('.bg-title-card').first().click();
    
        // Check if the status dropdown is present
        cy.get('.select-status').first().should('exist');
        // Change the status to Testing
        cy.get('.select-status').first().select('Testing');
        cy.get('.bg-title-card').eq(1).click();
        cy.get('.select-status').first().should('have.value', 'Testing');
    });

    // Cleanup: Set the status back to the initial state
    afterEach(() => {
        if (initialStatus) {
            cy.get('.bg-title-card').first().click();
            cy.get('.select-status').first().select(initialStatus);
        }
    });
});