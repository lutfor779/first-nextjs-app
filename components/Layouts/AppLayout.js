import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Head from 'next/head';
import { useState } from 'react';
import Url from '../Shared/BreadCrumb/index.js';
import Heading from '../Shared/Heading/Heading';

function AppLayout({ children, title }) {
    const { Content, Sider } = Layout;
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Head>
                <title>{title || 'Home'}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section>
                <Layout>
                    <Sider
                        collapsible
                        collapsed={collapsed}
                        onCollapse={() => setCollapsed(!collapsed)}
                        breakpoint="lg"
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'sticky',
                            top: 0,
                            left: 0,
                        }}
                    >
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            defaultSelectedKeys={['1']}
                            mode="inline"
                        >
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                Option 1
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                Option 2
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                icon={<UserOutlined />}
                                title="User"
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                icon={<TeamOutlined />}
                                title="Team"
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9" icon={<FileOutlined />}>
                                Files
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    <Layout>
                        <Heading />
                        <Url />
                        <Content
                            style={{
                                margin: '0 1rem 24px',
                                overflow: 'initial',
                            }}
                        >
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </section>
        </>
    );
}

export default AppLayout;
