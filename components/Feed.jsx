"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";
const PromptCardlList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

import React from "react";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {};
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          placeholder="Search for a tag or a username"
          type="text"
          className="search_input peer"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>

      <PromptCardlList data={posts} handleTagClick={() => {}}></PromptCardlList>
    </section>
  );
};

export default Feed;
