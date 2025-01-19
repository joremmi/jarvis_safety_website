// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p>&copy; {new Date().getFullYear()} Jarvis Safety. All rights reserved.</p>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><a href="/privacy-policy" style={styles.navLink}>Privacy Policy</a></li>
                        <li style={styles.navItem}><a href="/terms-of-service" style={styles.navLink}>Terms of Service</a></li>
                        <li style={styles.navItem}><a href="/contact" style={styles.navLink}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        margin: '10px 0 0',
        display: 'flex',
        justifyContent: 'center',
    },
    navItem: {
        margin: '0 10px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
    },
};

export default Footer;