import {IonApp,IonRouterOutlet,IonSplitPane,setupIonicReact,} from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";
import { Navigate, Route } from "react-router-dom";

// Componentes
import Menu from "./components/Menu";

// Páginas
import Page from "./pages/Page";
import Loader from "./pages/Loader";
import Login from "./pages/Login";
import Register from "./pages/Register";

// CSS do Ionic 
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main-content">
          <Menu />

          <IonRouterOutlet id="main-content">
            <Route path="/" element={<Navigate to="/loader" replace />} />

            <Route path="/loader" element={<Loader />} />

            <Route path="/page" element={<Page />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
