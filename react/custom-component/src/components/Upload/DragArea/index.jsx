import React, { useState } from 'react';
import styles from './index.less';
import { fileSize, extname } from '../../../utils';

const VALID = {
    exit: ['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png'],
    fileSize: 10 * 1024 * 1024,
};

const DragArea = ({ addFiles, exts, fileSize: fileSizeArg }) => {
    const supports = exts.join('、');

    const maxSize = fileSize(fileSizeArg);
    const [isDragging, setIsDragging] = useState(false);
    const dragInHandler = (e) => {
        if (!e.dataTransfer.types.includes('Files')) {
            return;
        }
        e.preventDefault();
        setIsDragging(true);
    };
    const dragLeaveHandler = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };
    const dropHandler = async (e) => {
        e.preventDefault();
        setIsDragging(false);
        let results = await Promise.all(
            [...e.dataTransfer.items].map((item) => handleEntry(item.webkitGetAsEntry()))
        );
        results = results.flat(Infinity).filter((f) => {
            return validExt(f.name) && validSize(f.size);
        });
        console.log('results DragArea dropHandler:>> ', results);
        addFiles(...results);
    };

    const validExt = (name) => VALID.exit.includes(extname(name));

    const validSize = (size) => size <= VALID.fileSize;

    const handleEntry = (entry) => {
        return new Promise((resolve) => {
            if (entry.isFile) {
                entry.file(resolve);
                return;
            }
            const dirReader = entry.createReader();
            dirReader.readEntries(async (entries) => {
                resolve(await Promise.all(entries.map(handleEntry)));
            });
        });
    };
    return (
        <div
            className={styles.dragArea}
            onDragEnter={dragInHandler}
            onDragOver={dragInHandler}
            onDrop={dropHandler}
            onDragLeave={dragLeaveHandler}
        >
            <p className={styles.section}>
                <i className="iconfont i-shangchuan" style={{ fontSize: '2.8rem' }}></i>
                <span>将目录或多个文件拖拽到此进行扫描</span>
            </p>
            <p className={styles.section}>支持的文件类型：{supports}</p>
            <p>每个文件允许的最大尺寸：{maxSize}</p>
        </div>
    );
};

export default DragArea;
