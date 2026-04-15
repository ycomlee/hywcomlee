import React from 'react';

const Profile = () => {
  return (
    <div className="container">
      <div className="text-center mb-4">
        <h2>Profile</h2>
        <p>작은 디테일에서 큰 변화를 만들어내는 꼼꼼함으로, 신뢰할 수 있는 업무 파트너가 되겠습니다.</p>
      </div>
      <div className="profile-grid">
        <div className="profile-card profile-personal">
          <h3 className="mb-2">Personal Info</h3>
          
          <div className="profile-avatar-container mb-4">
            <img src={`${import.meta.env.BASE_URL}assets/images/증명사진.jpg`} alt="증명사진" className="profile-avatar" />
          </div>

          <div className="mb-2">
            <strong>이름:</strong> 홍길동
          </div>
          <div className="mb-2">
            <strong>생년월일:</strong> 2020. 01. 01
          </div>
          <div className="mb-2">
            <strong>주소:</strong> 서울특별시 성동구 사근동
          </div>
          <div className="mb-2">
            <strong>연락처:</strong> 010-0000-0000
          </div>
          <div className="mb-2">
            <strong>email:</strong> gildong@gmail.com
          </div>
          <div>
            <strong>linkedin:</strong> <a href="https://linkedin.com/1234" target="_blank" rel="noreferrer" style={{color: 'var(--color-primary)', textDecoration: 'none'}}>linkedin.com/1234</a>
          </div>
        </div>
        
        <div className="profile-card">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="mb-2">Certificates</h3>
              <div>
                <span className="certificate-banner">GTQ 1급</span>
                <span className="certificate-banner">정보처리기사</span>
                <span className="certificate-banner">토익스피킹 IH</span>
              </div>
            </div>
            
            <div>
              <h3 className="mb-2">Experience</h3>
              <div>
                <span className="experience-banner">Vibe Coding</span>
                <span className="experience-banner">Generative AI</span>
                <span className="experience-banner">Prompt Engineering</span>
              </div>
            </div>

            <div className="mt-2">
              <h3 className="mb-3">Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Office</h4>
                  <div className="progress-group">
                    <div className="progress-label"><span>Excel</span><span>상</span></div>
                    <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ width: '100%' }}></div></div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-label"><span>PowerPoint</span><span>상</span></div>
                    <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ width: '100%' }}></div></div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-label"><span>Word</span><span>상</span></div>
                    <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ width: '100%' }}></div></div>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h4>Design</h4>
                  <div className="progress-group">
                    <div className="progress-label"><span>Illustrator</span><span>상</span></div>
                    <div className="progress-bar-bg"><div className="progress-bar-fill fill-design" style={{ width: '100%' }}></div></div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-label"><span>Photoshop</span><span>중</span></div>
                    <div className="progress-bar-bg"><div className="progress-bar-fill fill-design" style={{ width: '60%' }}></div></div>
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Language</h4>
                  <div className="progress-group">
                    <div className="progress-label"><span>English</span><span>상</span></div>
                    <div className="progress-bar-bg"><div className="progress-bar-fill fill-language" style={{ width: '100%' }}></div></div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-label"><span>Chinese</span><span>중</span></div>
                    <div className="progress-bar-bg"><div className="progress-bar-fill fill-language" style={{ width: '60%' }}></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
