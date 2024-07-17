// privateRoutes.js

import TestInfiniteScroll from '../pages/TestInfiniteScroll.tsx';
import TestPullToRefresh from '../pages/TestPullToRefresh.tsx';
import testTable from '../pages/testTable.tsx';

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
    {
        path: '/testInfiniteScroll',
        component: TestInfiniteScroll,
        exact: true,
    },
];

export default routes;
