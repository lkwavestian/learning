// types.ts

import { TableProps } from 'antd/lib/table';

export interface Columns {
    [propName: string]: any;
}

// 查询方法
interface queryActionType {
    (arg: any): Promise<any>;
}

// 生成表头方法
export interface ColumnFunc {
    (updateMethod?: queryActionType): Array<Columns>;
}

// 表格组件Props
export interface ArgTableProps {
    baseProps?: TableProps<any>; //Table组件自带树形
    owncolumns: ColumnFunc; // 函数，生成table组件需要的表头配置
    queryAction: queryActionType; //查询操作方法，返回一个 promise 查询方法
    params?: any; // 表格的查询参数
    defaultCurrent?: number; //表格默认页码
    noInit?: boolean; //初始化不直接使用查询操作
}

// 页码状态
export interface paginationInitialType {
    current: number;
    pageSize: number;
    total: number;
}

// 表格初始化状态
export interface initialStateType {
    loading: boolean;
    pagination: paginationInitialType;
    dataSource: Array<any>;
}

// 操作类型
export interface actionType {
    type: string;
    payload?: any;
}
