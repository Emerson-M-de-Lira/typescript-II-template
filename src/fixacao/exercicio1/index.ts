import { Person,CoresCroche } from "../../types/types";
const listaDeClients :Person[] = [
  {
    name: "pandora",
    phone: 123,
    preco: 48,
    corCroche: CoresCroche.VERMELHO
  },

  {
    name: "edilma",
    phone: 321,
    preco: 50,
    corCroche: CoresCroche.ROSA
  },
  {
    name: "dora",
    phone: 211,
    preco: 34,
    corCroche: CoresCroche.AMARELO
  },
];
console.log(CoresCroche)

/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
a. nome, que é uma string;
b. idade, que é um número;
c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/
