export type Prayer = {
  key: string;
  title: string;
  text: string;
};

export const prayers = [
  {
    key: "sinal-da-cruz",
    title: "Sinal da Cruz",
    text: "Em nome do Pai, do Filho e do Espirito Santo. Amem.",
  },
  {
    key: "credo",
    title: "Credo",
    text:
      "Creio em Deus Pai todo-poderoso, criador do ceu e da terra.\n" +
      "E em Jesus Cristo, seu unico Filho, nosso Senhor, que foi concebido pelo poder do Espirito Santo;\n" +
      "nasceu da Virgem Maria, padeceu sob Poncio Pilatos, foi crucificado, morto e sepultado;\n" +
      "desceu a mansao dos mortos; ressuscitou ao terceiro dia; subiu aos ceus, esta sentado a direita de Deus Pai todo-poderoso,\n" +
      "de onde ha de vir a julgar os vivos e os mortos.\n" +
      "Creio no Espirito Santo, na santa Igreja Catolica, na comunhao dos santos, na remissao dos pecados,\n" +
      "na ressurreicao da carne, na vida eterna. Amem.",
  },
  {
    key: "pai-nosso",
    title: "Pai Nosso",
    text:
      "Pai nosso que estais no ceu, santificado seja o vosso nome, venha a nos o vosso reino,\n" +
      "seja feita a vossa vontade, assim na terra como no ceu.\n" +
      "O pao nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas\n" +
      "assim como nos perdoamos a quem nos tem ofendido, e nao nos deixeis cair em tentacao,\n" +
      "mas livrai-nos do mal. Amem.",
  },
  {
    key: "ave-maria",
    title: "Ave Maria",
    text:
      "Ave Maria, cheia de graca, o Senhor e convosco.\n" +
      "Bendita sois vos entre as mulheres e bendito e o fruto do vosso ventre, Jesus.\n" +
      "Santa Maria, Mae de Deus, rogai por nos, pecadores,\n" +
      "agora e na hora de nossa morte. Amem.",
  },
  {
    key: "gloria",
    title: "Gloria",
    text:
      "Gloria ao Pai, ao Filho e ao Espirito Santo.\n" +
      "Como era no principio, agora e sempre. Amem.",
  },
  {
    key: "jaculatoria-fatim",
    title: "Jaculatoria de Fatima",
    text:
      "O meu Jesus, perdoai-nos e livrai-nos do fogo do inferno,\n" +
      "levai as almas todas para o ceu e socorrei principalmente as que mais precisarem.",
  },
  {
    key: "salve-rainha",
    title: "Salve Rainha",
    text:
      "Salve, Rainha, Mae de misericordia, vida, doçura e esperanca nossa, salve.\n" +
      "A vos bradamos, os degredados filhos de Eva. A vos suspiramos, gemendo e chorando neste vale de lagrimas.\n" +
      "Eia, pois, Advogada nossa, esses vossos olhos misericordiosos a nos volvei.\n" +
      "E depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre.\n" +
      "O clemente, o piedoso, o doce sempre Virgem Maria.\n" +
      "Rogai por nos, santa Mae de Deus, para que sejamos dignos das promessas de Cristo. Amem.",
  },
  {
    key: "oracao-final",
    title: "Oracao Final",
    text:
      "Oremos.\n" +
      "O Deus, cujo Filho Unigenito, com sua vida, morte e ressurreicao, nos mereceu os premios da salvacao eterna,\n" +
      "concedei-nos, nos vos suplicamos, que, meditando os misterios do santissimo Rosario da bem-aventurada Virgem Maria,\n" +
      "imitemos o que eles contem e alcancemos o que prometem. Por Cristo, nosso Senhor. Amem.",
  },
] as const satisfies readonly Prayer[];
