import React from 'react';

const Hobby = () => {
  const hobbies = [
    {
      id: 1,
      title: 'Museum',
      desc: '다양한 영감을 주는 박물관 관람',
      image: 'hobby_01.jpg'
    },
    {
      id: 2,
      title: 'Trip',
      desc: '팀워크와 모험심을 기르는 국내여행',
      image: 'hobby_02.jpg'
    },
    {
      id: 3,
      title: 'Escape',
      desc: '새로운 시각으로 문제를 해결하는 방탈출',
      image: 'hobby_03.jpg'
    }
  ];

  return (
    <div className="container">
      <div className="text-center mb-4">
        <h2>Hobby</h2>
        <p>일과 삶의 균형을 맞추며, 에너지를 얻는 시간들입니다.</p>
      </div>

      <div className="hobby-grid">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="hobby-card">
            {/* Placeholder Background */}
            <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--color-bg-alt)', position: 'absolute', top: 0, left: 0 }}></div>
            <div className="project-image-placeholder-text" style={{ zIndex: 1 }}>{hobby.image}</div>
            <img src={`${import.meta.env.BASE_URL}assets/images/${hobby.image}`} alt={hobby.title} style={{position:'absolute', top:0, left:0, zIndex:1, width:'100%', height:'100%', objectFit:'cover'}} />
            
            <div className="hobby-card-overlay" style={{ zIndex: 2 }}>
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-desc">{hobby.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobby;
