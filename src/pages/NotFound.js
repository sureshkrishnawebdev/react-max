import React from 'react';

import notFound from '../assets/404.PNG';

const NotFound = () => {
    return <img src={notFound} alt="Page Not Found" style={{width:'100vw', height: '90vh' }} />
}

export default NotFound;