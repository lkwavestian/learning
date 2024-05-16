import { useState, useMemo } from 'react';
import { Button } from 'antd';

const usePow = (list) => {
    // 不使用useMemo，flag的每次变化都会时usePow执行
    // return list.map((item) => {
    //     console.log('我是usePow');
    //     return Math.pow(item, 2);
    // });

    // 使用useMemo，会根据依赖项来决定是否进行useMemo第一个函数的调用
    return useMemo(() => {
        console.log('我是usePow');
        return list.map((item) => {
            return Math.pow(item, 2);
        });
    }, []);
};

const UseMemo = () => {
    let [flag, setFlag] = useState(true);

    const data = usePow([1, 2, 3]);

    return (
        <>
            <div>数字集合：{JSON.stringify(data)}</div>
            <Button type="primary" onClick={() => setFlag((v) => !v)}>
                状态切换{JSON.stringify(flag)}
            </Button>
        </>
    );
};

export default UseMemo;
