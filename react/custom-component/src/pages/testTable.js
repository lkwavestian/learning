import React, { useCallback, useState } from 'react';
import UseAsyncTable from '../components/useAsyncTable';
import axios from 'axios';
import columnFunc from '../utils/ColumnFunc';

const TestTable = () => {
    const [params, setParams] = useState({});
    // 查询方法
    const fetchData = () => axios.get('/api/users');
    // 获取表头方法
    const getColumn = columnFunc.educationManage.operationLog();
    // 获取表头字段(缓存数据)  updateMethod 这里是刷新表格方法，用于表格内部操作调用
    const cbGetColumn = useCallback((updateMethod) => getColumn(updateMethod), []);
    return <UseAsyncTable params={params} owncolumns={cbGetColumn} queryAction={fetchData} />;
};
export default TestTable;
