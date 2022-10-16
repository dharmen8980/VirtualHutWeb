// next js layout component
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';


export default function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}


export const defaultLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;