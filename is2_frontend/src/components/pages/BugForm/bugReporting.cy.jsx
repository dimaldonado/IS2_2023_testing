import React from 'react'
import Component from './bugForm'

describe('Bug Reporting Feature', () => {
  beforeEach(() => {
    // Login before running the test using cy.task
    cy.login('testing@testing','testing');
  });

  it('allows the user to report a bug', () => {
    cy.mount(<Component title="Reportar bug" />);
    // When the user fills out the bug report form and submits it
    cy.get('[name="title"]').should('exist').type('Test Bug Title');
    cy.get('[name="software"]').should('exist').select('CyberSense');
    cy.get('[name="description"]').should('exist').type('Detailed description of the bug');
    cy.get('[name="pasos"]').should('exist').type('Steps to reproduce the bug');
    cy.get('[type="submit"]').should('exist').click();

    // Then the bug report should be submitted successfully
    cy.get('#alert-success').should('be.visible');
  });
});





