import { useState, useEffect } from 'react';
import usersData from './users.json';

function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setUsers(usersData);
            setLoading(false);
        }, 1500);
    }, []);

    return { users, loading };
}

export default useUsers;