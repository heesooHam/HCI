import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Content from './Content'


// 할일 :
// 강의명 수정
// ui 오류 고치기
// 홈페이지명 수정
// 필터링 기능 추가
// 동영상 재생

// 페이지 컴포넌트들
const Home = () => (
    <div className="iframe_container">
        <iframe 
            src="https://sw.hallym.ac.kr/index.php" 
            width="100%" 
            height="100%"
            title="Hallym University"
            frameBorder="0"
            className="fullscreen_iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </div>
)

const About = () => (
    <div className="page_container">
        <h1>정보과학대학 소개</h1>
        <div className="iframe_container">
            <iframe 
                src="https://sw.hallym.ac.kr/index.php?mp=1_1" 
                width="100%" 
                height="100%"
                title="정보과학대학 소개"
                frameBorder="0"
                className="fullscreen_iframe"
            />
        </div>
    </div>
)

const Faculty = () => (
    <div className="page_container">
        <h1>교수진 소개</h1>
        <div className="iframe_container">
            <iframe 
                src="https://www.hallym.ac.kr/hallym_univ/sub01/cP14/sCP15/tab1" 
                width="100%" 
                height="100%"
                title="교수진 소개"
                frameBorder="0"
                className="fullscreen_iframe"
            />
        </div>
    </div>
)

const DataScience = () => (
    <div className="page_container">
        <h1>빅데이터전공</h1>
        <div className="iframe_container">
            <iframe 
                src="https://sw.hallym.ac.kr/index.php?mp=2_2" 
                width="100%" 
                height="100%"
                title="데이터사이언스학부"
                frameBorder="0"
                className="fullscreen_iframe"
            />
        </div>
    </div>
)

const SmartIOT = () => (
    <div className="page_container">
        <h1>스마트IOT</h1>
        <div className="iframe_container">
            <iframe 
                src="https://ai.hallym.ac.kr" 
                width="100%" 
                height="100%"
                title="인공지능융합학부"
                frameBorder="0"
                className="fullscreen_iframe"
            />
        </div>
    </div>
)

const Graduate = () => (
    <div className="page_container">
        <h1>대학원</h1>
        <div className="iframe_container">
            <iframe 
                src="https://sw.hallym.ac.kr/index.php?mp=3_1_1" 
                width="100%" 
                height="100%"
                title="대학원"
                frameBorder="0"
                className="fullscreen_iframe"
            />
        </div>
    </div>
)

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/content" element={<Content />} />
            <Route path="/datascience" element={<DataScience />} />
            <Route path="/smart" element={<SmartIOT />} />
            <Route path="/graduate" element={<Graduate />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App