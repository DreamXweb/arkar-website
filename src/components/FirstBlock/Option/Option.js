import s from './Option.module.css';

export const Option = ({img, img_left, img_bottom, number, text, color}) => {

    return (
        <div id={s['option']} style={{backgroundColor: color}}>
            {/*TODO styled element*/}
            <img src={img} alt={text} id={s['img']} style={{left : (img_left ? img_left : 0) + 'px', marginBottom: (img_bottom ? img_bottom : 0) + 'px'}}/>
            <div id={s['text']}>
                <span>0{number}</span>
                <p>{text}</p>
            </div>
        </div>
    )
}
