import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './Header'
import Content from './Content.jsx'

import Home from '../page_others/Home'

// 할 일 :
// 전공 트랙 밑에 졸업 후 진로, 기타사항 완성시키기
// 라우터 구현
// 전공 트랙 전체화면으로 구성 -> 필터링
// 사이드바 완성시키기

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path = "HCI/" element = {<Home url = "https://hcms.hallym.ac.kr/info-s/"/>} />
        <Route path = "HCI/Content" element={<Content />} />
      </Routes>
    </Router>
  )
}

export default App
