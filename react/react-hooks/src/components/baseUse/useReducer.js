import { useReducer } from 'react';
import { Button } from 'antd';

const UseReducer = () => {
    console.log('父组件发生更新');

    const [count, dispatch] = useReducer((state, action) => {
        switch (action?.type) {
            case 'add':
                return state + action?.payload;
            case 'sub':
                return state - action?.payload;
            default:
                return state;
        }
    }, 0);

    return (
        <>
            <div>count：{count}</div>
            <Button type="primary" onClick={() => dispatch({ type: 'add', payload: 1 })}>
                加1
            </Button>
            <Button
                type="primary"
                style={{ marginLeft: 10 }}
                onClick={() => dispatch({ type: 'sub', payload: 1 })}
            >
                减1
            </Button>

            {/* 在reducer中，如果返回的state和原先的state没有发生变化，组件不会更新 */}
            <Button
                type="primary"
                style={{ marginLeft: 10 }}
                onClick={() => dispatch({ type: 'no', payload: 1 })}
            >
                无关按钮
            </Button>
            <Child count={count} />
        </>
    );
};

const Child = ({ count }) => {
    console.log('子组件发生更新');
    return <div>在子组件的count：{count}</div>;
};

export default UseReducer;
