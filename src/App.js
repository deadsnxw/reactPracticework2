import './App.css';
import React, { useState, useRef, useMemo, useCallback } from 'react';
import useUsers from './useUsers';

function App() {
    const { users, loading } = useUsers();
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);

    const filterUsers = useCallback(() => {
        return users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [users, search]);

    const filteredUsers = useMemo(() => filterUsers(), [filterUsers]);

    return (
        <div className="App">
            <input
                ref={inputRef}
                type="text"
                placeholder="Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
            />

            <h2>Users</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {filteredUsers.map((user, index) => (
                        <li key={index}>
                            <span>{user.name}</span>
                            <span>{user.age}</span>
                            <span>{user.email}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
