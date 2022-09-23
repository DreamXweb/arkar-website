import s from './Header.module.css';
import {Logo} from "../Logo/Logo";

export const Header = () => {
    return (
            <>
                <Logo />
                <div id={s['header-right']}>
                    <div id={s['registration']}>
                        <span>Регистрация</span>
                    </div>
                    <div id={s['menu-button']} >
                        <span>Меню</span>
                        <div id={s['hamburger']}>
                            <div className={s.line} />
                            <div className={s.line + ' ' + s.middle} />
                            <div className={s.line} />
                        </div>
                    </div>
                </div>
            </>
        )
}
