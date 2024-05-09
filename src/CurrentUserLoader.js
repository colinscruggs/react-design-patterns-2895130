import React, { useState, useEffect } from 'react';

export const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        // this syntax, ( async () => { ... })(), is a way to use async/await within useEffect as an anonymous function
        (async () => {
            await fetch('/current-user')
                .then(res => res.json())
                .then(data => setUser(data));
        })();
    }, []);

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