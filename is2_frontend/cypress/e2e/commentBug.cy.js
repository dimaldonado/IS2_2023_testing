/*
  
  Acceptance test for bug comment feature, this is related to the User Story 7: Como  usuario quiero poder 
  comentar el bug report que hice, for this test to work, the user must be logged in, so we use cy.login command 
  to login and then visit the bug reporting page. Also, there must be a bug ticket already created by the user.

  GIVEN that the user is logged in and on the home page,
  AND the user has previously reported a bug
  WHEN the user navigates to the 'Mis reportes' section in the sidebar,
  AND selects the specific bug he wants to comment on,
  THEN the user can add comments to the bug report. And after submitting the comment, 
  the user should see his comment added correctly in the comments.

*/

describe('Bug Reporting Feature', () => {

  it('allows the user to report a bug', () => {
    cy.login('testing@testing','testing');
    cy.visit('/my_reports')
    //Click on a bug report to comment
    cy.contains('Test Bug Title').click();

  
    const randomNumber = Math.floor(Math.random() * (1000000 - 10000) + 10000);
    const commentText = `Comentario test #${randomNumber}`;

    //User writes the comment
    cy.get('textarea[class="form-control"]').should('exist').type(commentText);
    // Click on the 'submit' button
    cy.get('.custom-button').click();
    // Then the bug report should be submitted successfully
    cy.contains(commentText).should('exist');
    
    
  });
});