import logo_qr from '../../assets/img/logo_qr.png';
import s from "./Logo.module.css";

export const Logo = () => {
    return (
        <div id={s['logo']}>
            <img src={logo_qr} alt={'logo_qr'} id={s['qr']} />
        </div>
    )
}
