import { notFound } from 'next/navigation';
import React from 'react'

export default async function BlogIdPage({params}) {
    const {blogId} = await params;
    console.log('Blog ID:', typeof blogId);
    if(blogId !== '1') {
        notFound();
    }
    
    return <div>Blog Page {blogId}</div>
}