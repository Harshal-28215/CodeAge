"use client"

import { data } from '@/data'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Header from './Header'


function DataComponent() {
    const [filteredData, setFilteredData] = useState('')

    const change =(value:string)=> {
        setFilteredData(value)
    }

    useEffect(() => {
        if (filteredData) {
            console.log(filteredData);
            
        }
    }, [filteredData])
    
    
    return (
        <>
            <Header change = {change}/>
            <div className='flex flex-wrap gap-4 p-5'>
                {
                    data.map(data => (
                        <div className="w-[400px] bg-slate-200 rounded-md p-4" key={data.id}>
                            <h1>Title: {data.title}</h1>
                            <p> Description: {data.body}</p>
                            <p> Tags:{`${data.tags} ,`}</p>
                            <Link href={`/author/${data.author.name.split(' ').join('-').toLocaleLowerCase()}`} className="font-bold"> Name: {data.author.name} </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default DataComponent
