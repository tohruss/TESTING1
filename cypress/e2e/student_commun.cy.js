describe('Общение с студентом и подтверждение вакансии', () => {
    it('Общение и подтверждение', () => {

        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('Tohruss');
        cy.get('input[type=password]').type('Tohrutop311www');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(4) > .menu-item__item-name').click();
        cy.get(':nth-child(1) > .responses-list-item__content-company > .button').click();//можно менять nth-child(1) в зависимости от расположения карточки

        cy.get('.form-area').type('Здравствуйте, меня зовут Дмитрий! Мне 20 лет учуть в техникуме. Мое хобби - фотография!');
        cy.get('.comment-textarea__buttons > :nth-child(2)').click();

        cy.get(':nth-child(1) > :nth-child(2) > .base-comment__content > .detailed-workspace-activity-comments__actions > :nth-child(1) > .icon-button').click();
        cy.get('.form-area').type('Очень хочу у вас работать!');
        cy.get('.comment-textarea__buttons > :nth-child(2)').click();

    });
});