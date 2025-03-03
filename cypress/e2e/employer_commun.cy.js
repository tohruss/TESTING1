describe('Общение с студентом и подтверждение вакансии', () => {
    it('Общение и подтверждение', () => {

        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('testerStudent');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(5) > .menu-item__item-name').click();
        cy.get(':nth-child(2) > :nth-child(2) > .form-select__selected').click();
        cy.get('.form-select__items > :nth-child(2)').click();

        cy.get('.infinite-loader > :nth-child(1) > .button').click();//можно менять nth-child(1) в зависимости от расположения карточки

        cy.get('.form-area').type('Здравствуйте, Расскажите о себе и о своем хобби. Ждем вашего ответа!');
        cy.get('.comment-textarea__buttons > :nth-child(2)').click();

    });
});