import * as React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux';

import AppNavigation from './src/navigation/index';

function App() {
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
}
export default App;

