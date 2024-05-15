// index.tsx
import { Table, Pagination, Row, Col, Button } from 'antd';
import React, { useEffect, useReducer, useCallback, Fragment, useState } from 'react';

const UseAsyncTable = props => {
  const { owncolumns, queryAction, params, baseProps, defaultCurrent, noInit = false } = props;
  // 分页数据
  const paginationInitial = {
    current: defaultCurrent || 1,
    pageSize: 10,
    total: 0,
  };
  // table组件全量数据
  const initialState = {
    loading: false,
    pagination: paginationInitial,
    dataSource: [],
  };

  const reducer = useCallback((state, action) => {
    const { payload } = action;
    switch (action.type) {
      case 'TOGGLE_LOADING':
        return { ...state, loading: !state.loading };
      case 'SET_PAGINATION':
        console.log('reducer更新', payload);
        return { ...state, pagination: payload.pagination };
      case 'SET_DATA_SOURCE':
        return { ...state, dataSource: payload.dataSource };
      default:
        return state;
    }
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isInit, setIsInit] = useState(true);
  const [mount, setMount] = useState(false);

  async function fetchData(currentPage) {
    dispatch({
      type: 'TOGGLE_LOADING',
    });
    // 分页字段名称转换
    const { current: pageNum, pageSize } = state.pagination;
    const concatParams = { pageNum: currentPage || pageNum, pageSize, ...params };
    const res = await queryAction(concatParams).catch(err => {
      console.log('请求表格数据出错了');
      dispatch({ type: 'TOGGLE_LOADING' });
      return { err };
    });
    console.log('res :>> ', res);
    // 关闭loading
    dispatch({
      type: 'TOGGLE_LOADING',
    });
    if (res && res.status && res.status === 200) {
      const data = res.data;

      dispatch({
        type: 'SET_PAGINATION',
        payload: {
          pagination: {
            ...state.pagination,
            current: currentPage || pageNum,
            total: data.content.total,
          },
        },
      });
      // 回填list数据
      dispatch({
        type: 'SET_DATA_SOURCE',
        payload: {
          dataSource: data.content.orgUserList,
        },
      });
    }
  }

  // 改变页码
  function handleTableChange(current, pageSize) {
    console.log('页码改变', current, pageSize);
    dispatch({
      type: 'SET_PAGINATION',
      payload: {
        pagination: {
          ...state.pagination,
          current,
          pageSize,
        },
      },
    });
  }

  // useCallback包装请求，缓存依赖，优化组件性能
  const fetchDataWarp = useCallback(fetchData, [
    state.pagination.current,
    state.pagination.pageSize,
  ]);

  const paramsChangeFetch = useCallback(fetchData, [params]);

  useEffect(() => {
    console.log('页码改变，请求方法更新', `noInit: ${noInit}, isInit: ${isInit}`);
    if (!(noInit && isInit)) {
      console.log('执行数据列表更新');
      fetchDataWarp();
    }
    if (isInit) {
      setIsInit(false);
    }
  }, [fetchDataWarp]);

  // 查询参数变化重置页码
  useEffect(() => {
    if (mount) {
      paramsChangeFetch(1);
    }
    setMount(true);
  }, [paramsChangeFetch]);

  return (
    <Fragment>
      <Table
        columns={owncolumns(fetchData)}
        rowKey={(record: any) => record.id}
        pagination={false}
        dataSource={state.dataSource}
        loading={state.loading}
        {...baseProps}
      />
      <Row style={{ marginTop: 20 }} justify="end">
        <Col>
          <Pagination
            defaultCurrent={1}
            current={state.pagination.current}
            total={state.pagination.total}
            showTotal={total => `总共 ${total} 条数据`}
            showSizeChanger
            onChange={handleTableChange}
          />
        </Col>
      </Row>
    </Fragment>
  );
};
export default UseAsyncTable;
