// (DS4) Como depurador quiero tener una lista de los bugs que se me han asignado
//Observacion: en el titulo no entra la parte de "como depurador debo poder..." por que sino excede la cantidad de caracteres
//CRITERIO DE ACEPTACION:
//en la vista de desarrollador se aprecia una seccion con un listado compacto de los reportes de bugs, 
//por los cuales se puede hacer scroll, y aplicar diversos filtros. Estos tickets deben hacer display de 
//titulo, fecha, software y prioridad.

describe('Developer Story 4', () => {

    beforeEach(() => {
        cy.login('tmycock0@opera.com', '@X0r');
        cy.visit('/devview');
    });

    it('allows the developer to use list bug filters', () => {
        // test barra de busqueda
        cy.get('.form-control').first().should('exist');
        cy.get('.form-control').first().click();
        cy.get('.form-control').first().type('La "X" para salir no funciona');
        cy.contains('La "X" para salir no funciona').should('exist');

        // test filtro de software
        cy.get('.form-control').eq(1).should('exist');
        cy.get('.form-control').eq(1).select('CyberSense');
        cy.contains('CyberSense').should('exist');
        cy.contains('La "X" para salir no funciona').should('exist');

        // test filtro de prioridad
        cy.get('.form-control').eq(2).should('exist');
        cy.get('.form-control').eq(2).select('Urgente');
        cy.contains('Urgente').should('exist');
        cy.contains('La "X" para salir no funciona').should('exist');

        // test filtro de estado
        cy.get('.form-control').eq(3).should('exist');
        cy.get('.form-control').eq(3).select('Cerrado');
        cy.contains('La "X" para salir no funciona').should('not.exist');
        cy.get('.form-control').eq(3).select('Pendiente');
        cy.contains('La "X" para salir no funciona').should('exist');
    });


    it('allows the developer to see tickets', () => {
        // Corroboramos que existan todos los componentes de ticket
        cy.get('.bg-title-card').first().click();
        cy.contains('La "X" para salir no funciona').should('exist');
        cy.contains('27-06-2023').should('exist');
        cy.contains('Software: CyberSense').should('exist');
        cy.contains('Prioridad: Urgente').should('exist');
        cy.get('.btn').first().should('exist');
        cy.get('.form-control').eq(4).should('exist');
        cy.get('.form-control').eq(4).select('Abierto');
        cy.get('.form-control').eq(4).select('En testeo');
        cy.get('.form-control').eq(4).select('Cerrado');
        cy.get('.form-control').eq(4).select('En progreso');
    });

    // Cleanup: Set the status back to the initial state

});