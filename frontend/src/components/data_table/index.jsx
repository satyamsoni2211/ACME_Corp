import { Table } from 'antd';

export default function DataTable({ columns, dataSource }) {
    return <Table columns={columns} dataSource={dataSource} />
}