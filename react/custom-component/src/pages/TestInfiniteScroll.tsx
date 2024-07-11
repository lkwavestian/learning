import React, { useState } from 'react';
import { List } from 'antd-mobile';
import InfiniteScroll from '../components/InfiniteScroll/index.tsx';
import { mockRequest } from '../utils/index.js';

export default () => {
    const [data, setData] = useState<string[]>([
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
    ]);
    const [hasMore, setHasMore] = useState(true);
    async function loadMore() {
        const append = await mockRequest();
        setData((val) => [...val, ...append]);
        setHasMore(append.length > 0);
    }

    return (
        <>
            <List>
                {data.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                ))}
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </>
    );
};
