import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import DragArea from './DragArea';
import FileTable from './FileTable';
import { upload as uploadFile } from '../../api/upload';
import { extname, fileSize } from '../../utils';

const createNewFile = (f) => ({
    file: f,
    status: 'pending',
    progress: 0,
});

const exts = ['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png'];
const maxSize = 10 * 1024 * 1024;

const Upload = () => {
    const [files, setFiles] = useState([]);
    const [pendingFiles, setPendingFiles] = useState([]);

    const addFiles = (...args) => {
        args = args.filter((f) => exts.includes(extname(f.name)) && f.size <= maxSize);
        setFiles([...files, ...args.map(createNewFile)]);
    };

    const deleteFiles = (...args) => {
        for (const f of args) {
            let filesCopy = [...files];
            const i = filesCopy.indexOf(f);
            filesCopy.splice(i, 1);
            setFiles([...filesCopy]);
            if (f.status === 'uploading') {
                f.abort();
            }
        }
    };

    useEffect(() => {
        setPendingFiles(files.filter((f) => f.status === 'pending'));
    }, [files]);

    console.log('pendingFiles :>> ', pendingFiles);

    const uploadFn = () => {
        /* let mapPendingFiles = pendingFiles.map(async (f, index) => {
            let file = { ...f };
            file.status = 'uploading';
            file.abort = await uploadFile(
                file.file,
                (p) => {
                    file.progress = p;
                },
                (resp) => {
                    file.status = 'uploaded';
                    file.resp = resp;
                }
            );
            return file;
        });
        console.log('mapPendingFiles :>> ', mapPendingFiles);
        setPendingFiles(...mapPendingFiles); */

        pendingFiles.forEach((file, index) => {
            let f = { ...file };
            f.status = 'uploading';
            f.abort = uploadFile(
                f.file,
                (p) => {
                    file.progress = p;
                },
                (resp) => {
                    file.status = 'uploaded';
                    file.resp = resp;
                }
            );
        });
    };

    console.log('pendingFiles :>> ', pendingFiles);

    const handleFileChange = (e) => {
        addFiles(...e.target.files);
    };

    return (
        <div className={styles.container}>
            <DragArea exts={exts} fileSize={maxSize} addFiles={addFiles}></DragArea>
            <div className={styles.operation}>
                <Button type="primary">
                    选择文件
                    <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        onClick={(e) => {
                            e.target.value = '';
                        }}
                    />
                </Button>
                <Button type="primary">
                    选择文件夹
                    <input
                        type="file"
                        webkitdirectory="true"
                        onChange={handleFileChange}
                        onClick={(e) => {
                            e.target.value = '';
                        }}
                    />
                </Button>
            </div>
            <FileTable files={files} deleteFiles={deleteFiles} />
            <div className={styles.operation}>
                <Button disabled={pendingFiles.length === 0} type="primary" onClick={uploadFn}>
                    开始上传
                </Button>
            </div>
        </div>
    );
};

export default Upload;
