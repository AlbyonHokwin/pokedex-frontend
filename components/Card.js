import styles from '../styles/Card.module.css';
import Image from 'next/image';

function Card(props) {

    return (
        <div className={`${styles.pokemon} ${styles[props.type[0]]}`}>
            <div className={styles.imgContainer}>
                <span><Image className={styles.img} src={props.sprite} alt={props.name} quality={100} layout='fill' /></span>
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{props.name}</h3>
                <span className={styles.type}>{props.type[0]}{!!props.type[1] && ` / ${props.type[1]}`}</span>
            </div>
        </div>
    );
}

export default Card;