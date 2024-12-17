"use client"

import { data } from '@/data'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


type filterdData = {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number;
    author: {
        id: number;
        name: string;
        email: string;
        profilePicture: string;
    };
}[]

function AuthorPosts({ name }: { name: string }) {

    const [filterdData, setFilteredData] = useState<filterdData>([])
    useEffect(() => {
        let author: string;

        if (name == 'john-doe') {
            author = "John Doe"
        } else {
            author = "Jane Smith"
        }


        data.forEach(element => {
            element.author.name === author ? setFilteredData(...filterdData,element) :  null
        });
    }, [name])
    

    return (
        <main className="mt-8 flex flex-wrap gap-3">
            {data.map(data => (
                <div className="w-[400px] bg-slate-200 rounded-md p-4" key={data.id}>
                    <h1>Title: {filterdData.title}</h1>
                    <p className=""> Description: A short description of the post asdfasdfasdfasdfasdf</p>
                    <p> Tags:{`${filterdData.tags} ,`}</p>
                    <Link href={`/author/${name}`} className="font-bold"> Name: {data.author.name} </Link>
                </div>
            ))}
        </main>
    )
}

export default AuthorPosts
