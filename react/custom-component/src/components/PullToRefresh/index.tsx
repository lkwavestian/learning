import React from 'react';
import { AutoCenter } from 'antd-mobile';

import { TIPS, usePullToRefresh, STATUS } from './hooks.ts';

interface IProps {
    children: React.ReactNode; //列表页的表格数据
    onRefresh: () => void; // 触发的函数事件
}

/* 
    下拉刷新组件
*/
const PullToRefresh = ({ children, onRefresh }: IProps) => {
    const { status, containerRef } = usePullToRefresh(onRefresh);
    return (
        <div ref={containerRef}>
            {status !== STATUS.FINISH && <AutoCenter>{TIPS[status]}</AutoCenter>}
            {children}
        </div>
    );
};

export default PullToRefresh;
