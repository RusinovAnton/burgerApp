import { render as ReactRender } from 'react-dom';
import routes from './view/routes';

ReactRender (
    routes,
    document.getElementById('app')
);
