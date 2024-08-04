import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

//Header.js
function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const scrollThreshold = 100; // 헤더가 숨겨지기 시작하는 스크롤 위치 (픽셀)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
      // 스크롤 내리기
      setIsVisible(false);
    } else if (scrollTop < lastScrollTop) {
      // 스크롤 올리기
      setIsVisible(true);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Negative scroll 값 처리
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

    return (
      <motion.header className="header" initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      style={{
        zIndex: 1000,
      }}>
        <h1 className="header__logo">
          <div className="header__logo-txt">
            2024 웹 프론트엔드
          </div>
          <div className="header__logo-txt">
            방동혁 포트폴리오 
          </div>
        </h1>
        <div className="header__gnb">
          <ul className="header__gnb-list">
            <li className="header__gnb-item">소개</li>
            <li className="header__gnb-item">스택</li>
            <li className="header__gnb-item">프로젝트</li>
            <li className="header__gnb-item">사이드 프로젝트</li>
          </ul>
        </div>
      </motion.header>
    );
  }
  
  export default Header;