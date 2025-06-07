import './Content.css'
import './Majortrack'
import Majortrack from './Majortrack';

function Content(){
    return(
        <>
        <div className="content_container">
            <div className="content_header">
                <h1 className="main_title">콘텐츠IT 전공</h1>
                <div className="title_underline"></div>
            </div>

            <div className="content_section">
                <div className="section_card">
                    <h3 className="section_title">교육과정 소개</h3>
                    <p className="section_text">
                        첨단 IT분야 중 하나인 콘텐츠IT 분야에 특화된 전문 인력 양성을 목표로, 
                        실무 중심의 교육을 통하여 콘텐츠 관련 산업계에서 요구하는 전문적인 소프트웨어 개발 능력을 배양합니다. 
                        최근 콘텐츠IT 분야의 전문 인력 수요를 고려하여, 저희 전공에서는 가상현실/증강현실(VR/AR) 트랙과 게임 개발자 
                        트랙으로 구분하여 진로를 계획적으로 설정하고 학업을 체계적으로 이수할 수 있도록 도움을 주고 있습니다.
                    </p>
                </div>

                <div className="section_card">
                    <h3 className="section_title">교과과정</h3>
                    <p className="section_text">
                        콘텐츠IT 전공에서는 3차원 그래픽스 및 게임엔진 이론을 바탕으로 
                        가상현실/증강현실/게임 콘텐츠의 설계 및 구현에 필요한 원리 및 다양한 기술을 배웁니다. 
                        학생들은 심화전공 교과목들에서 3차원 가상공간을 이해하기 위한 그래픽스 기술, 
                        3차원 가상공간에 현실감을 부여하기 위한 물리엔진 기술, 가상현실과 증강현실의 동작원리를 
                        적용하는 혼합현실 기술, 그래픽스와 물리엔진 기술을 혼합한 게임프로그래밍 기술 및 PC와 모바일 플랫폼의 
                        성능 향상을 위한 GPU 프로그래밍 기술을 학습합니다.
                    </p>
                </div>

                <div className="section_card">
                    <h3 className="section_title">주요 교과목   </h3>
                    
                    <div className="track_item">
                        <h4 className="track_title">콘텐츠IT전공 핵심 기초</h4>
                        <p className="track_description">
                            "VR/AR/게임제작기초"에서 가상현실/증강현실 관련 SW와 게임 제작을 
                            위한 실무기초 교육을 받고, "컴퓨터그래픽스"에서 3차원 가상공간에 대한 기본 이론을 배웁니다.
                        </p>
                    </div>

                    <div className="track_item vr_track">
                        <h4 className="track_title">VR/AR 트랙</h4>
                        <p className="track_description">
                            "VR/AR이론"에서 가상현실/증강현실 구현을 위한 기초지식을 배우고, "가상현실프로그래밍", 
                            "증강현실프로그래밍"에서 제작 실무 능력을 키우게 됩니다. "햅틱인터랙션"에서는 가상현실/증강현실 내의 입출력장치들을 다루는 기술을 배우고, 
                            "HCI"에서는 사용자가 조작방법을 쉽게 익히고 효율적으로 작업을 수행할 수 있는 시스템 개발을 위한 인간공학적 원칙 및 지식을 습득하게 됩니다.
                        </p>
                    </div>

                    <div className="track_item game_track">
                        <h4 className="track_title">게임 개발자 트랙</h4>
                        <p className="track_description">
                            "게임프로그래밍"을 통해 여러 종류의 플랫폼을 기반으로 게임 제작 실무 능력을 키우고, 
                            "게임인공지능"에서는 경로탐색, NPC 제어와 같이 게임에 필요한 인공지능 기술을 배웁니다. 
                            "HCI"에서는 다양한 센서들을 이용한 게임제작을 실습하고, "GPU프로그래밍"에서는 고성능/고품질 3차원 게임 제작을 위한 GPU 기술들을 심도 있게 배웁니다.
                        </p>
                    </div>
                </div>

            </div>
        </div>
            <Majortrack />
        </>
    )
}

export default Content;