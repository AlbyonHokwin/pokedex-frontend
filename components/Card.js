import styles from '../styles/Card.module.css';

function Card(props) {

    return (
        <div className={`${styles.pokemon} ${styles[props.type]}`}>
            <div className={styles.imgContainer}>
                <img src={props.sprite} alt={props.name} />
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{props.name}</h3>
                <span className={styles.type}>Type: <span>{props.type}</span></span>
            </div>
        </div>
    );
}

export default Card;