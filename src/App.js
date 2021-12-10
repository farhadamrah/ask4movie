import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from './components/Routes/Routes';
import Messages from './components/global/Messages/Messages';

const App = props => {
    return (
        <Router>
            <Routes />
        </Router>
    );
};

App.propTypes = {};

export default App;
