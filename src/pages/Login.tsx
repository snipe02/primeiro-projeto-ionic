import {  IonCard, IonItem, IonButton,IonInput, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import { useParams } from 'react-router';
import './Login.css';


const Login: React.FC = () => {

const {name } = useParams<{ name: string; }>();

  return (
    <div className="tela-login">
    <IonCard>
      <IonCardHeader>
        <IonCardTitle color="success">APP 2</IonCardTitle>
        
      </IonCardHeader>

      <IonCardContent>
        <IonItem>
          <IonInput type="email" label="E-mail" labelPlacement="floating" placeholder="Insira o Texto">
          </IonInput>       
        </IonItem>
        <IonItem>
          <IonInput type="password" label="Senha" labelPlacement="floating" placeholder="Insira a Senha">
          </IonInput>       
        </IonItem>
        <IonItem>
        <IonButton fill="clear">Esqueci a Senha/Email</IonButton>
         </IonItem>
         <IonItem className="teste">
        <IonButton size='full' color="success">Login</IonButton>
        <IonButton size="full" fill='clear'>Cadastres-se</IonButton>
        </IonItem>
      </IonCardContent>
    </IonCard>
    </div>
  );
}; 

export default Login;
