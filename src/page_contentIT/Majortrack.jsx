import './Majortrack.css'
import { useState } from 'react'
import SubjectModal from './SubjectMordal';

function Majortrack() {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // 필터 상태 관리
    const [filters, setFilters] = useState({
        grade: 'all',      // all, 1, 2, 3, 4
        semester: 'all',   // all, 1, 2
        type: 'all'        // all, major, majorC, majorE
    });

    const openModal = (subject) => {
        setSelectedSubject(subject);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSubject(null);
    };

    // 필터 변경 함수
    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    // 전체 리셋 함수
    const resetFilters = () => {
        setFilters({
            grade: 'all',
            semester: 'all',
            type: 'all'
        });
    };

    return (
        <div className="majortrack_container">
            <div className="majortrack_header">
                <h3 className="majortrack_title">콘텐츠IT 전공 트랙</h3>
                <div className="title_underline"></div>
            </div>

            {/* 필터링 섹션 */}
            <div className="filter_container">
                <div className="filter_section">
                    <h4 className="filter_title">학년</h4>
                    <div className="filter_buttons">
                        <button 
                            className={`filter_btn ${filters.grade === 'all' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('grade', 'all')}
                        >
                            전체
                        </button>
                        {[1, 2, 3, 4].map(grade => (
                            <button 
                                key={grade}
                                className={`filter_btn ${filters.grade === grade ? 'active' : ''}`}
                                onClick={() => handleFilterChange('grade', grade)}
                            >
                                {grade}학년
                            </button>
                        ))}
                    </div>
                </div>

                <div className="filter_section">
                    <h4 className="filter_title">학기</h4>
                    <div className="filter_buttons">
                        <button 
                            className={`filter_btn ${filters.semester === 'all' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('semester', 'all')}
                        >
                            전체
                        </button>
                        <button 
                            className={`filter_btn ${filters.semester === 1 ? 'active' : ''}`}
                            onClick={() => handleFilterChange('semester', 1)}
                        >
                            1학기
                        </button>
                        <button 
                            className={`filter_btn ${filters.semester === 2 ? 'active' : ''}`}
                            onClick={() => handleFilterChange('semester', 2)}
                        >
                            2학기
                        </button>
                    </div>
                </div>

                <div className="filter_section">
                    <h4 className="filter_title">전공 구분</h4>
                    <div className="filter_buttons">
                        <button 
                            className={`filter_btn ${filters.type === 'all' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('type', 'all')}
                        >
                            전체
                        </button>
                        <button 
                            className={`filter_btn type_major ${filters.type === 'major' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('type', 'major')}
                        >
                            SW전공 공통
                        </button>
                        <button 
                            className={`filter_btn type_majorC ${filters.type === 'majorC' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('type', 'majorC')}
                        >
                            콘텐츠IT전공
                        </button>
                        <button 
                            className={`filter_btn type_majorE ${filters.type === 'majorE' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('type', 'majorE')}
                        >
                            전공필수
                        </button>
                    </div>
                </div>

                <div className="filter_reset">
                    <button className="reset_btn" onClick={resetFilters}>
                        🔄 필터 초기화
                    </button>
                </div>
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
                    <SubjectList index={0} onSubjectClick={openModal} filters={filters} />
                </div>
                
                {/* 2학년 */}
                <div className='curtable'>
                    <div className="grade grade_2">2학년</div>
                    <SubjectList index={1} onSubjectClick={openModal} filters={filters} />
                </div>
                
                {/* 3학년 */}
                <div className='curtable'>
                    <div className="grade grade_3">3학년</div>
                    <SubjectList index={2} onSubjectClick={openModal} filters={filters} />
                </div>
                
                {/* 4학년 */}
                <div className='curtable'>
                    <div className="grade grade_4">4학년</div>
                    <SubjectList index={3} onSubjectClick={openModal} filters={filters} />
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
function SubjectList({ index, onSubjectClick, filters }) {
    const subjects = [
        // 1학년
        [
            { name: "이산구조론", type: "major", credits: 3, grade: "1학년", semester: 1 },
            { name: "자바프로그래밍1", type: "major", credits: 3, grade: "1학년", semester: 1 },
            { name: "자바프로그래밍2", type: "major", credits: 3, grade: "1학년", semester: 2 },
            { name: "선형대수", type: "major", credits: 3, grade: "1학년", semester: 2 }
        ],
        // 2학년
        [
            { name: "논리설계및실험", type: "major", credits: 3, grade: "2학년", semester: 1 },
            { name: "컴퓨터구조", type: "major", credits: 3, grade: "2학년", semester: 2 },
            { name: "자료구조", type: "major", credits: 3, grade: "2학년", semester: 1 },
            { name: "알고리즘", type: "major", credits: 3, grade: "2학년", semester: 2 },
            { name: "C프로그래밍", type: "major", credits: 3, grade: "2학년", semester: 1 },
            { name: "C++프로그래밍", type: "major", credits: 3, grade: "2학년", semester: 2 },
            { name: "데이터베이스", type: "major", credits: 3, grade: "2학년", semester: 2 },
            { name: "파이썬과학프로그래밍기초", type: "major", credits: 3, grade: "2학년", semester: 1 },
            { name: "계산이론", type: "major", credits: 3, grade: "2학년", semester: 2 },
            { name: "데이터통신", type: "major", credits: 3, grade: "2학년", semester: 2 },
            { name: "VR/AR게임제작기초", type: "majorC", credits: 3, grade: "2학년", semester: 2 }
        ],
        // 3학년
        [
            { name: "운영체제", type: "major", credits: 3, grade: "3학년", semester: 1 },
            { name: "소프트웨어공학", type: "major", credits: 3, grade: "3학년", semester: 1 },
            { name: "오디세이세미나3", type: "majorE", credits: 1, grade: "3학년", semester: 2 },
            { name: "윈도우프로그래밍", type: "major", credits: 3, grade: "3학년", semester: 1 },
            { name: "모바일프로그래밍", type: "major", credits: 3, grade: "3학년", semester: 2 },
            { name: "정보보호론", type: "major", credits: 3, grade: "3학년", semester: 1 },
            { name: "웹프로그래밍", type: "major", credits: 3, grade: "3학년", semester: 2 },
            { name: "컴퓨터네트워크", type: "major", credits: 3, grade: "3학년", semester: 1 },
            { name: "머신러닝응용", type: "major", credits: 3, grade: "3학년", semester: 1 },
            { name: "멀티미디어개론", type: "majorC", credits: 3, grade: "3학년", semester: 1 },
            { name: "3D프린팅과모델링", type: "majorC", credits: 3, grade: "3학년", semester: 2 },
            { name: "가상현실기초및실습", type: "majorC", credits: 3, grade: "3학년", semester: 1 },
            { name: "증강편실기초및실습", type: "majorC", credits: 3, grade: "3학년", semester: 2 },
            { name: "컴퓨터그래픽스", type: "majorC", credits: 3, grade: "3학년", semester: 1 },
            { name: "게임프로그래밍", type: "majorC", credits: 3, grade: "3학년", semester: 2 }
        ],
        // 4학년
        [
            { name: "HCI", type: "majorC", credits: 3, grade: "4학년", semester: 1 },
            { name: "콘텐츠IT캡스톤디자인", type: "majorE", credits: 3, grade: "4학년", semester: 2 }
        ]
    ];

    // 필터링 로직
    const filteredSubjects = subjects[index].filter(subject => {
        // 학년 필터
        if (filters.grade !== 'all' && parseInt(subject.grade[0]) !== filters.grade) {
            return false;
        }
        
        // 학기 필터
        if (filters.semester !== 'all' && subject.semester !== filters.semester) {
            return false;
        }
        
        // 전공 구분 필터
        if (filters.type !== 'all' && subject.type !== filters.type) {
            return false;
        }
        
        return true;
    });

    return (
        <div className='subjectlist'>
            {filteredSubjects.length > 0 ? (
                filteredSubjects.map((item, itemIndex) => 
                    renderItem(item, itemIndex, onSubjectClick)
                )
            ) : (
                <div className="no_subjects">
                    해당 조건의 교과목이 없습니다
                </div>
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