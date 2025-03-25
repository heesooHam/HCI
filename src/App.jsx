import './App.css'

function App() {
  return (
    <div className='main'>
      <div className='curriculum'> 
        <div className='curtable'>
          <div className='grade'>1학년</div>
          <SubjectList index={0} />
        </div>
        <div className='curtable'>
          <div className='grade'>2학년</div>
          <SubjectList index={1} />
        </div>
        <div className='curtable'>
        <div className='grade'>3학년</div>
        <SubjectList index={2} />
        </div>
        <div className='curtable'>
        <div className='grade'>4학년</div>
        <SubjectList index={3} />
        </div>
      </div>
    </div>
  )
}

/** 교과목 리스트 불러오기 */
function SubjectList({ index }) {
  const subjects = [[ // 교과목 리스트를 2차원 배열로 받아옴
    // 1학년 : 인덱스 0
    // major : 공통 전공 , invisible : 빈칸, mojorC : 콘텐츠 IT전공,
    // mojorE : 필수 전공
    { name: "이산구조론", type: "major" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "자바 프로그래밍1", type: "major" },
    { name: "자바 프로그래밍2", type: "major" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "선형대수", type: "major" },
  ],
  [
    // 2학년 :인덱스 1
    { name: "논리설계및실험", type: "major" },
    { name: "컴퓨터구조", type: "major" },
    { name: "자료구조", type: "major" },
    { name: "알고리즘", type: "major" },
    { name: "C프로그래밍", type: "major" },
    { name: "C++프로그래밍", type: "major" },
    { name: "NONE", type: "invisible" },
    { name: "데이터베이스", type: "major" },
    { name: "파이썬과학프로그래밍기초", type: "major" },
    { name: "계산이론", type: "major" },
    { name: "NONE", type: "invisible" },
    { name: "데이터통신", type: "major" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "VR/AR게임제작기초", type: "majorC" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
    { name: "NONE", type: "invisible" },
  ],
  [ // 3학년 : 인덱스 2
    {name : "운영체제", type : "major"},
    {name : "NONE", type : "invisible"},
    {name : "소프트웨어공학", type : "major"},
    {name : "오디세이세미나3", type : "majorE"},
    {name : "윈도우프로그래밍", type : "major"},
    {name : "모바일프로그래밍", type : "major"},
    {name : "정보보호론", type : "major"},
    {name : "웹프로그래밍", type : "major"},
    {name : "인공지능", type : "major"},
    {name : "NONE", type : "invisible"},
    {name : "컴퓨터네트워크", type : "major"},
    {name : "NONE", type : "invisible"},
    {name : "멀티미디어개론", type : "majorC"},
    {name : "3D프린틴과모델링", type : "majorC"},
    {name : "가상현실기초및실습", type : "majorC"},
    {name : "증강현실길초및실습", type : "majorC"},
    {name : "컴퓨터그래픽스", type : "majorC"},
    {name : "게임프로그래밍", type : "majorC"},
  ],
  [
    // 4학년 인덱스 3
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "HCI", type : "majorC"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "NONE", type : "invisible"},
    {name : "콘텐츠IT캡스톤디자인", type : "majorE"},
  ]
  ];
  // 교과목을 저장한 배열을 Component로 변환
  return (
    <div className='subjectlist'>
      {subjects[index].map(renderItem)}
    </div>
  )
}

/** SW전공 공통 Component*/
function SubjectBtn({ name: props }) {
  return (
    <button className="subject" onClick={Clicked}>{props}</button>
  )
}

/** 안보이는 버튼: 빈칸 Component*/
function InvisibleBtn() {
  return (
    <button className='subjectI'></button>
  )
}

/** 전공필수 Component*/
function EssentialBtn({ name: props }) {
  return (<button className='subjectE' onClick={Clicked}>{props}</button>)
}

/** 콘텐츠 IT전공 Component*/
function ContentBtn({ name: props }) {
  return (<button className='subjectC' onClick={Clicked}>{props}</button>)
}

/** 교과목 리스트를 불러와 컴포넌트로 변환하는 함수  */
function renderItem(item) {
  switch (item.type) {
    case "major": // SW전공 공통
      return (<SubjectBtn name={item.name} />)
    case "invisible": // BLANK칸
      return (<InvisibleBtn />)
    case "majorC": // 컨텐츠IT전공
      return (<ContentBtn name={item.name} />)
    case "majorE": // 전공필수
      return (<EssentialBtn name={item.name} />)
    default:
      break;
  }
}

/** onclick 함수(미구현) */
function Clicked() {
  alert("hi");
}


export default App