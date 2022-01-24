import React from 'react';

export const Navbar = () => {
    return <nav>
        <h1 className='text-center'>NavBar Here</h1>
    </nav>;
};

export const Alert = ({ alert }) => {
    return (
        <>
            {
                alert
                && <div className={ `bg-${ alert.type }-500 p-5 drop-shadow-lg` }>
                    <strong>{ alert.msg }</strong>
                </div>
            }
        </>
    );
};
