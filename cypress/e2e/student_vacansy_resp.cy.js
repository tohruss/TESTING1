describe('Подача заявки и общение с работодателем', () => {
    it('Пользователь авторизуется и оформляет заявку', () => {

        cy.visit('https://dev.profteam.su/login');

        // Шаг 2: Авторизация пользователя
        cy.get('input[type=text]').type('Tohruss');
        cy.get('input[type=password]').type('Tohrutop311www');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(1) > .menu-item__item-name').click();
        cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click();
        cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-blue').click();
        cy.get('.card-main__button-flag').click();

        cy.visit('https://dev.profteam.su/account/responses');
    });
});