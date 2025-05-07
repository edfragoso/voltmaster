'use client';
import { MissionVisionContainer, Card } from "../components/MissionVision.style";

export default function MissionVision() {
  return (
    <MissionVisionContainer id="about">
      <Card>
        <h2>Missão</h2>
        <p>"Fornecer soluções elétricas inteligentes e seguras que iluminem vidas e energizem negócios, mantendo o humor mesmo nos fios mais embaraçados."</p>
      </Card>
      
      <Card>
        <h2>Visão</h2>
        <p>"Ser reconhecido como o eletricista mais confiável do Brasil até 2030, onde cada interruptor ligado seja uma oportunidade de superar expectativas."</p>
      </Card>
    </MissionVisionContainer>
  );
}