import { useState } from 'react';
import { Button } from 'antd';

function UseState() {
    const [count, setCount] = useState(0);
    const [state, setState] = useState({ number: 0 });
    return (
        <>
            {/* useState的两种方式 */}
            <div>数字：{count}</div>
            <Button type="primary" onClick={() => setCount(count + 1)}>
                第一种方式+1
            </Button>
            <Button
                type="primary"
                onClick={() => setCount((count) => count + 1)}
                style={{ marginLeft: 10 }}
            >
                第二种方式+1
            </Button>

            {/* useState如果是对象传入的话，并不会实时更新 */}
            <div>数字形式：{count}</div>
            <Button
                type="primary"
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                点击+1
            </Button>
            <div>对象形式：{state.number}</div>
            <Button
                type="primary"
                onClick={() => {
                    //useState更像是一个浅比较，如果是对象直接传入的话，并不会实时更新
                    //可以用...重新赋值
                    state.number++;
                    setState(state);
                    // setState({
                    //     ...state,
                    //     number: state.number + 1,
                    // });
                }}
            >
                点击+1
            </Button>
        </>
    );
}

export default UseState;
