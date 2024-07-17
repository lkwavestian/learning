// 生成column函数 xxx模块
import { ColumnProps } from 'antd/lib/table';
import React, { Fragment } from 'react';

export interface IEducationManage {
  operationLog: () => (updata?: any) => ColumnProps<any>[];
}

const operationLog = () => (): ColumnProps<any>[] => [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '英文名',
        dataIndex: 'ename',
        key: 'ename',
    },
    {
        title: '工号',
        dataIndex: 'workNo',
        key: 'workNo',
    },
    {
        title: '手机号码',
        dataIndex: 'mobile',
        key: 'mobile',
    },
    {
        title: '人员类型',
        dataIndex: 'identityName',
        key: 'identityName',
    },
    {
        title: '直线主管',
        dataIndex: 'leaderName',
        key: 'leaderName',
    },
    {
        title: '组织角色',
        dataIndex: 'orgRoleShow',
        key: 'orgRoleShow',
    },
];

const educationManage: IEducationManage = {
  operationLog,
};

export default educationManage;
