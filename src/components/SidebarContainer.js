import React from 'react'
const SidebarContainer = ({Icon, title,color}) => {
    return (
        <div className='sidebar_container'>
            {<Icon color={color} />}
            <span>{title}</span>
        </div>
    )
}

export default SidebarContainer
