//(DS3) Solicitar reasignación de un bug al administrador para evitar sobrecarga.
//Observacion: en el titulo no entra la parte de "como desarrollador debo poder..." por que sino excede la cantidad de caracteres
//CRITERIO DE ACEPTACION: 
//El desarrollador debe poder pedir una reasignacion de los bug reports a los cual se le ha asignado, por medio 
//de una seccion en la misma vista de lista e bugs.Los desarrolladores deben tener la capacidad de solicitar al 
//administrador la reasignación de un bug en caso de sobrecarga de trabajo o incapacidad para solucionarlo. La 
//solicitud de reasignación debe incluir una justificación adecuada por parte del desarrollador.



describe('Developer Story 3', () => {

    it('allows the developer to request bug reassignment', () => {
        // login normal
        cy.login('tmycock0@opera.com', '@X0r');
        cy.visit('/devview');
        cy.contains('La "X" para salir no funciona').click();

        // test de arrepentiemiento de reasignacion y analicis de los componentes de la tarjeta
        cy.get('.btn').first().should('exist').click();
        cy.get('.floating-card').first().should('exist');
        cy.contains('Razon de reasignacion').first().should('exist');
        cy.contains('La "X" para salir no funciona').first().should('exist');
        cy.get('.text-box').first().should('exist').click();
        cy.get('.close-button').first().should('exist').click();
        // ahora comprobamos que no exista la tarjeta
        cy.contains('Razon de reasignacion').should('not.exist');
        

        // test de reasignacion
        cy.get('.btn').first().should('exist').click();
        cy.get('.text-box').first().should('exist').click();
        const excuse = 'Estoy muy ocupado, no se como arreglarlo, no tengo ganas de arreglarlo y mi esposa me dejo'; 
        cy.get('.text-box').first().type(excuse);
        cy.get('.submit-button').first().click();
        cy.contains('Razon de reasignacion').should('not.exist');
    });



});