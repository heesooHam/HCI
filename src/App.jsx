import './App.css'

function App() {
  return (
    <div className='main'>
      <div className='outhor'>
        <div className='inner'>
          <div className='grade'>1학년</div>
          <SubjectList index={0} />
        </div>
        <div className='inner'>
          <div className='grade'>2학년</div>
          <SubjectList index={1} />
        </div>
        <div className='inner'>
        <div className='grade'>3학년</div>
        <SubjectList index={2} />
        </div>
        <div className='inner'>
        <div className='grade'>4학년</div>
        <SubjectList index={3} />
        </div>
      </div>
    </div>
  )
}

/** 교과목 리스트 불러오기 */
function SubjectList({ index }) {
  const subjects = [[ // 교과목 리스트
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
  [
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

  return (
    <div className='subjectlist'>
      {subjects[index].map(renderItem)}
    </div>
  )
}

/** SW전공 공통 */
function SubjectBox({ name: props }) {
  return (
    <button className="subject" onClick={Clicked}>{props}</button>
  )
}

/** 안보이는 버튼: 빈칸 */
function InvisibleBox() {
  return (
    <button className='subjectI'></button>
  )
}

/** 전공필수*/
function EssentialBox({ name: props }) {
  return (<button className='subjectE' onClick={Clicked}>{props}</button>)
}

/** 콘텐츠 IT전공 */
function ContentBox({ name: props }) {
  return (<button className='subjectC' onClick={Clicked}>{props}</button>)
}

/** 교과목 리스트를 불러와 컴포넌트로 변환하는 함수  */
function renderItem(item) {
  switch (item.type) {
    case "major": // SW전공 공통
      return (<SubjectBox name={item.name} />)
    case "invisible": // BLANK칸
      return (<InvisibleBox />)
    case "majorC": // 컨텐츠IT전공
      return (<ContentBox name={item.name} />)
    case "majorE": // 전공필수
      return (<EssentialBox name={item.name} />)
    default:
      break;
  }
}

/** onclick 함수(미구현) */
function Clicked() {
  alert("hi");
}


export default App