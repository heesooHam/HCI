/** 전공필수 Component*/
function EssentialBtn({ name: props }) {
    return (<button className='subjectE'>{props}</button>)
}

/** 콘텐츠 IT전공 Component*/
function ContentBtn({ name: props }) {
    return (<button className='subjectC'>{props}</button>)
}import './Majortrack.css'
import { useState } from 'react'

function Majortrack() {
    const [currentGrade, setCurrentGrade] = useState(0);
    const gradeNames = ['1학년', '2학년', '3학년', '4학년'];

    const goToGrade = (index) => {
        setCurrentGrade(index);
    };

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
            
           {/* 페이지 인디케이터 */}
            <div className="page_indicators">
                {gradeNames.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${currentGrade === index ? 'active' : ''}`}
                        onClick={() => goToGrade(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <div className='slider_container'>
                <div className='slider_wrapper'>
                    <div className='slider_track'>
                        <div className='slide'>
                            <div className='curtable'>
                                <div className={`grade grade_${currentGrade + 1}`}>
                                    {gradeNames[currentGrade]}
                                </div>
                                <SubjectList index={currentGrade} />
                            </div>
                        </div>
                    </div>
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
            { name: "인공지능", type: "major" },
            { name: "컴퓨터네트워크", type: "major" },
            { name: "멀티미디어개론", type: "majorC" },
            { name: "3D프린팅과모델링", type: "majorC" },
            { name: "가상현실기초및실습", type: "majorC" },
            { name: "증강현실기초및실습", type: "majorC" },
            { name: "컴퓨터그래픽스", type: "majorC" },
            { name: "게임프로그래밍", type: "majorC" }
        ],
        // 4학년
        [
            { name: "HCI", type: "majorC" },
            { name: "콘텐츠IT캡스톤디자인", type: "majorE" },
            { name: "GPU프로그래밍", type: "majorC" },
            { name: "게임인공지능", type: "majorC" },
            { name: "가상현실프로그래밍", type: "majorC" },
            { name: "증강현실프로그래밍", type: "majorC" },
            { name: "햅틱인터랙션", type: "majorC" }
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