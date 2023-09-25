import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { getOrderDetails } from '../common/handleResponse';
import { orderDetailsUrl } from '../common/api';

import '../css/SearchBar.css'


export function SearchBar(props) {
    const [searchInput, setSearchInput] = useState("");


    const searchValue = async () => {
        const data = await getOrderDetails(orderDetailsUrl + searchInput, "abcd").then(response => {
            return response.json();
        })
        props.setSearchInputResponse(data)
    }
    return (
        <>
            <br />
            <div className='input-wrapper'>
                <label className='search-label'>Please Enter Order ID to Search :</label>
                <input className='search-input' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Type here...'></input>
                <Button className='search-button' onClick={searchValue}><FaSearch></FaSearch></Button>
            </div>
        </>
    )
}

