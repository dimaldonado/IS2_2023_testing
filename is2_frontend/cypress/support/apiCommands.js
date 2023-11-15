
import APIService from "../../src/components/services/APIService";

const apiService = new APIService();

Cypress.Commands.add('apiPost', (url, data) => {
    cy.log(`Making POST request to ${url}`);
    return apiService.post(url, data);
});

Cypress.Commands.add('apiGet', (url, id) => {
    cy.log(`Making GET request to ${url}`);
    return apiService.get(url, id);
});

Cypress.Commands.add('apiDelete', (url, id) => {
    cy.log(`Making DELETE request to ${url}`);
    return apiService.delete(url, id);
});


Cypress.Commands.add('apiDelete', (url, id) => {
    cy.log(`Making DELETE request to ${url}`);
    return apiService.delete(url, id);
});