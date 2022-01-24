import React from 'react';

export const Navbar = ({ title }) => {
    return <header className="text-gray-600 border-b body-font">
        <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="ml-3 text-xl">{ title }</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 cursor-pointer hover:text-gray-900">Home</a>
                <a className="mr-5 cursor-pointer hover:text-gray-900">About</a>
            </nav>
        </div>
    </header>;
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
