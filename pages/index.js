import { Button } from 'antd';
import AppLayout from '../components/Layouts/AppLayout';

export default function Home() {
    return (
        <AppLayout title="Home">
            <h1>Home</h1>
            <Button type="primary" block danger>
                Primary
            </Button>
        </AppLayout>
    );
}
