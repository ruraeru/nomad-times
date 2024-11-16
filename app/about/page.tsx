import React from 'react';
import styles from '../../styles/about.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <h1 className={styles.title}>
                    <span className={styles.titleHighlight}>The New York Times Best Seller Explorer</span>
                </h1>
            </div>

            {/* About Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <p className={styles.sectionSubtitle}>개발자로서의 저를 소개합니다</p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga architecto similique ea corporis illo ipsam natus aperiam libero adipisci neque soluta, possimus nulla. Recusandae laudantium fugit aliquam aperiam deleniti molestiae!
                </p>
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span>f93335383@gmail.com</span>
                    </div>
                    <div className={styles.contactItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        <a href="https://github.com/ruraeru" className={styles.link}>GitHub Profile</a>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                <p className={styles.sectionSubtitle}>주요 프로젝트를 소개합니다</p>

                <div className={styles.projectCard}>
                    <h3 className={styles.projectTitle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        The New York Times Best Seller Explorer (~ 2024.11.16(토))
                    </h3>
                    <p className={styles.projectDescription}>
                        React + TypeScript, NextJS를 사용하여 개발
                    </p>
                    <div className={styles.tagContainer}>
                        <span className={styles.tag}>React</span>
                        <span className={styles.tag}>TypeScript</span>
                        <span className={styles.tag}>CSS Modules</span>
                        <span className={styles.tag}>Next.js</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;