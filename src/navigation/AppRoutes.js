import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
const AppRoutes = () => {
    const Counter = React.lazy(()=>import('../features/counter/Counter.js'));
    const ReactHelp = React.lazy(()=>import('../features/ReactHelp/ReactHelp.js'));
    const NotFound = React.lazy(()=> import('./NotFound.js'));
    return (
        <Router>
            <Routes>
                <Route path="/" element={<React.Suspense fallback={<p>loading...</p>}><Counter/></React.Suspense>}/>
                <Route path="/help" element={<PrivateRoute path="/help">
                    <ReactHelp/>
                </PrivateRoute>}/>
                <Route path='/notfound' element={<React.Suspense fallback={<p>loading...</p>}><NotFound/></React.Suspense>}/>
            </Routes>

        </Router>
    );
};

export default AppRoutes;
