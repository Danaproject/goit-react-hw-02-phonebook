import styles from './Panel.module.css';

const Panel = ({ children }) => <div className={styles.Panel}>{children}</div>;

export default Panel;