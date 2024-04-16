import { Button } from '@nextui-org/react'
import React from 'react'

function Search() {
  return (
    <>
        <div>
            <input type="text" placeholder='Search an Item' className='SearchInput' />
            <Button className='bg-search'>Search</Button>
        </div >
    </>
  )
}

export default Search