"use client";

import { useState, useEffect} from 'react';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';

import Profile from '@components/Profile';

import React from 'react'

const MyProfile = () => {
  const handleEdit = () => {}
  const handleDelete = () => {}

  return (
    <Profile 
      name="My"
      desc="Welcome to your personalized profile page"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete} 
    />
  )
}

export default MyProfile