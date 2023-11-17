//(DS6) Ver y publicar comentarios en los bug reports para tener mejor comunicación con los usuarios
//El desarrollador debe tener la facultad de agregar y acceder a los comentarios de cada bug, obteniendo un listado de los comentarios y un promt de texto para añadir otros.
//Observacion: en el titulo no entra la parte de "como desarrollador debo poder..." por que sino excede la cantidad de caracteres
//CRITERIO DE ACEPTACION:
//Una seccion de la vista de desarrollador donde se vean los comentarios de un ticket adyacente a este, junto con la descripcion, el cuerpo de cada uno de los comentarios, titulo y remitente.
//Ingresar texto vacio a la caja de comentarios:
//-no se puede, en caso de tener un enter  se puede realizar (FIX)
//-no se puede ingresar texto sin formato

describe('Developer Story 6', () => {

    beforeEach(() => {
        cy.login('tmycock0@opera.com', '@X0r');
        cy.visit('/devview');
        cy.contains('La "X" para salir no funciona').click();
    });

    it('allow the developer to see the comments',() => {

        cy.get('.card').eq(1).find('.d-flex').should('exist');
        cy.get('.card').eq(1).find('.d-flex').find('.m-0').should('exist');
        cy.get('.card').eq(1).find('.d-flex').find('.text-muted').should('exist');
    });


    it('allows the developer to add comments', () => {
        cy.get('.mt-4').first().should('exist');
        cy.get('.mt-4').find('.form-control').click();
        const max = 100;
        const min = 1
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        const commentText = `Test crear comentario #${randomNumber}`;
        cy.get('textarea[class="form-control"]').should('exist').type(commentText);
        cy.get('.custom-button').click();
        cy.contains(commentText).should('exist');
    });

    // Cleanup: Set the status back to the initial state

});