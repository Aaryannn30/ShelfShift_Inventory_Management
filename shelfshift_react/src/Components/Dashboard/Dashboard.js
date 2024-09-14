import React from 'react'
import DSidebar from './DSidebar'
import { BrowserRouter as Router } from 'react-router-dom'

const Dasbboard = () => {

    return (
        <>
            <div className="dark:bg-slate-900">
                <Router>
                    <DSidebar />                
                </Router>
            </div>
        </>
    )
}

export default Dasbboard;
