/* eslint-disable react/no-children-prop */

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Countries from './component/Countries';
import Details from './component/Details';
import Filter from './component/Filter';

function App() {
    return (
        <Router>
            <Route exact path="/">
                <Filter />
                <Countries />
            </Route>

            <Route path="/countries/:name" children={<Details />} />
        </Router>
    );
}

export default App;
