import React,{useState} from 'react'
import Projects from './Projects'
import SidebarAddProject from './SidebarAddProject'
import SidebarContainer from './SidebarContainer'
import {BiChevronUp , BiChevronDown} from 'react-icons/bi'
import {MdToday} from 'react-icons/md'
import {BsCalendar3} from 'react-icons/bs'
import {FaClipboardList} from 'react-icons/fa'
import { useSelectedProjectValue } from '../context'
const Sidebar = () => {
    const [showProject ,setShowProject] = useState(true)
    const { setSelectedProject } = useSelectedProjectValue()
    return (
        <div className='sidebar'>
           <button className='btn-set' onClick={() => {
              setSelectedProject('INBOX');
            }}>
           <SidebarContainer Icon={MdToday} title='Inbox' color='#5297ff'  role="button"
            />
           </button>
           <button className='btn-set' onClick={() => {
               setSelectedProject('TODAY')
               console.log('today clicked')
           }}><SidebarContainer Icon={BsCalendar3} title='Today' color='#25b84c'/></button>
           <button className='btn-set'  onClick={() => setSelectedProject('NEXT_7')} >
           <SidebarContainer Icon={FaClipboardList} title='Next 7 days' color='#a970ff'/>
           </button>
           <br />
           <hr />
           <h2 className='sidebar_heading' onClick={() => setShowProject(!showProject)} role='button'>{showProject ? <BiChevronUp className='arrow' />: <BiChevronDown className='arrow' /> }<span>Projects</span></h2>
           {showProject && <Projects />}
           {showProject && <SidebarAddProject />}
        </div>
    )
}

export default Sidebar
