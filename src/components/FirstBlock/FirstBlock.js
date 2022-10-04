import s from './FirstBlock.module.css';
import {Option} from "./Option/Option";
import metauniverse_img from '../../assets/img/metauniverse_img.png';
import constructor_img from '../../assets/img/constructor_img.png';
import exchange_img from '../../assets/img/exchange_img.png';
import ready_business_solutions_img from '../../assets/img/ready_business_solutions_img.png';
import {Artar} from "../Artar/Artar";
import {BackgroundObjects} from "../BackgroundObjects/BackgroundObjects";

export const FirstBlock = () => {
    return (
        <>
            <Artar />
            <BackgroundObjects />
            <div id={s['content']}>
                <p>LET'S MAKE SOMETHING GREAT</p>
            </div>
            {/* TODO hover animation */}
            <div id={s['options']}>
                {/* TODO WHERE IS THE TRANSPARENCY ?? */}
                <Option img={metauniverse_img} number={1} img_bottom={10} text={'Metauniverse'} color={'rgba(95, 178, 255, 0.7)'} />
                <Option img={constructor_img} number={2} text={'Web AR- конструктор'} color={'rgba(83, 105, 240, 0.7)'} />
                <Option img={exchange_img} img_left={66} img_bottom={-10} number={3} text={'Биржа AR- специалистов'} color={'rgba(204, 97, 221, 0.7)'} />
                <Option img={ready_business_solutions_img} img_bottom={10} number={4} text={'Готовое решение для бизнеса'} color={'rgba(202, 69, 133, 0.7)'} />
            </div>
        </>
    )
}
