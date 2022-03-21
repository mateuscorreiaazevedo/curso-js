// FOREACH
let pedidos = [
    {id: 501, nome: 'Mateus Azevedo', comida: 'x-bacon', bebida: 'coca-cola'},
    {id: 202, nome: 'Marcos Azevedo', comida: 'x-tudo', bebida: 'suco de laranja'},
    {id: 023, nome: 'Clara Azevedo', comida: 'x-tudo', bebida: 'coca-cola'},
    {id: 104, nome: 'Kamilla Azevedo', comida: 'x-bacon', bebida: 'suco de uva'},
    {id: 005, nome: 'Fulano de tal', comida: 'x-salada', bebida: 'suco detox'},
];

pedidos.forEach((pedido, index) => {
    let { nome, comida, bebida } = pedido;
    console.log(`${index} - O cliente ${nome} Fez o pedido de ${comida}, com a bebida: ${bebida}`)
});