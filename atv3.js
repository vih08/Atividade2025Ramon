/* 3:
Dado o seguinte array de strings,
array = ["maçã", "banana", "maçã", "laranja", "pera", "banana", "uva", "maçã", "kiwi", "laranja"],
conte quantas vezes cada string aparece no array, utilizando o laço for-of para somar as vezes, e depois o laço for-in para imprimir no console.*/

const array = ["maçã", "banana", "maçã", "laranja", "pera", "banana", "uva", "maçã", "kiwi", "laranja"]

const contagem = {}

for (const fruta of array) {
  if (contagem[fruta]) {
    contagem[fruta]++
  } else {
    contagem[fruta] = 1
  }
}

for (const fruta in contagem) {
  console.log(`${fruta}: ${contagem[fruta]} vezes`)
}


//no const pode ser let