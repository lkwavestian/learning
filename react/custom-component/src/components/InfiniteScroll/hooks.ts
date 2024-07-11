import { debounce } from 'lodash';
import React, { useState, useEffect } from 'react';

const OFFSET = 90;

export const useDownLoad = ({ hasMore = false, loadMore = () => {} }) => {
    const [tips, setTips] = useState('');
    useEffect(() => {
        window.onscroll = debounce(async () => {
            const { clientHeight, scrollTop } = document.documentElement;
            const { scrollHeight } = document.body;
            if (hasMore && clientHeight + scrollTop >= scrollHeight - OFFSET) {
                setTips('加载中');
                await loadMore();
                setTips('加载完成');
                setTimeout(() => {
                    setTips('');
                }, 1000);
            }
        }, 500);

        return () => {
            window.onscroll = null;
        };
    }, [hasMore]);

    return { tips };
};
