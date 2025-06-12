import './SubjectShorts.css';
import { useState } from 'react';

function SubjectShorts() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // 유튜브 URL을 embed 형식으로 변환하는 함수
    const getEmbedUrl = (youtubeUrl) => {
        // "https://youtu.be/MLZHdfJXSL4?si=6CpMsevL47jMjUmt" 형식에서 비디오 ID 추출
        const videoId = youtubeUrl.split('/').pop().split('?')[0];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`;
    };

    const handleShortsClick = () => {
        if (!isPlaying) {
            setIsLoading(true);
            // 로딩 시뮬레이션 (실제로는 iframe 로드 시간)
            setTimeout(() => {
                setIsLoading(false);
                setIsPlaying(true);
            }, 500);
        } else {
            setIsPlaying(false);
        }
    };

    const closeVideo = () => {
        setIsPlaying(false);
    };

    return (
        <>
            <button 
                className={`subject_shorts ${isLoading ? 'loading' : ''} ${isPlaying ? 'playing' : ''}`}
                onClick={handleShortsClick}
                disabled={isLoading}
            >
                교과목 Shorts
            </button>

            {/* 비디오 모달 */}
            {isPlaying && (
                <div className="video_overlay" onClick={closeVideo}>
                    <div className="video_container" onClick={(e) => e.stopPropagation()}>
                        <div className="video_header">
                            <h3 className="video_title">교과목 Shorts</h3>
                            <button className="video_close" onClick={closeVideo}>
                                ×
                            </button>
                        </div>
                        
                        <div className="video_content">
                            <iframe
                                width="100%"
                                height="100%"
                                src={getEmbedUrl("https://youtu.be/MLZHdfJXSL4?si=6CpMsevL47jMjUmt")}
                                title="교과목 Shorts"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        
                        <div className="video_footer">
                            <div className="video_info">
                                <span className="video_description">📚 콘텐츠IT 전공 소개 영상</span>
                            </div>
                            <div className="video_controls">
                                <button 
                                    className="video_btn fullscreen_btn"
                                    onClick={() => {
                                        const iframe = document.querySelector('.video_content iframe');
                                        if (iframe.requestFullscreen) {
                                            iframe.requestFullscreen();
                                        }
                                    }}
                                >
                                    ⛶ 전체화면
                                </button>
                                <button className="video_btn close_btn" onClick={closeVideo}>
                                    닫기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SubjectShorts;