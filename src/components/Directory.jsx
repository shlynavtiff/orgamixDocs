import React from 'react'

const Directory = ({ location }) => {
    return (
        <div className='flex items-center text-sm'>Documentation
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-3.5 w-3.5"><path
            d="m9 18 6-6-6-6"></path></svg> {location}
        </div>
    )
}

export default Directory