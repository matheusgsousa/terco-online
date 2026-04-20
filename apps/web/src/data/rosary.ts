import { prayers } from "./prayers";

export type PrayerKey = (typeof prayers)[number]["key"];

export type MysteryKey = "gozosos" | "luminosos" | "dolorosos" | "gloriosos";

export type Decade = {
  index: number;
  title: string;
  image?: string;
};

export type Mystery = {
  key: MysteryKey;
  title: string;
  days: string[];
  imageDefault: string;
  imageByDecade: string[];
  decades: Decade[];
};

export const mysteries: Mystery[] = [
  {
    key: "gozosos",
    title: "Misterios Gozosos",
    days: ["segunda", "sabado"],
    imageDefault: "/images/rosary/gozosos/anunciacao-anjo-gabriel.png",
    imageByDecade: [
      "/images/rosary/gozosos/anunciacao-anjo-gabriel.png",
      "/images/rosary/gozosos/visitacao-maria-isabel.png",
      "/images/rosary/gozosos/nascimento-jesus.png",
      "/images/rosary/gozosos/apresentacao-jesus-templo.png",
      "/images/rosary/gozosos/encontro-jesus-templo.png",
    ],
    decades: [
      { index: 1, title: "A Anunciacao" },
      { index: 2, title: "A Visitacao" },
      { index: 3, title: "O Nascimento de Jesus" },
      { index: 4, title: "A Apresentacao no Templo" },
      { index: 5, title: "A Perda e Encontro no Templo" },
    ],
  },
  {
    key: "luminosos",
    title: "Misterios Luminosos",
    days: ["quinta"],
    imageDefault: "/images/rosary/luminosos/batismo-jesus.png",
    imageByDecade: [
      "/images/rosary/luminosos/batismo-jesus.png",
      "/images/rosary/luminosos/bodas-cana.png",
      "/images/rosary/luminosos/anuncio-reino-deus.png",
      "/images/rosary/luminosos/transfiguracao-jesus.png",
      "/images/rosary/luminosos/instituicao-eucaristia.png",
    ],
    decades: [
      { index: 1, title: "O Batismo de Jesus" },
      { index: 2, title: "As Bodas de Cana" },
      { index: 3, title: "O Anuncio do Reino" },
      { index: 4, title: "A Transfiguracao" },
      { index: 5, title: "A Instituicao da Eucaristia" },
    ],
  },
  {
    key: "dolorosos",
    title: "Misterios Dolorosos",
    days: ["terca", "sexta"],
    imageDefault: "/images/rosary/dolorosos/agonia-jesus-horto.png",
    imageByDecade: [
      "/images/rosary/dolorosos/agonia-jesus-horto.png",
      "/images/rosary/dolorosos/flagelacao-jesus.png",
      "/images/rosary/dolorosos/coroacao-espinhos.png",
      "/images/rosary/dolorosos/jesus-carrega-cruz.png",
      "/images/rosary/dolorosos/crucificacao-morte-jesus.png",
    ],
    decades: [
      { index: 1, title: "A Agonia no Horto" },
      { index: 2, title: "A Flagelacao" },
      { index: 3, title: "A Coroacao de Espinhos" },
      { index: 4, title: "O Caminho do Calvario" },
      { index: 5, title: "A Crucificacao" },
    ],
  },
  {
    key: "gloriosos",
    title: "Misterios Gloriosos",
    days: ["quarta", "domingo"],
    imageDefault: "/images/rosary/gloriosos/ressurreicao.png",
    imageByDecade: [
      "/images/rosary/gloriosos/ressurreicao.png",
      "/images/rosary/gloriosos/ascensao.png",
      "/images/rosary/gloriosos/descida-espirito-santo.png",
      "/images/rosary/gloriosos/assuncao-maria.png",
      "/images/rosary/gloriosos/coroacao-maria.png",
    ],
    decades: [
      { index: 1, title: "A Ressurreicao" },
      { index: 2, title: "A Ascensao" },
      { index: 3, title: "A Vinda do Espirito Santo" },
      { index: 4, title: "A Assuncao de Maria" },
      { index: 5, title: "A Coroacao de Maria" },
    ],
  },
];

export const prayerOrder = {
  opening: [
    "sinal-da-cruz",
    "credo",
    "pai-nosso",
    "ave-maria",
    "ave-maria",
    "ave-maria",
    "gloria",
  ] as PrayerKey[],
  decade: [
    "pai-nosso",
    "ave-maria",
    "gloria",
    "jaculatoria-fatim",
  ] as PrayerKey[],
  closing: ["salve-rainha", "oracao-final"] as PrayerKey[],
};
