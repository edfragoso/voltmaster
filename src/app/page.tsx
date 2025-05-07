import Header from "./components/Header";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import HighlightSection from "./components/HighlightSection";
import Services from "./components/Services";
import Objectives from "./components/Objectives";
import Values from "./components/Values";
import MissionVision from "./components/MissionVision";

export default function Home() {
  return (
    <>
      
      <main className="container">
        <HighlightSection />

        <MissionVision />
        <Values />
        <Objectives />

        <Services />

        <p className="fun-fact">
          Curiosidade: Sabia que a fiação mal feita é responsável por 30% dos
          incêndios residenciais? Com 20 anos de experiência, eu garanto zero
          preocupações.
        </p>

        <HighlightSection />
        <h2>CLT vs. Autônomo: A escolha é sua</h2>
        <p>
          Com um eletricista CLT, você paga encargos trabalhistas, margem da
          empresa e burocracias. Comigo, você paga apenas pelo serviço bem feito
          - direto, sem intermediários e com garantia pessoal.
        </p>

        <div className="fun-note">
          "Na VoltMaster, acreditamos que um bom eletricista não só conecta
          fios, mas também pessoas e soluções. E sim, nós rimos de nossas
          próprias piadas sobre corrente alternada!"
        </div>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
