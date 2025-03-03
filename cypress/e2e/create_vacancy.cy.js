describe('Создание вакансии', () => {
    it('Пользователь авторизуется и создает вакансию', () => {
        // Шаг 1: Переход на главную страницу
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('testerEmployer'); // Вводим логин
        cy.get('input[type=password]').type('Password1'); // Вводим пароль
        cy.get('button[type=submit]').eq(2).click(); // Нажимаем кнопку входа

        cy.get(':nth-child(7) > .menu-item__item-name').click();
        cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();

        cy.get('.vacancy-add-form-wrapper > .form').should('be.visible');

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type('Разнорабочий', {force: true});

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(1)').click({force: true});
        cy.get(':nth-child(1) > .form-control--responsive > .form-input--number').type('15000', {force: true} );
        cy.get(':nth-child(2) > .form-control--responsive > .form-input--number').type('70000', {force: true});

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-af677f15=""] > :nth-child(1) > .radio-list > :nth-child(3)').click({force: true});
        cy.get('.form-control--responsive > .form-input--text').type('Хочу вообще не работать и деньги иметь)', {force: true});

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type('Осень в этом году была особенно холодной.', {force: true});
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type('Анна улыбнулась.', {force: true});

        cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click({force: true});

    });
});