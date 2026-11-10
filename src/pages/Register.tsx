import {IonCard,IonButton,IonItem,IonInput,IonCardContent,IonCardHeader,IonCardTitle,IonHeader,IonButtons,IonTitle,IonToolbar,IonMenuButton,} from "@ionic/react";

import "./Register.css";

const Register: React.FC = () => {
  return (
    <div className="tela-register">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>Cadastro</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle color="success">Cadastro de Informações</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonItem>
            <IonInput
              type="text"
              label="Nome"
              labelPlacement="floating"
              placeholder="Insira seu nome"
              
            />
          </IonItem>

          <IonItem>
            <IonInput
              type="email"
              label="E-mail"
              labelPlacement="floating"
              placeholder="Insira seu e-mail"
              
            />
          </IonItem>

          <IonItem>
            <IonInput
              type="password"
              label="Senha"
              labelPlacement="floating"
              placeholder="Insira sua senha"
              
            />
          </IonItem>

          <IonItem>
            <IonInput
              type="password"
              label="Confirmar sua Senha"
              labelPlacement="floating"
              placeholder="Confirme sua senha"
              
            />
          </IonItem>

          <IonItem>
            <IonInput
              type="tel"
              label="Telefone"
              labelPlacement="floating"
              placeholder="Insira seu telefone"
              required
            />
          </IonItem>

          <IonButton expand="block" color="success">
            Confirmar
          </IonButton>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Register;
