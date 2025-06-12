import './Majortrack.css'
import { useState } from 'react'
import SubjectModal from './SubjectMordal';

function Majortrack() {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (subject) => {
        setSelectedSubject(subject);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSubject(null);
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

            <div className='all_grades_container'>
                {/* 1학년 */}
                <div className='curtable'>
                    <div className="grade grade_1">1학년</div>
                    <SubjectList index={0} onSubjectClick={openModal} />
                </div>
                
                {/* 2학년 */}
                <div className='curtable'>
                    <div className="grade grade_2">2학년</div>
                    <SubjectList index={1} onSubjectClick={openModal} />
                </div>
                
                {/* 3학년 */}
                <div className='curtable'>
                    <div className="grade grade_3">3학년</div>
                    <SubjectList index={2} onSubjectClick={openModal} />
                </div>
                
                {/* 4학년 */}
                <div className='curtable'>
                    <div className="grade grade_4">4학년</div>
                    <SubjectList index={3} onSubjectClick={openModal} />
                </div>
            </div>

            {/* 모달 */}
            {isModalOpen && (
                <SubjectModal 
                    subject={selectedSubject} 
                    onClose={closeModal} 
                />
            )}
        </div>
    )
}

/** 교과목 리스트 불러오기 */
function SubjectList({ index, onSubjectClick }) {
    const subjects = [
        // 1학년
        [
            { name: "이산구조론", type: "major", credits: 3, grade: "1학년" },
            { name: "자바프로그래밍1", type: "major", credits: 3, grade: "1학년" },
            { name: "자바프로그래밍2", type: "major", credits: 3, grade: "1학년" },
            { name: "선형대수", type: "major", credits: 3, grade: "1학년" }
        ],
        // 2학년
        [
            { name: "논리설계및실험", type: "major", credits: 3, grade: "2학년" },
            { name: "컴퓨터구조", type: "major", credits: 3, grade: "2학년" },
            { name: "자료구조", type: "major", credits: 3, grade: "2학년" },
            { name: "알고리즘", type: "major", credits: 3, grade: "2학년" },
            { name: "C프로그래밍", type: "major", credits: 3, grade: "2학년" },
            { name: "C++프로그래밍", type: "major", credits: 3, grade: "2학년" },
            { name: "데이터베이스", type: "major", credits: 3, grade: "2학년" },
            { name: "파이썬과학프로그래밍기초", type: "major", credits: 3, grade: "2학년" },
            { name: "계산이론", type: "major", credits: 3, grade: "2학년" },
            { name: "데이터통신", type: "major", credits: 3, grade: "2학년" },
            { name: "VR/AR게임제작기초", type: "majorC", credits: 3, grade: "2학년" }
        ],
        // 3학년
        [
            { name: "운영체제", type: "major", credits: 3, grade: "3학년" },
            { name: "소프트웨어공학", type: "major", credits: 3, grade: "3학년" },
            { name: "오디세이세미나3", type: "majorE", credits: 1, grade: "3학년" },
            { name: "윈도우프로그래밍", type: "major", credits: 3, grade: "3학년" },
            { name: "모바일프로그래밍", type: "major", credits: 3, grade: "3학년" },
            { name: "정보보호론", type: "major", credits: 3, grade: "3학년" },
            { name: "웹프로그래밍", type: "major", credits: 3, grade: "3학년" },
            { name: "컴퓨터네트워크", type: "major", credits: 3, grade: "3학년" },
            { name: "머신러닝응용", type: "major", credits: 3, grade: "3학년" },
            { name: "멀티미디어개론", type: "majorC", credits: 3, grade: "3학년" },
            { name: "영상처리와딥러닝", type: "majorC", credits: 3, grade: "3학년" },
            { name: "가상현실과증강현실", type: "majorC", credits: 3, grade: "3학년" },
            { name: "컴퓨터그래픽스", type: "majorC", credits: 3, grade: "3학년" },
            { name: "게임프로그래밍", type: "majorC", credits: 3, grade: "3학년" }
        ],
        // 4학년
        [
            { name: "HCI", type: "majorC", credits: 3, grade: "4학년" },
            { name: "소프트웨어캡스톤디자인", type: "majorE", credits: 3, grade: "4학년" }
        ]
    ];

    return (
        <div className='subjectlist'>
            {subjects[index].map((item, itemIndex) => 
                renderItem(item, itemIndex, onSubjectClick)
            )}
        </div>
    )
}

/** SW전공 공통 Component*/
function SubjectBtn({ name: props, subject, onClick }) {
    return (
        <button 
            className="subject" 
            onClick={() => onClick(subject)}
        >
            {props}
        </button>
    )
}

/** 전공필수 Component*/
function EssentialBtn({ name: props, subject, onClick }) {
    return (
        <button 
            className='subjectE' 
            onClick={() => onClick(subject)}
        >
            {props}
        </button>
    )
}

/** 콘텐츠 IT전공 Component*/
function ContentBtn({ name: props, subject, onClick }) {
    return (
        <button 
            className='subjectC' 
            onClick={() => onClick(subject)}
        >
            {props}
        </button>
    )
}

/** 교과목 리스트를 불러와 컴포넌트로 변환하는 함수  */
function renderItem(item, index, onSubjectClick) {
    switch (item.type) {
        case "major": // SW전공 공통
            return (
                <SubjectBtn 
                    key={index} 
                    name={item.name} 
                    subject={item}
                    onClick={onSubjectClick}
                />
            )
        case "majorC": // 콘텐츠IT전공
            return (
                <ContentBtn 
                    key={index} 
                    name={item.name} 
                    subject={item}
                    onClick={onSubjectClick}
                />
            )
        case "majorE": // 전공필수
            return (
                <EssentialBtn 
                    key={index} 
                    name={item.name} 
                    subject={item}
                    onClick={onSubjectClick}
                />
            )
        default:
            return null;
    }
}



export default Majortrack;