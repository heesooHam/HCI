import './Header.css'
import { useState } from 'react'
import Sidebar from './SideBar';

function Header(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleSidebar = () => {
        if (isSidebarOpen) {
            closeSidebar();
        } else {
            setIsSidebarOpen(true);
            setIsClosing(false);
        }
    };

    const closeSidebar = () => {
        setIsClosing(true);
        // 애니메이션이 끝난 후 사이드바 제거
        setTimeout(() => {
            setIsSidebarOpen(false);
            setIsClosing(false);
        }, 300); // 애니메이션 시간과 맞춤
    };

    return(
        <>
            <div className='main_Header'>
                <div className='left_group' onClick={toggleSidebar}>
                    <img src = "src/assets/menu_bar.png" className='menubar'></img>
                    <img src = "src/assets/hallym_symbols.png" alt = "Hallym" className='hallymSymbols'/>
                    <span className='header_college_name'>정보과학대학</span>
                </div>
                <button className='login_button'>로그인</button>
            </div>

            <Sidebar isOpen = {isSidebarOpen} isClosing={isClosing} onClose={closeSidebar}/>
        </>
    )
}

export default Header;