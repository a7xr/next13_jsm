"use client";

import {useState, useEffect} from 'react';

import PromptCard from './PromptCard';

import React from "react";

const Feed = () => {
    const [searchText, setSearchText] = useState('');
    const handleSearchChange = (e) => {
        
    }
    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input 
                    placeholder='Search for a tag or a username'
                    type="text" 
                    className="search_input peer" 
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                />
            </form>
        </section>
    )
};

export default Feed;
