import s from './BackgroundObjects.module.css'
import cube_side_1 from '../../assets/img/background_objects/cube_side_1.png';
import cube_side_2 from '../../assets/img/background_objects/cube_side_2.png';
import cube_side_3 from '../../assets/img/background_objects/cube_side_3.png';
import light_1 from '../../assets/img/background_objects/light_1.png';

export const BackgroundObjects = () => {

    console.log('s = ', s);

    return (
        <div id={s['background-objects']}>
            <div id={s['background-objects-container-2']} className={'relative'}>
                <img id={s['cube_side_1']} className={'relative'} src={cube_side_1} alt={'cube_side_1'} />
                <img id={s['cube_side_2']} className={'relative'} src={cube_side_2} alt={'cube_side_2'} />
                <img id={s['cube_side_3']} className={'relative'} src={cube_side_3} alt={'cube_side_3'} />
            </div>
            <div id={s['background-objects-container-3']} className={'relative'}>
                <img id={s['light_1']} className={'relative'} src={light_1} alt={'light_1'} />
            </div>
        </div>
    )
}
