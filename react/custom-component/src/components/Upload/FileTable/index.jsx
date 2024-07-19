import React, { Fragment } from 'react';
import { Progress, Table, Tag } from 'antd';
import { extname, fileSize } from '../../../utils';

const FileTable = ({ files, deleteFiles }) => {
    const totalSize = fileSize(files.reduce((s, it) => (s += it.file.size), 0));
    const uploadedNumber = files.filter((f) => f.status === 'uploaded').length;

    const columns = [
        {
            title: '文件名',
            key: 'name',
            dataIndex: 'name',
            render: (_, record) => record.file.name,
        },
        {
            title: '类型',
            key: 'type',
            dataIndex: 'type',
            render: (_, record) => extname(record.file.name),
        },
        {
            title: '大小',
            key: 'size',
            dataIndex: 'size',
            render: (_, record) => fileSize(record.file.size),
        },
        {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
            render: (_, record) => {
                console.log('record :>> ', record);
                return record.status === 'pending' ? (
                    <Tag color="blue">待上传</Tag>
                ) : record.status === 'uploaded' ? (
                    <Tag color="green">已上传</Tag>
                ) : (
                    <Progress size="small" percent={record.progress} />
                );
            },
        },
        {
            title: '操作',
            key: 'operation',
            dataIndex: 'operation',
            render: (_, record) => (
                <i className="iconfont i-shanchu" onClick={() => deleteFiles(record)}></i>
            ),
        },
    ];
    return (
        <Fragment>
            <Table columns={columns} dataSource={files} />
            <div>
                <Tag>文件数量：{files.length}</Tag>
                <Tag color="green">{uploadedNumber}}</Tag>
                <Tag>总大小：{totalSize}</Tag>
            </div>
        </Fragment>
    );
};

export default FileTable;
