import './Majortrack.css'

function Majortrack() {
    return (
        <div className="majortrack_container">
            <div className="majortrack_header">
                <h3 className="majortrack_title">콘텐츠IT 전공 트랙</h3>
                <div className="title_underline"></div>
            </div>

            <div className="legend_container">
                <div className="legend_item">
                    <div className="legend_color common"></div>
                    <span>SW전공 공통</span>
                </div>
                <div className="legend_item">
                    <div className="legend_color content"></div>
                    <span>콘텐츠IT전공</span>
                </div>
                <div className="legend_item">
                    <div className="legend_color essential"></div>
                    <span>전공필수</span>
                </div>
            </div>

            <div className='all_grades_container'>
                {/* 1학년 */}
                <div className='curtable'>
                    <div className="grade grade_1">1학년</div>
                    <SubjectList index={0} />
                </div>
                
                {/* 2학년 */}
                <div className='curtable'>
                    <div className="grade grade_2">2학년</div>
                    <SubjectList index={1} />
                </div>
                
                {/* 3학년 */}
                <div className='curtable'>
                    <div className="grade grade_3">3학년</div>
                    <SubjectList index={2} />
                </div>
                
                {/* 4학년 */}
                <div className='curtable'>
                    <div className="grade grade_4">4학년</div>
                    <SubjectList index={3} />
                </div>
            </div>
        </div>
    )
}

/** 교과목 리스트 불러오기 */
function SubjectList({ index }) {
    const subjects = [
        // 1학년
        [
            { name: "이산구조론", type: "major" },
            { name: "자바프로그래밍1", type: "major" },
            { name: "자바프로그래밍2", type: "major" },
            { name: "선형대수", type: "major" }
        ],
        // 2학년
        [
            { name: "논리설계및실험", type: "major" },
            { name: "컴퓨터구조", type: "major" },
            { name: "자료구조", type: "major" },
            { name: "알고리즘", type: "major" },
            { name: "C프로그래밍", type: "major" },
            { name: "C++프로그래밍", type: "major" },
            { name: "데이터베이스", type: "major" },
            { name: "파이썬과학프로그래밍기초", type: "major" },
            { name: "계산이론", type: "major" },
            { name: "데이터통신", type: "major" },
            { name: "VR/AR게임제작기초", type: "majorC" }
        ],
        // 3학년
        [
            { name: "운영체제", type: "major" },
            { name: "소프트웨어공학", type: "major" },
            { name: "오디세이세미나3", type: "majorE" },
            { name: "윈도우프로그래밍", type: "major" },
            { name: "모바일프로그래밍", type: "major" },
            { name: "정보보호론", type: "major" },
            { name: "웹프로그래밍", type: "major" },
            { name: "컴퓨터네트워크", type: "major" },
            { name: "가상현실과증강현실", type: "majorC" },
            { name: "컴퓨터그래픽스", type: "majorC" }
        ],
        // 4학년
        [
            { name: "HCI", type: "majorC" },
            { name: "소프트웨어캡스톤디자인", type: "majorE" }
        ]
    ];
    // 교과목을 저장한 배열을 Component로 변환
    return (
        <div className='subjectlist'>
            {subjects[index].map((item, itemIndex) => renderItem(item, itemIndex))}
        </div>
    )
}

/** SW전공 공통 Component*/
function SubjectBtn({ name: props }) {
    return (
        <button className="subject">{props}</button>
    )
}

/** 전공필수 Component*/
function EssentialBtn({ name: props }) {
    return (<button className='subjectE'>{props}</button>)
}

/** 콘텐츠 IT전공 Component*/
function ContentBtn({ name: props }) {
    return (<button className='subjectC'>{props}</button>)
}

/** 교과목 리스트를 불러와 컴포넌트로 변환하는 함수  */
function renderItem(item, index) {
    switch (item.type) {
        case "major": // SW전공 공통
            return (<SubjectBtn key={index} name={item.name} />)
        case "majorC": // 콘텐츠IT전공
            return (<ContentBtn key={index} name={item.name} />)
        case "majorE": // 전공필수
            return (<EssentialBtn key={index} name={item.name} />)
        default:
            return null;
    }
}

export default Majortrack;