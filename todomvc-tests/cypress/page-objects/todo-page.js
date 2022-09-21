/// <reference types="cypress" />


export const navigate = () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
}

export const addTodo = (todoText) => {
    cy.get('.new-todo').type(todoText + '{enter}')
}

export const toggleTodo = (todoIndex) => {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
}

export const showOnlyCompletedTodos = () => {
    cy.contains('Completed').click()
}

export const showOnlyActiveTodos = () => {
    cy.contains('Active').click()
}

export const showAllTodos = () => {
    cy.contains('All').click()
}

export const clearCompleted = () => {
    cy.contains('Clear completed').click()
}

export const validateNumberOfTodosShown = (expectedNumberOfTodos) => {
    cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
}

export const validateTodoCompletedState = (todoIndex, shouldBeCompleted) => {
    const l = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)

    l.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
}

export const validateTodoText = (todoIndex, expectedText) => {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
}

export const validateToggleState = (todoIndex, shouldBeToggled) => {
    const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)

    label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
}

