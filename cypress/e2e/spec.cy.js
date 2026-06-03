describe('Testes da página IceAndStreet', () => {

    // Função de atraso
    const clickLento = (seletor) => {
        cy.wait(1000)
        cy.get(seletor).click()
    }

    it('Deve interagir com os elementos da página', () => {
        // Visita a página inicial
        cy.visit('index.html')

        // Interage com o card Gelo Artístico
        clickLento('.card-gelo > .imagem-container > :nth-child(2) > .img2')
        clickLento('.btn-back')

        // Interage com o card Inline
        clickLento('.card-inline > .imagem-container > :nth-child(2) > .img2')
        clickLento('.btn-back')

        // Interage com o card Quad
        clickLento('.card-quad > .imagem-container > :nth-child(2) > .img2')
        clickLento('.btn-back')

        // Interage com o card Hockey
        clickLento('.card-hockey > .imagem-container > :nth-child(2) > .img2')
        clickLento('.btn-back')

        // Interage com o botão do Quiz
        clickLento('.btn-quiz')
        clickLento('.btn-back')
    })
})