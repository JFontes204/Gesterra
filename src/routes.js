import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import './config/statusBarConfig';
import Login from './pages/login/';
import Processos from './pages/processos';
import ProcessoDetalhes from './pages/processoDetalhes';
import CapturarVertices from './pages/capturarVertices';
import Mapa from './pages/capturarVertices/mapa';
import Camara from './pages/Camara';
import Main from './pages/Main/index';

const Routes = createAppContainer(
    createStackNavigator({
        Login,
        Processos,
        ProcessoDetalhes,
        CapturarVertices,
        Camara,
        Mapa,
        Main
    }),
);

export default Routes;