import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Content from './Content'

// 페이지 컴포넌트들
const Home = () => (
    <div className="iframe_container">
        <iframe 
            src="https://www.hallym.ac.kr" 
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
                src="https://www.hallym.ac.kr/college/info" 
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
                src="https://www.hallym.ac.kr/college/info/faculty" 
                width="100%" 
                height="100%"
                title="교수진 소개"
                frameBorder="0"
                className="fullscreen_iframe"
            />
        </div>
    </div>
)

const Software = () => (
    <div className="page_container">
        <h1>소프트웨어학부</h1>
        <div className="iframe_container">
            <iframe 
                src="https://cs.hallym.ac.kr" 
                width="100%" 
                height="100%"
                title="소프트웨어학부"
                frameBorder="0"
                className="fullscreen_iframe"
            />
        </div>
    </div>
)

const DataScience = () => (
    <div className="page_container">
        <h1>데이터사이언스학부</h1>
        <div className="iframe_container">
            <iframe 
                src="https://bigdata.hallym.ac.kr" 
                width="100%" 
                height="100%"
                title="데이터사이언스학부"
                frameBorder="0"
                className="fullscreen_iframe"
            />
        </div>
    </div>
)

const AI = () => (
    <div className="page_container">
        <h1>인공지능융합학부</h1>
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
                src="https://www.hallym.ac.kr/graduate" 
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
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/software" element={<Content />} />
            <Route path="/datascience" element={<DataScience />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/graduate" element={<Graduate />} />
            <Route path="/content" element={<Content />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App