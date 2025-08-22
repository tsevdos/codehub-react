describe('TodoMVC - React', () => {
  let TODO_ITEM_ONE = 'buy some cheese'
  let TODO_ITEM_TWO = 'feed the cat'
  let TODO_ITEM_THREE = 'book a doctors appointment'

  beforeEach(() => {
    cy.visit('http://todomvc.com/examples/react/#/')
  })

  context('When page is initially opened', () => {
    it('should focus on the todo input field', () => {
      cy.focused().should('have.class', 'new-todo')
    })
  })

  context('No Todos', () => {
    it('should hide #main and #footer', () => {
      cy.get('.todo-list li').should('not.exist')
      cy.get('.main').should('not.exist')
      cy.get('.footer').should('not.exist')
    })
  })

  context('New Todo', () => {

    it('should allow me to add todo items', () => {
      // create 1st todo
      cy.get('.new-todo').type(TODO_ITEM_ONE).type('{enter}')

      // make sure the 1st label contains the 1st todo text
      cy.get('.todo-list li').eq(0).find('label').should('contain', TODO_ITEM_ONE)

      // create 2nd todo
      cy.get('.new-todo').type(TODO_ITEM_TWO).type('{enter}')

      // make sure the 2nd label contains the 2nd todo text
      cy.get('.todo-list li').eq(1).find('label').should('contain', TODO_ITEM_TWO)
    })

    it('adds items', () => {
      // create several todos then check the number of items in the list
      cy.get('.new-todo')
      .type('todo A{enter}')
      .type('todo B{enter}') // we can continue working with same element
      .type('todo C{enter}') // and keep adding new items
      .type('todo D{enter}')
      cy.get('.todo-list li').should('have.length', 4)
    })

    it('should clear text input field when an item is added', () => {
      cy.get('.new-todo').type(TODO_ITEM_ONE).type('{enter}')
      cy.get('.new-todo').should('have.text', '')
    })

    it('should append new items to the bottom of the list', () => {
      // this is an example of a custom command
      // which is stored in tests/_support/spec_helper.js
      // you should open up the spec_helper and look at
      // the comments!
      cy.createDefaultTodos().as('todos')


      cy.get('.todo-count').contains('3 items left')
      cy.get('@todos').eq(0).find('label').should('contain', TODO_ITEM_ONE)
      cy.get('@todos').eq(1).find('label').should('contain', TODO_ITEM_TWO)
      cy.get('@todos').eq(2).find('label').should('contain', TODO_ITEM_THREE)
    })

    it('should trim text input', () => {
      // this is an example of another custom command
      // since we repeat the todo creation over and over
      // again. It's up to you to decide when to abstract
      // repetitive behavior and roll that up into a custom
      // command vs explicitly writing the code.
      cy.createTodo(`    ${TODO_ITEM_ONE}    `)

      // we use as explicit assertion here about the text instead of
      // using 'contain' so we can specify the exact text of the element
      // does not have any whitespace around it
      cy.get('.todo-list li').eq(0).should('have.text', TODO_ITEM_ONE)
    })

    it('should show #main and #footer when items added', () => {
      cy.createTodo(TODO_ITEM_ONE)
      cy.get('.main').should('be.visible')
      cy.get('.footer').should('be.visible')
    })
  })

  context('Item', () => {
    // New commands used here:
    // - cy.clear    https://on.cypress.io/api/clear

    it('should allow me to mark items as complete', () => {
      // we are aliasing the return value of
      // our custom command 'createTodo'
      //
      // the return value is the <li> in the <ul.todos-list>
      cy.createTodo(TODO_ITEM_ONE).as('firstTodo')
      cy.createTodo(TODO_ITEM_TWO).as('secondTodo')

      cy.get('@firstTodo').find('.toggle').check()
      cy.get('@firstTodo').should('have.class', 'completed')

      cy.get('@secondTodo').should('not.have.class', 'completed')
      cy.get('@secondTodo').find('.toggle').check()

      cy.get('@firstTodo').should('have.class', 'completed')
      cy.get('@secondTodo').should('have.class', 'completed')
    })

    it('should allow me to un-mark items as complete', () => {
      cy.createTodo(TODO_ITEM_ONE).as('firstTodo')
      cy.createTodo(TODO_ITEM_TWO).as('secondTodo')

      cy.get('@firstTodo').find('.toggle').check()
      cy.get('@firstTodo').should('have.class', 'completed')
      cy.get('@secondTodo').should('not.have.class', 'completed')

      cy.get('@firstTodo').find('.toggle').uncheck()
      cy.get('@firstTodo').should('not.have.class', 'completed')
      cy.get('@secondTodo').should('not.have.class', 'completed')
    })

    it('should allow me to edit an item', () => {
      cy.createDefaultTodos().as('todos')

      cy.get('@todos').eq(1).as('secondTodo')
      // TODO: fix this, dblclick should
      // have been issued to label
      .find('label').dblclick()

      // clear out the inputs current value
      // and type a new value
      cy.get('@secondTodo').find('.edit').clear()
      .type('buy some sausages').type('{enter}')

      // explicitly assert about the text value
      cy.get('@todos').eq(0).should('contain', TODO_ITEM_ONE)
      cy.get('@secondTodo').should('contain', 'buy some sausages')
      cy.get('@todos').eq(2).should('contain', TODO_ITEM_THREE)
    })
  })

  context('Editing', () => {
    // New commands used here:
    // - cy.blur    https://on.cypress.io/api/blur

    beforeEach(() => {
      cy.createDefaultTodos().as('todos')
    })

    it('should hide other controls when editing', () => {
      cy.get('@todos').eq(1).as('secondTodo')
      .find('label').dblclick()

      cy.get('@secondTodo').find('.toggle').should('not.be.visible')
      cy.get('@secondTodo').find('label').should('not.be.visible')

    })

    it('should save edits on blur', () => {
      cy.get('@todos').eq(1).as('secondTodo')
      .find('label').dblclick()

      cy.get('@secondTodo')
      .find('.edit').clear()
      .type('buy some sausages')
      // we can just send the blur event directly
      // to the input instead of having to click
      // on another button on the page. though you
      // could do that its just more mental work
      .blur()

      cy.get('@todos').eq(0).should('contain', TODO_ITEM_ONE)
      cy.get('@secondTodo').should('contain', 'buy some sausages')
      cy.get('@todos').eq(2).should('contain', TODO_ITEM_THREE)
    })

    it('should trim entered text', () => {
      cy.get('@todos').eq(1).as('secondTodo')
      .find('label').dblclick()

      cy.get('@secondTodo')
      .find('.edit').clear()
      .type('    buy some sausages    ').type('{enter}')

      cy.get('@todos').eq(0).should('contain', TODO_ITEM_ONE)
      cy.get('@secondTodo').should('contain', 'buy some sausages')
      cy.get('@todos').eq(2).should('contain', TODO_ITEM_THREE)
    })

  })
})
