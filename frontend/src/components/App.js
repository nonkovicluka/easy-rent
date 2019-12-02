import React from 'react';
import PagesNavbar from './ui/PagesNavbar';
import Footer from './ui/Footer';

function App({children}) {

   

    return (
        <div>
            <PagesNavbar />
            {children}
            <Footer />
        </div>
    )
}

export default App;
