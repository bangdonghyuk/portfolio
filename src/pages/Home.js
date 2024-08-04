import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
//Home.js
function Home() {
  const { ref, controls } = useScrollAnimation();


  return (
    <div className=''>
      <section className="home section">
        <div className="home__inner">
          <h2 className="home__tit">안녕하세요!</h2>
          <div className="home__text">프론트엔드 개발자 방동혁 입니다.</div>
          <div className="home__text">1px을 맞추는 퍼블리셔에서 웹 프론트엔드로 열정 가득한 방동혁 입니다.</div>
        </div>
      </section>
      <section className="home section" >
        <motion.div className="home__inner" ref={ref}
         animate={controls}
         initial="hidden"
         variants={{
           visible: { opacity: 1, y: 0 },
           hidden: { opacity: 0, y: 400 }
         }}
         transition={{ duration: 0.5 }}>
          <h2 className="home__tit">안녕하세요!</h2>
          <div className="home__text">프론트엔드 개발자 방동혁 입니다.</div>
          <div className="home__text">1px을 맞추는 퍼블리셔에서 웹 프론트엔드로 열정 가득한 방동혁 입니다.</div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;