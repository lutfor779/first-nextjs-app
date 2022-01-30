import { Breadcrumb } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Url() {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const arr = [];
            linkPath.map((path, index) => {
                if (path === '' || path === 'app') {
                    arr.push({ breadcrumb: 'Home', href: '/' });
                } else {
                    arr.push({
                        breadcrumb: path,
                        href: `/${linkPath.slice(0, index + 1).join('/')}`,
                    });
                }
            });
            setBreadcrumbs(arr);
        }
    }, [router]);

    return (
        <Breadcrumb
            style={{
                margin: '16px 0',
            }}
        >
            {breadcrumbs.map((breadcrumb) => (
                <Breadcrumb.Item key={breadcrumb.breadcrumb}>
                    {breadcrumb.breadcrumb}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
}

export default Url;
