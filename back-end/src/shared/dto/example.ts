/**
 * Como estamos passando esse parâmetro como um Query Parameter na URL,
 * é interessante o client utilizar o JSON.stringify() para converter
 * o objeto em string. Por exemplo:
 */

// exemplo de um objeto com as informações de ordenação
const sort = {
    name: "ASC",
    email: "DESC"
}

const sortString = JSON.stringify(sort)
  // sortString => "{\"name\":\"ASC\",\"email\":\"DESC\"}"