/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from 'antd';
import Text from 'antd/lib/typography/Text';
import { useEffect, useState } from 'react';
import AppLayout from '../../../components/Layouts/AppLayout';

function Users({ data }) {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        const arr = [];
        data.map((user) => {
            const obj = { ...user, key: user.id };
            arr.push(obj);
        });
        setUsers(arr);
    }, []);

    const columns = [
        {
            title: 'User Name',
            dataIndex: 'username',
            key: '1',
            defaultSortOrder: 'ascend',
            sorter: (a, b) =>
                a.username.charCodeAt(0) - b.username.charCodeAt(0),
        },
        {
            title: 'Full Name',
            width: 250,
            dataIndex: 'name',
            key: '2',
        },
        {
            title: 'Email',
            width: 200,
            dataIndex: 'email',
            key: '3',
        },
        {
            title: 'Contact Number',
            dataIndex: 'phone',
            key: '4',
            width: 350,
        },
        {
            title: 'Company Name',
            dataIndex: 'company',
            key: '5',
            width: 300,
            render: (company) => (
                <div>
                    <Text>{company.name}</Text>
                </div>
            ),
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: '6',
            width: 200,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: '7',
            width: 500,
            render: (address) => (
                <div>
                    <Text>
                        {address.street}, {address.suite}, {address.city}
                    </Text>
                </div>
            ),
        },
    ];

    return (
        <AppLayout title="Users">
            <section>
                <Table
                    columns={columns}
                    dataSource={users}
                    scroll={{ x: 1500 }}
                />
            </section>
        </AppLayout>
    );
}

Users.getInitialProps = async () => {
    const res = await await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    return {
        data,
    };
};

export default Users;
