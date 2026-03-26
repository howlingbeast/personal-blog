import React from 'react';
import styles from './Sidebar.module.css';
import reactSvg from '../assets/react.svg';
import rogPng from '../assets/rog.png';
import gojoPng  from '../assets/gojo.png';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      {/* 作者简介（社交证明） */}
      <section className={styles.widget}>
        <h3>关于作者</h3>
        <div className={styles.authorInfo}>
          <img
            src="https://b0.bdstatic.com/ugc/ss4rsr7Ekjfiw9TjTJpVLQ99b4e6290ace2f0c3103b2b8e61b3bab.jpg"
            alt="张三"
            className={styles.avatar}
          />
          <p>gojo，咒术师，热爱装逼。拥有2.5年的咒术总量，目前还在复活之中。</p>
        </div>
      </section>

      {/* 社交链接（信任元素） */}
      <section className={styles.widget}>
        <h3>关注我</h3>
        <ul className={styles.socialLinks}>
          <li><a href="#" aria-label="GitHub">GitHub</a></li>
          <li><a href="#" aria-label="Twitter">Twitter</a></li>
          <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
        </ul>
      </section>

      {/* 订阅 CTA（行动号召） */}
      <section className={`${styles.widget} ${styles.ctaWidget}`}>
        <h3>订阅更新</h3>
        <p>获取最新的文章和技术干货，每周发送一次，随时退订。</p>
        <form className={styles.subscribeForm}>
          <input type="email" placeholder="你的邮箱" required />
          <button type="submit">订阅</button>
        </form>
      </section>

      {/* 合作伙伴 logo（社交证明） */}
      <section className={styles.widget}>
        <h3>合作伙伴</h3>
        <div className={styles.partners}>
          <img src={rogPng} alt="Partner 1" />
          <img src={gojoPng} alt="Partner 2" />
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;