import {
  IonContent,IonHeader,IonAvatar,IonPage,IonTitle,IonToolbar,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,} from "@ionic/react";
import "./Tab1.css";

// Componente reutilizável para animar palavras
const AnimatedText: React.FC<{
  text: string;
  delay?: number;
  className?: string;
}> = ({ text, delay = 0, className = "" }) => {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="animated-word"
          style={{ animationDelay: `${delay + i * 0.15}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
};

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <AnimatedText text="Apresentação" />
          </IonTitle>
        </IonToolbar>

        <IonAvatar className="cabecalho">
          <img alt="Foto" src="src/img/perfil.jpg" />
        </IonAvatar>
      </IonHeader>

      <IonContent fullscreen  className="fundo-imagem">
        <IonHeader collapse="condense">
          <IonToolbar >
            <IonTitle size="large">
              <AnimatedText text="Seja bem vindo" delay={0.3} />
            </IonTitle >
          </IonToolbar>
        </IonHeader>

        <IonCard className="card-animado">
          <IonCardHeader>
            <IonCardTitle>
              <AnimatedText className="titulo" text="você vai aprender a usar cartões" delay={0.6} />
            </IonCardTitle>
            <IonCardSubtitle>
              <AnimatedText className="titulo1" text=" Cartão com defeito e a soluçãoes" delay={0.9} />
            </IonCardSubtitle >
          </IonCardHeader >

          <IonCardContent>
            <AnimatedText   
              className="titulo2"text="Pequena descrição do cartão com efeito suave."
              delay={1.2}
              
            />
          </IonCardContent >
        </IonCard >
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
