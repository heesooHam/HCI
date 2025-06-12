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
                        <p>교과목 설명을 여기에 입력하세요.</p>
                        
                        <h4>학습 목표</h4>
                        <ul>
                            <li>학습 목표 1을 여기에 입력하세요.</li>
                            <li>학습 목표 2를 여기에 입력하세요.</li>
                            <li>학습 목표 3을 여기에 입력하세요.</li>
                        </ul>
                        
                        <h4>선수과목</h4>
                        <p>선수과목을 여기에 입력하세요.</p>
                        
                        <h4>주요 내용</h4>
                        <ul>
                            <li>주요 내용 1을 여기에 입력하세요.</li>
                            <li>주요 내용 2를 여기에 입력하세요.</li>
                            <li>주요 내용 3을 여기에 입력하세요.</li>
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