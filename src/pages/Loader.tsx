import { IonSpinner} from '@ionic/react';
import './Loader.css';

const Loader: React.FC = () => {


  return (
    <div className="center">
    <IonSpinner></IonSpinner>
    </div>
  );
};

export default Loader;
