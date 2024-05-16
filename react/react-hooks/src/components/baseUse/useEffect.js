import { useState, useEffect } from 'react';
import { Button } from 'antd';

const Child = () => {
    // useEffect(() => {
    //     console.log('Child 挂载');

    //     //在下一次effect发生之前，会执行
    //     return () => {
    //         console.log('Child 卸载');
    //     };
    // }, []);

    // 决定项为[]时，返回一个函数时，大致相当于willUnMount
    // useEffect(() => {
    //     let timerId = window.setInterval(() => {
    //         console.log(Date.now());
    //     }, 1000);

    //     // 在useEffect返回一个函数时，大致相当于willUnMount（不准确，看下面）
    //     return () => {
    //         window.clearInterval(timerId);
    //     };
    // }, []);

    return <div>useEffect测试</div>;
};

const UseEffect = () => {
    const [flag, setFlag] = useState(false);

    // useEffect(() => {
    //     console.log('模拟 class 组件的 DidMount 和 DidUpdat');
    // });

    // 模拟 class 组件的 DidMount
    // useEffect(() => {
    //     console.log('模拟 class 组件的 DidMoun');
    // }, []); // 第二个参数是 [] （不依赖于任何 state）

    // useEffect(() => {
    //     console.log(`开始监听在线状态`);

    //     // 【特别注意】
    //     // 此处并不完全等同于 WillUnMount
    //     // props 发生变化，即更新，也会执行结束监听
    //     // 准确的说：返回的函数，会在下一次 effect 执行之前，被执行
    //     return () => {
    //         console.log(`结束监听在线状态`);
    //     };
    // });

    //useEffect闭包问题
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log(flag);
    //     }, 1000);
    //     return () => clearInterval(timer);
    // }, []);

    //闭包解决方案可以加一个决定项
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log(flag);
    //     }, 1000);
    //     return () => clearInterval(timer);
    // }, [flag]);

    return (
        <>
            <Button
                type="primary"
                onClick={() => {
                    setFlag((v) => !v);
                }}
            >
                {flag ? '卸载' : '挂载'}
            </Button>
            {flag && <Child />}
        </>
    );
};

export default UseEffect;
