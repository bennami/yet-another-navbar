import React,{useState,useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
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

  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
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
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

    <CSSTransition
      in={activeMenu === 'main'}
      timeout={500}
      classNames="menu-primary"
      unmountOnExit
      onEnter={calcHeight}>
      <div className="menu">
        <DropDownItem>My Profile</DropDownItem>
        <DropDownItem
          leftIcon={<CogIcon />}
          rightIcon={<ChevronIcon />}
          goToMenu="settings">
          Settings
        </DropDownItem>
        <DropDownItem
          leftIcon="🦧"
          rightIcon={<ChevronIcon />}
          goToMenu="animals">
          Animals
        </DropDownItem>

      </div>
    </CSSTransition>

    <CSSTransition
      in={activeMenu === 'settings'}
      timeout={500}
      classNames="menu-secondary"
      unmountOnExit
      onEnter={calcHeight}>
      <div className="menu">
        <DropDownItem goToMenu="main" leftIcon={<ArrowIcon />}>
          <h2>My Tutorial</h2>
        </DropDownItem>
        <DropDownItem leftIcon={<BoltIcon />}>HTML</DropDownItem>
        <DropDownItem leftIcon={<BoltIcon />}>CSS</DropDownItem>
        <DropDownItem leftIcon={<BoltIcon />}>JavaScript</DropDownItem>
        <DropDownItem leftIcon={<BoltIcon />}>Awesome!</DropDownItem>
      </div>
    </CSSTransition>

    <CSSTransition
      in={activeMenu === 'animals'}
      timeout={500}
      classNames="menu-secondary"
      unmountOnExit
      onEnter={calcHeight}>
      <div className="menu">
        <DropDownItem goToMenu="main" leftIcon={<ArrowIcon />}>
          <h2>Animals</h2>
        </DropDownItem>
        <DropDownItem leftIcon="🦘">Kangaroo</DropDownItem>
        <DropDownItem leftIcon="🐸">Frog</DropDownItem>
        <DropDownItem leftIcon="🦋">Horse?</DropDownItem>
        <DropDownItem leftIcon="🦔">Hedgehog</DropDownItem>
      </div>
    </CSSTransition>
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
