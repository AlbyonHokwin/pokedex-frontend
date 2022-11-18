import styles from '../styles/BigCard.module.css';
import Image from 'next/image';

function BigCard(props) {
    const typesColor = { background: `var(--${props.type[0]}Color)` };
    !!props.type[1] &&
        (typesColor.background =
            `linear-gradient(to bottom right, var(--${props.type[0]}Color) 49%, var(--${props.type[1]}Color) 51%)`);

    console.log(props);

    return (
        <div className={styles.floatContainer}>
            <div className={styles.pokemon} style={typesColor}>
                <div className={styles.imgContainer}>
                    <span className={styles.artContainer}><Image className={styles.img} src={props.artwork} alt={props.name} quality={100} priority={true} layout='fill' /></span>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.name}>{props.name}</h3>
                    <p className={styles.description}>{props.description.text}</p>
                    <span className={styles.type}>Type: {props.type[0]}{!!props.type[1] && ` / ${props.type[1]}`}</span>
                </div>
                <span className={styles.spriteContainer}><Image className={styles.sprite} src={props.sprite} alt={props.name} quality={100} priority={true} layout='fill' /></span>
            </div>
        </div>
    );
}

export default BigCard;