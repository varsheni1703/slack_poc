describe('Bluemaple Job Offer', () => {
    beforeEach(() => {
    // Read data from the Excel file
          cy.task('readExcelFile', { filePath: '/home/tyro24001/Desktop/cypress/cypress/e2e/variables/BMjoboffer.xlsx', sheetName: 'Sheet1' }).then((data) => {
          Cypress.log({message:'excel data loaded',log:false});
          cy.wrap(data, {log:false}).as('testvalue');
      });
    });
   

    
    it('PDF of Bluemaple USA', () => {
        cy.get('@testvalue').then((testvalue) => {
        const url = testvalue[0].value;
        const target = testvalue[1].value;
        cy.visit(url);
        const username = Cypress.env('username');
        const password = Cypress.env('password');
        cy.get(':nth-child(1) > .page-card-body > :nth-child(1) > .email-field > #login_email').type(username);
        cy.get(':nth-child(1) > .page-card-body > :nth-child(2) > .password-field > #login_password').type(password);
        cy.get('.form-signin > :nth-child(1) > .page-card-actions > .btn').click();
        cy.location('pathname',{timeout:20000}).should('include', '/app');
        cy.visit(target);
        cy.wait(1000);
    
        cy.get('[data-original-title="Print"]').click();

        cy.get('.print-format-container').its('0.contentDocument.body').should('be.visible').and('contain', 'BlueMaple Technologies Private Limited');

        
        cy.get('.print-format-container').its('0.contentDocument.body').should('be.visible').and('contain', 'INR');
        cy.get('.print-format-container').its('0.contentDocument.body').should('be.visible').and('contain', 'Chennai, Tamilnadu');
        cy.get('.print-format-container').its('0.contentDocument.body').should('be.visible').and('contain', 'BlueMaple Technologies Private Limited');

        cy.get('.print-format-container').its('0.contentDocument.body').should('be.visible').and('contain', 'Suit No 502, Trend India Business Centre Private Limited, RR Tower-5, 5th Floor, No 33A, South Phase, ThiruVi ka Industrial Estate, Guindy');
        cy.get('.print-format-container').its('0.contentDocument.body').should('be.visible').and('contain', 'Chennai, Tamilnadu, India, 600032');




        


        // <table class="table table-bordered"><tbody><tr><td data-row="1"><strong style="color: rgb(26, 26, 26); font-size: 13px; background-color: rgb(255, 255, 255);">Employer</strong></td><td data-row="1"><strong style="color: rgb(26, 26, 26); font-size: 13px; background-color: rgb(255, 255, 255);">BlueMaple Technologies Private Limited</strong></td></tr><tr><td data-row="2"><strong style="color: rgb(26, 26, 26); font-size: 13px; background-color: rgb(255, 255, 255);">W2 Employee Name</strong></td><td data-row="2"><strong style="color: rgb(26, 26, 26); font-size: 13px; background-color: rgb(255, 255, 255);">Joseph Vijay</strong></td></tr><tr><td data-row="3"><strong style="color: rgb(26, 26, 26); font-size: 13px; background-color: rgb(255, 255, 255);">Compensation</strong></td><td data-row="3"><strong style="color: rgb(26, 26, 26); font-size: 13px; background-color: rgb(255, 255, 255);"> INR XXXX per annum</strong></td></tr><tr><td data-row="4"><strong style="color: rgb(26, 26, 26); font-size: 13px; background-color: rgb(255, 255, 255);">Date of agreement</strong></td><td data-row="4"><strong style="color: rgb(26, 26, 26); font-size: 13px; background-color: rgb(255, 255, 255);">2024-10-30</strong></td></tr><tr><td data-row="5"><strong style="color: rgb(26, 26, 26); font-size: 13px; background-color: rgb(255, 255, 255);">Client</strong></td><td data-row="5"><strong style="color: rgb(26, 26, 26); font-size: 13px; background-color: rgb(255, 255, 255);">Citi Bank N.A</strong></td></tr><tr><td data-row="6"><strong style="color: rgb(26, 26, 26); font-size: 13px; background-color: rgb(255, 255, 255);">Location(s) of Employment</strong></td><td data-row="6"><strong> Chennai , Tamil Nadu</strong></td></tr><tr><td data-row="7"><strong style="color: rgb(26, 26, 26); font-size: 13px; background-color: rgb(255, 255, 255);">Timesheets Support</strong></td><td data-row="7"><a href="mailto:support@bluemapleit.com" rel="noopener noreferrer" style="font-size: 13px;">support@bluemapleit.com</a></td></tr></tbody></table>

        
     
       })
      })
});

