import Layout from "../../../components/Layouts/Layout";

const Users = ({ data }) => {
    return (
        <Layout title={'Users'}>
            <section>
                <div>
                    <ul>
                        {
                            data.map(user => (
                                <li key={user.id} className="my-5 border p-5 border-black rounded-lg bg-gray-50 hover:shadow-lg hover:bg-black hover:text-white">
                                    <h1>Name: {user.name}</h1>
                                    <p>Website: {user.website}</p>
                                    <p>Phone: {user.phone}</p>
                                    <address>Address: {user.address.street}, {user.address.suite}, {user.address.city}</address>
                                </li>))
                        }
                    </ul>
                </div>
            </section>
        </Layout>
    )
}

Users.getInitialProps = async () => {
    const res = await (await fetch("https://jsonplaceholder.typicode.com/users"));

    const data = await res.json();
    return {
        data
    }
}

export default Users;