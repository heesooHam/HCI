import './SubjectMordal.css';
import SubjectShorts from './SubjectShorts';

/** 모달 컴포넌트 */
function SubjectModal({ subject, onClose }) {
    if (!subject) return null;

    const getTypeLabel = (type) => {
        switch (type) {
            case "major": return "SW전공 공통";
            case "majorC": return "콘텐츠IT전공";
            case "majorE": return "전공필수";
            default: return "";
        }
    };

    return (
        <div className="modal_overlay" onClick={onClose}>
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                <div className="modal_header">
                    <h3 className="modal_title">{subject.name}</h3>
                    <button className="modal_close" onClick={onClose}>×</button>
                </div>
                
                <div className="modal_body">
                    <div className="subject_info">
                        <span className={`subject_type ${subject.type}`}>
                            {getTypeLabel(subject.type)}
                        </span>
                        <span className="subject_credits">{subject.credits}학점</span>
                        <span className="subject_grade">{subject.grade}</span>
                        <SubjectShorts />
                    </div>
                    
                    <div className="subject_description">
                        {/* 교과목 설명 - 여기에 내용을 입력하세요 */}
                        <h4>교과목 개요</h4>
                        <p>소프트웨어 캡스톤디자인은 AI, Game&AR/VR, Web/App&시스템개발 등 다양한 분야의 주제를 기반으로 팀을 구성해 
                            프로젝트를 수행하는 실무 중심의 수업입니다. 학생들은 산업체 및 기관이 제안하는 실제 문제를 해결하거나 스스로 아이디어를 
                            도출해 팀 지도교수 및 산업체 전문가의 도움을 받아 시제품을 제작합니다. 
                            프로젝트 전반에 걸쳐 실습비가 지원되며, 최종 결과물은 경진대회 출전을 통해 외부성과로 이어질 수 있습니다.</p>
                        
                        <h4>학습 목표</h4>
                        <ul>
                            <li>문제 해결 중심의 팀 프로젝트를 통해 실무 능력과 소프트웨어 개발 역량을 강화한다.</li>
                            <li>산업체와의 협업 및 전문가 자문을 통해 실질적인 문제 해결 경험을 습득한다.</li>
                            <li>기획부터 결과 발표까지의 전 과정을 통해 기획력, 커뮤니케이션 능력, 발표 역량을 기른다.</li>
                        </ul>
                        
                        <h4>선수과목</h4>
                        <p>소프트웨어 프로그래밍 및 개발 관련 기초 과목 </p>
                        
                        <h4>주요 내용</h4>
                        <ul>
                            <li>팀 구성 및 주제 선정 후 프로젝트 신청서를 작성하고 지도교수 및 산업체 전문가와 함께 프로젝트를 진행한다.</li>
                            <li>중간보고서, 산업체 참여 신청서, 결과보고서, 시연 영상 등 다양한 산출물을 작성하고 제출한다.</li>
                            <li>최종 프로젝트는 경진대회에 참가하며, 수상팀은 외부 대회 참가 및 실적 연계 가능성을 가진다.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="modal_footer">
                    <button className="btn_syllabus">자세히 보기</button>
                    <button className="btn_professor">담당 교수</button>
                    <button className="btn_close" onClick={onClose}>닫기</button>
                </div>
            </div>
        </div>
    );
}

export default SubjectModal;