import Mock from 'mockjs';
import educationManageData from './data/educationManage';

Mock.setup({
    timeout: '200-600',
});

Mock.mock('/api/users', () => {
    return educationManageData;
});
