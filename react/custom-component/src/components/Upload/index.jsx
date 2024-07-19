import React from 'react';
import styles from './index.less';
import { useUpload } from './hooks';
import { Button } from 'antd';
import DragArea from './DragArea';
import FileTable from './FileTable';

const Upload = () => {
    const exts = ['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png'];
    const maxSize = 1024 * 1024;
    const { files, addFiles, deleteFiles, pendingFiles, upload } = useUpload([], exts, maxSize);
    const handleFileChange = (e) => {
        console.log('handleFileChange e:>> ', e);
        addFiles(...e.target.files);
    };
    console.log('styles :>> ', styles);
    return (
        <div className={styles.container}>
            <DragArea exts={exts} fileSize={maxSize} addFiles={addFiles}></DragArea>
            <div className="operation">
                <Button type="primary">
                    选择文件
                    <input type="file" multiple onChange={handleFileChange} />
                </Button>
                <Button type="primary">
                    选择文件夹
                    <input type="file" webkitdirectory onChange={handleFileChange} />
                </Button>
            </div>
            <FileTable files={files} deleteFiles={deleteFiles} />
            <div className="operation">
                <Button disabled={pendingFiles.length === 0} type="primary" onClick={upload}>
                    开始上传
                </Button>
            </div>
        </div>
    );
};

export default Upload;
