import './Sidebar.css'

function Sidebar({ isOpen, isClosing, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={`sidebar_overlay ${isClosing ? 'closing' : ''}`} onClick={onClose}>
            <div className={`sidebar ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="sidebar_header">
                    <h2>메뉴</h2>
                    <button className="close_button" onClick={onClose}>
                        ×
                    </button>
                </div>
                <nav className="sidebar_nav">
                    <ul>
                        <li><a href="#/home">홈</a></li>
                        <li><a href="#/about">정보과학대학 소개</a></li>
                        <li><a href="#/faculty">교수진소개</a></li>
                        <li><a href="#/software">소프트웨어학부</a></li>
                        <li><a href="#/dataScience">데이터사이언스학부</a></li>
                        <li><a href="#/AI">인공지능융합학부</a></li>
                        <li><a href="#/graduateSchool">대학원</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;