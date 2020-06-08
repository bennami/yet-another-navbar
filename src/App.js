import React,{useState} from 'react';
import {ReactComponent as BellIcon}  from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import './App.css';

function App() {

  return (
    <Navbar>
      {/* <NavItem icon  =  {'\uD83D\uDE42'}/>
      <NavItem icon  =  {'\uD83D\uDE42'}/>
      <NavItem icon  =  {'\uD83D\uDE42'}/> */}
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />} >
        <DropDownMenu/>
        </NavItem>

    </Navbar>
  );
}

function DropDownMenu(){

  function DropDownItem(props){
    return(
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}
        </span>
        {props.children}
        <span className=" icon-right">
        {props.rightIcon}
        </span>
      </a>
    )
    
  }
  return(
    <div className='dropdown'>
      <DropDownItem>my profile</DropDownItem>
      <DropDownItem 
      leftIcon={<CogIcon/>}
      rightIcon={<ChevronIcon/>}>
        my profile
      </DropDownItem>
    </div>
  );
}
function  Navbar({children}){
  return(
    <nav className="navbar">
    <ul className="navbar-nav">
    {children}
    </ul>
  </nav>
  );
}

function  NavItem({icon,children}){
  const [open, setOpen] = useState(false);
  return(
    <li className="nav-item"> 
      <a href="#" className="icon-button" onClick={()=> setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
}

export default App;
