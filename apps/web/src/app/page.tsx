import { redirect } from "next/navigation";

export default function Home() {
  const diaSemana = new Date().getDay();

  let rota = "/gozosos";

  switch (diaSemana) {
    case 1: // Segunda
    case 6: // Sábado
      rota = "/gozosos";
      break;
    case 2: // Terça
    case 5: // Sexta
      rota = "/dolorosos";
      break;
    case 3: // Quarta
    case 0: // Domingo
      rota = "/gloriosos";
      break;
    case 4: // Quinta
      rota = "/luminosos";
      break;
  }

  redirect(rota as never);
}
