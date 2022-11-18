import styles from '../styles/Card.module.css';
import Image from 'next/image';

function Card(props) {
    const typesColor = { background: `var(--${props.type[0]}Color)` };
    !!props.type[1] &&
        (typesColor.background =
            `linear-gradient(to bottom right, var(--${props.type[0]}Color) 49%, var(--${props.type[1]}Color) 51%)`);
    
    return (
        <div className={styles.pokemon} style={typesColor} onClick={() => props.displayBigCard(props)} >
            <div className={styles.imgContainer}>
                <span className={styles.spriteContainer}><Image className={styles.img} src={props.sprite} alt={props.name} quality={100} priority={true} layout='fill' /></span>
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{props.name}</h3>
                <span className={styles.type}>{props.type[0]}{!!props.type[1] && ` / ${props.type[1]}`}</span>
            </div>
        </div>
    );
}

export default Card;