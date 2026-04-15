import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <nav className="sitemap">
            <a href="#intro">Intro</a>
            <a href="#profile">Profile</a>
            <a href="#project">Project</a>
            <a href="#hobby">Hobby</a>
          </nav>
          
          <button className="btn btn-primary" onClick={() => alert('이 버튼은 현재 시각적인 목적으로 배치되었습니다.')}>
            Resume Download (PDF)
          </button>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 홍길동. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
