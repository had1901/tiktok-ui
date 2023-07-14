import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Button({to, href, primary=false, outline=false, small = false, medium = false, large = false, text = false, rounded = false, disabled, children, onClick, ...passProps}) {
    let Comp = 'button';
    const props = {
        onClick, 
        ...passProps
    }

    // remove event handlers when disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] == 'function' ) {
                delete props[key]
            }
        })
    }
    if(to) {
        props.to = to
        Comp = Link
    } else if(href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        disabled,
        small,
        large,
        text,
        rounded,
    })
    return(
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    )
}
export default Button