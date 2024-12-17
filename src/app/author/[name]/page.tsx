import AuthorPosts from '@/components/AuthorPosts'
import React from 'react'

async function page({params}) {

    const {name} = await params;

  return (
    <div>
      <AuthorPosts name={name}/>
    </div>
  )
}

export default page
