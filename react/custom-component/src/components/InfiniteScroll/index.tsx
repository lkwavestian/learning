import React from 'react';
import { useDownLoad } from './hooks.ts';

interface IProps {
    hasMore: boolean; // 是否还有更多的数据
    loadMore: () => Promise<unknown>;
}

/* 
    无限滚动组件
*/
const InfiniteScroll = ({ hasMore, loadMore }: IProps) => {
    const { tips } = useDownLoad({ hasMore, loadMore });
    return <div>{hasMore ? tips : '没有更多值了'} </div>;
};

export default InfiniteScroll;
