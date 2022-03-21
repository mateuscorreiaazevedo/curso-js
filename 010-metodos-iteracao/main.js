// MAP 
const PEDIDOS = [
    {id: 501, nome: 'Mateus Azevedo', comida: 'x-bacon', bebida: 'suco de laranja', preco: 1},
    {id: 202, nome: 'Marcos Azevedo', comida: 'x-tudo', bebida: 'suco de laranja', preco: 1},
    {id: 023, nome: 'Clara Azevedo', comida: 'x-tudo', bebida: 'suco', preco: 1},
    {id: 104, nome: 'Kamilla Azevedo', comida: 'x-bacon', bebida: 'suco de uva', preco: 1},
    {id: 104, nome: 'Fulano de tal', comida: 'x-salada', bebida: 'suco detox', preco: 1}
];

PEDIDOS.map ( pedido => {
    if (pedido.comida == 'x-bacon') {
        return (pedido.comida = 'opação em falta');
    }
})

// console.log(PEDIDOS);

// FILTER
let filtro = PEDIDOS.filter ( pedido => {
    return (pedido.id) == 104
})

// console.log(filtro)

// FIND

let find = PEDIDOS.find ( pedido => {
    return pedido.id == 104;
})

// console.log(find)

// EVERY - RETORNA UM VALOR BOOLEANO

let every = PEDIDOS.every (pedido => {
    let { bebida } = pedido
    return bebida == 'suco';
})

// console.log(every)

// SOME

const SOME = PEDIDOS.some (pedido => {
    let { comida } = pedido
    return (comida) == 'x-salada'
})

// console.log(SOME)

// REDUCE 

const PRECO = PEDIDOS.reduce ((total, pedido) => {
    let { preco } = pedido
    return total + preco
}, 0)

console.log(PRECO)