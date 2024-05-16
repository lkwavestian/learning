import { useState, createContext, useContext } from 'react';
import { Button } from 'antd';

//1. 先使用createContext创建值
const CountContext = createContext(-1);

const Child = () => {
    const count = useContext(CountContext);

    return (
        <div style={{ marginTop: 10 }}>
            子组件获取到的count: {count}
            <Son />
        </div>
    );
};

const Son = () => {
    const count = useContext(CountContext);

    return <div style={{ marginTop: 10 }}>孙组件获取到的count: {count}</div>;
};

const UseContext = () => {
    let [count, setCount] = useState(0);

    return (
        <>
            <div>父组件中的count：{count}</div>
            <Button type="primary" onClick={() => setCount((v) => v + 1)}>
                点击+1
            </Button>

            {/* 2. 使用Provider包裹值 */}
            <CountContext.Provider value={count}>
                <Child />
            </CountContext.Provider>
        </>
    );
};

export default UseContext;
