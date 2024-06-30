import '../../src/assertion'
let data
describe('Suite to showcase cy.compareAliases() command', () => {
    before(()=>{
        cy.fixture('example').then(exm=>{
            data = exm
        })
    })
    it('Test 1 - Keanu Reeves is same as John Wick', () => {
        cy.wrap(data.keanuReeves).as('keanuReeves')
        cy.wrap(data.johnWick).as('johnWick')

        cy.compareAliases('deep.equal','@keanuReeves', '@johnWick')
    });

    it('Test 2 - John Wick is not the same as Winston Scott', () => {
        cy.wrap(data.johnWick).as('johnWick')
        cy.wrap(data.winstonScott).as('winstonScott')

        cy.compareAliases('not.deep.equal','@johnWick', '@winstonScott')
    });
});