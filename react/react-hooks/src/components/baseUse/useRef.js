import { useState, useRef, useEffect, Component, forwardRef } from 'react';

import { Button } from 'antd';

//1. 获取元素的DOM
// const UseRef = () => {
//     const scrollRef = useRef(null);
//     const [clientHeight, setClientHeight] = useState(0);
//     const [scrollTop, setScrollTop] = useState(0);
//     const [scrollHeight, setScrollHeight] = useState(0);

//     const onScroll = () => {
//         if (scrollRef?.current) {
//             let clientHeight = scrollRef?.current.clientHeight; //可视区域高度
//             let scrollTop = scrollRef?.current.scrollTop; //滚动条滚动高度
//             let scrollHeight = scrollRef?.current.scrollHeight; //滚动内容高度
//             setClientHeight(clientHeight);
//             setScrollTop(scrollTop);
//             setScrollHeight(scrollHeight);
//         }
//     };

//     return (
//         <>
//             <div>
//                 <p>可视区域高度：{clientHeight}</p>
//                 <p>滚动条滚动高度：{scrollTop}</p>
//                 <p>滚动内容高度：{scrollHeight}</p>
//             </div>
//             <div
//                 style={{ height: 200, border: '1px solid #000', overflowY: 'auto' }}
//                 ref={scrollRef}
//                 onScroll={onScroll}
//             >
//                 <div style={{ height: 2000 }}></div>
//             </div>
//         </>
//     );
// };

//2. 缓存数据
// const UseRef = () => {
//     const [count, setCount] = useState(0);
//     const countRef = useRef(0);

//     return (
//         <>
//             <div>useState的count：{count}</div>
//             <Button type="primary" onClick={() => setCount((v) => v + 1)}>
//                 useState点击
//             </Button>
//             <div>ref的count：{countRef.current}</div>
//             <Button type="primary" onClick={() => (countRef.current = countRef.current + 1)}>
//                 useRef点击
//             </Button>
//         </>
//     );
// };

// 3. 跨层级获取实例与通信
// 我们可以通过 forwardRef 转发 ref 来获取子组件的实例，获取一些方法、值，并且可以自定义设置 ref 的值。如：
class Son extends Component {
    render() {
        return <div>我是孙组件</div>;
    }
}

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    div = null;
    son = null;
    componentDidMount() {
        this.props.forwardRef.current = {
            div: this.div, // 子组件的div
            child: this, // 子组件的实例
            son: this.son, // 孙组件的实例
        };
    }

    render() {
        return (
            <>
                <div ref={(node) => (this.div = node)}>我是子组件</div>
                <Son ref={(node) => (this.son = node)} />
            </>
        );
    }
}

const ForwardChild = forwardRef((props, ref) => <Child {...props} forwardRef={ref} />);

const UseRef = () => {
    const ref = useRef(null);

    useEffect(() => {
        console.log(ref.current);
    }, []);

    return (
        <>
            <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
            <ForwardChild ref={ref} />
        </>
    );
};

export default UseRef;
