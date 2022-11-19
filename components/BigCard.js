import styles from '../styles/BigCard.module.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

function BigCard(props) {
    const cardRef = useRef(null);

    useEffect(() => {
        cardRef.current.focus();
    }, []);

    const typesColor = { background: `var(--${props.type[0]}Color)` };
    const spriteBackground = { background: `var(--${props.type[0]}Color)` };
    if (!!props.type[1]) {
        typesColor.background = `linear-gradient(to bottom right, var(--${props.type[0]}Color) 50%, var(--${props.type[1]}Color) 50%)`;
        spriteBackground.background = `var(--${props.type[1]}Color)`;
    }


    return (
        <div className={styles.floatContainer} onClick={() => console.log('clicked')} >
            <div ref={cardRef} className={styles.pokemon} style={typesColor} tabIndex={0} onBlur={() => props.hideBigCard()} >
                <h3 className={styles.name}>{props.name}</h3>
                <div className={styles.imgContainer}>
                    <span className={styles.artContainer}><Image className={styles.img} src={props.artwork} alt={props.name} quality={100} priority={true} layout='fill' /></span>
                </div>
                <p className={styles.description}>{props.description.text}</p>
                <span className={styles.type}>Type: {props.type[0]}{!!props.type[1] && ` / ${props.type[1]}`}</span>
                <span className={styles.spriteContainer} style={spriteBackground} ><Image className={styles.sprite} src={props.sprite} alt={props.name} quality={100} priority={true} layout='fill' /></span>
            </div>
        </div>
    );
}

export default BigCard;