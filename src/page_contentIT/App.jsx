import './App.css'
import Header from './Header'
import Content from './Content'
import Majortrack from './Majortrack'

function ExternalSite({url}){
  return(
    <iframe src = {url}
    width = "100%"
    height = "600px"
    title = "ExternalSite"/>
  )
}
// 할 일 :
// 전공 트랙 밑에 졸업 후 진로, 기타사항 완성시키기
// 라우터 구현
// 전공 트랙 전체화면으로 구성 -> 필터링
// 이미지 깨지는 거 복원
// 사이드바 완성시키기

function App() {
  return (
    <>
      <Header/>
      <Content/>
      <Majortrack />
    </>
  )
}

export default App
