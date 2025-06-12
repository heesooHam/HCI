import './Foot.css'

function Foot() {
    return (
        <div className="foot_container">
            <div className="career_section">
                <h3 className="section_title">졸업 후 진로</h3>
                <div className="career_grid">
                    <div className="career_card game">
                        <div className="career_icon">🎮</div>
                        <h4>게임기업</h4>
                        <p>게임개발자, 게임기획자, 게임OA 전문가, UI/UX 개발자</p>
                        <div className="company_tags">
                            <span className="company_tag">넥슨</span>
                            <span className="company_tag">엔씨소프트</span>
                        </div>
                    </div>
                    
                    <div className="career_card movie">
                        <div className="career_icon">🎬</div>
                        <h4>영화분야</h4>
                        <p>영화 특수효과/애니메이션 제작사</p>
                        <div className="company_tags">
                            <span className="company_tag">FXGear</span>
                        </div>
                    </div>
                    
                    <div className="career_card government">
                        <div className="career_icon">🏛️</div>
                        <h4>정부기관</h4>
                        <p>공무원, 정부출연 연구기관</p>
                        <div className="company_tags">
                            <span className="company_tag">전자통신연구원</span>
                            <span className="company_tag">KIST</span>
                        </div>
                    </div>
                    
                    <div className="career_card education">
                        <div className="career_icon">📚</div>
                        <h4>교육기관</h4>
                        <p>VR/AR 기반 교육 SW 콘텐츠 개발자</p>
                    </div>
                    
                    <div className="career_card medical">
                        <div className="career_icon">🏥</div>
                        <h4>의료기관</h4>
                        <p>VR/AR 기반 의료재활치료 SW 개발자</p>
                    </div>
                    
                    <div className="career_card app">
                        <div className="career_icon">📱</div>
                        <h4>앱 개발</h4>
                        <p>스마트디바이스 앱 개발자</p>
                    </div>
                    
                    <div className="career_card etc">
                        <div className="career_icon">🚀</div>
                        <h4>기타</h4>
                        <p>국내외 대학원진학, 멀티미디어 콘텐츠 관련 창업</p>
                    </div>
                </div>
            </div>

            <div className="additional_info_section">
                <div className="info_card">
                    <h3 className="section_title">기타사항</h3>
                    <div className="research_labs">
                        <p className="info_description">
                            학부과정생들은 각자의 선호도에 따라 아래 연구실에 입실하여 도제식 교육을 통해 
                            실무역량 향상을 위한 멘토링 및 산학협력 프로젝트 참여가 가능합니다.
                        </p>
                        <div className="lab_tags">
                            <span className="lab_tag gve">GVE 연구실</span>
                            <span className="lab_tag img">IMG 연구실</span>
                            <span className="lab_tag unreal">Unreal Vision 연구실</span>
                        </div>
                        <div className="lab_descriptions">
                            <div className="lab_desc">
                                <strong>GVE (Graphics & Virtual Environment)</strong> - 그래픽스 및 가상환경 연구
                            </div>
                            <div className="lab_desc">
                                <strong>IMG (Interactive Media & Games)</strong> - 인터랙티브 미디어 및 게임 연구
                            </div>
                            <div className="lab_desc">
                                <strong>Unreal Vision</strong> - 언리얼 엔진 기반 비전 기술 연구
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact_section">
                <div className="contact_card">
                    <h3 className="section_title">전공 연락처</h3>
                    <div className="contact_info">
                        <div className="contact_item">
                            <div className="contact_icon">📧</div>
                            <div className="contact_details">
                                <span className="contact_label">이메일</span>
                                <a href="mailto:de2330@hallym.ac.kr" className="contact_value">de2330@hallym.ac.kr</a>
                            </div>
                        </div>
                        <div className="contact_item">
                            <div className="contact_icon">📞</div>
                            <div className="contact_details">
                                <span className="contact_label">전화번호</span>
                                <a href="tel:033-248-2330" className="contact_value">033-248-2330</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foot;