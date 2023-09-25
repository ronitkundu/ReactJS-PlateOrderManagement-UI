import React, { useEffect, useState } from 'react';

import { SearchBar } from '../SearchBar/SearchBar.jsx';
import SearchBarResult from '../SearchBar/SearchBarResult.jsx';



function OrderDetails() {
    const [searchInputResponse, setSearchInputResponse] = useState([]);
    useEffect(() => {
    }, [searchInputResponse]);

    return (
        <>
            <SearchBar setSearchInputResponse={setSearchInputResponse} />
            <SearchBarResult result={searchInputResponse} />
        </>
    )
}

export default OrderDetails;