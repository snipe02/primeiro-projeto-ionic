import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton, IonList } from '@ionic/react';
import { useState } from 'react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [clientes, setClientes] = useState<{ nome: string; cidade: string }[]>([]);

  const cadastrarCliente = () => {
    if (nome.trim() === '' || cidade.trim() === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    setClientes([...clientes, { nome, cidade }]);
    setNome('');
    setCidade('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contato</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cadastro de Cliente</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonItem>
            <IonLabel position="stacked">Nome</IonLabel>
            <IonInput
              value={nome}
              placeholder="Digite o nome do cliente"
              onIonInput={(e) => setNome(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Cidade</IonLabel>
            <IonInput
              value={cidade}
              placeholder="Digite a cidade do cliente"
              onIonInput={(e) => setCidade(e.detail.value!)}
            />
          </IonItem>
        </IonList>

        <div style={{ padding: '16px' }}>
          <IonButton expand="block" onClick={cadastrarCliente}>
            Cadastrar
          </IonButton>
        </div>

        {clientes.length > 0 && (
          <>
            <IonTitle size="small" style={{ padding: '16px' }}>
              Clientes cadastrados
            </IonTitle>
            <IonList>
              {clientes.map((cliente, index) => (
                <IonItem key={index}>
                  <IonLabel>
                    <h2>{cliente.nome}</h2>
                    <p>{cliente.cidade}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;