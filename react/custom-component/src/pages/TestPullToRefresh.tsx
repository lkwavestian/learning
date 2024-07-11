import React, { useState } from 'react';
import { List } from 'antd-mobile';
import { lorem, sleep } from '../utils/index.js';
import PullToRefresh from '../components/PullToRefresh/index.tsx';

function getNextData() {
    const ret: string[] = [];
    for (let i = 0; i < 18; i++) {
        ret.unshift(lorem.generateWords(1));
    }
    return ret;
}

const TestPullToRefresh = () => {
    const [data, setData] = useState(() => getNextData());
    const refreshHandler = async () => {
        await sleep(1000);
        setData([...getNextData(), ...data]);
    };
    return (
        <div>
            <PullToRefresh onRefresh={refreshHandler}>
                <List>
                    {data.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                    ))}
                </List>
            </PullToRefresh>
        </div>
    );
};

export default TestPullToRefresh;
