/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import { useRouter } from 'next/router';
import React from 'react';

function Heading() {
    const router = useRouter();

    return (
        <Header className="header">
            <div style={{ marginRight: 32 }}>
                <Title
                    level={2}
                    style={{
                        float: 'left',
                        color: 'white',
                        paddingTop: 10,
                        marginRight: 49,
                    }}
                >
                    NextJs
                </Title>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={() => router.push('/')}>
                    Home
                </Menu.Item>
                <Menu.Item key="2" onClick={() => router.push('/app/users')}>
                    Users
                </Menu.Item>
                <Menu.Item key="3" onClick={() => router.push('/app/users')}>
                    Posts
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default Heading;
