import classNames from "classnames/bind"
import styles from './AcountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(styles)
function AcountItem() {
    return(
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://hocmay.vn/wp-content/uploads/2023/04/eimi-fukada-la-ai.png" alt="Trang" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span className={cx('')}>Nguyen trang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Anh Duc</span>
            </div>
        </div>
    )
}
export default AcountItem