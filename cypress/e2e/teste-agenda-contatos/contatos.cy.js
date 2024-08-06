describe('Teste de funcionalidades da agenda de contatos', () => {
  const url = 'https://agenda-contatos-react.vercel.app';
  
  beforeEach(() => {
    cy.visit(url);
  });
  
    it('Deve editar o contato "gian Souza"', () => {
    cy.get('.edit').first().click()
    cy.get('input[placeholder="Nome"]').clear().type('Gian Silva Ebac');
    cy.get('input[placeholder="E-mail"]').clear().type('gian@teste.com.br');
    cy.get('input[placeholder="Telefone"]').clear().type('11122233333');
    cy.get('.alterar').click()
    cy.wait(5000);
    });
    
    it('Deve adicionar um novo contato', () => {
      cy.get('input[placeholder="Nome"]').type('Deive');
      cy.get('input[placeholder="E-mail"]').type('deive@teste.com');
      cy.get('input[placeholder="Telefone"]').type('11975781894');
      cy.contains('Adicionar').click();
      cy.wait(5000);
    });

    
    it('Deve remover o contato "Deive"', () => {
      cy.wait(5000);
      cy.contains('div.contato', 'Deive').within(() => {
        cy.get('button.delete').click();
      });
      
    });
    
  });  
