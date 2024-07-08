// privateRoutes.js

import TestPullToRefresh from '../pages/TestPullToRefresh.tsx';
import testTable from '../pages/testTable';

const routes = [
    {
        path: '/testTable',
        component: testTable,
        exact: true,
    },
    {
        path: '/testPullToRefresh',
        component: TestPullToRefresh,
        exact: true,
    },
];

export default routes;
