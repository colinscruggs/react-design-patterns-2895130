import React, { useState, useEffect } from 'react';

export const UserLoader = ({ children, id }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        // this syntax, ( async () => { ... })(), is a way to use async/await within useEffect as an anonymous function
        (async () => {
            await fetch(`/users/${id}`)
                .then(res => res.json())
                .then(data => setUser(data))
                .catch(err => console.error(err));
        })();
    }, [id]);

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user });
                }
            })}
        </>
    );
}