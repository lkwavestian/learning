import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

function App() {
    return (
        <Router>
            <Switch>
                {routes.map((item) => (
                    <Route {...item} />
                ))}
            </Switch>
        </Router>
    );
}

export default App;
