
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { Wrapper as PopperWrapper } from '~/component/Popper';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; 
import styles from './Header.module.scss'
import images from '~/assets/images';
import AcountItem from '~/component/AcountItem';
import Button from '../Button';

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 2000)
    })
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} />
                </div>
                <Tippy 
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={attrs => (
                            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                                <PopperWrapper>
                                        <h4 className={cx('search-title')}>
                                            Accounts
                                        </h4>
                                        <AcountItem />
                                        <AcountItem />
                                        <AcountItem />
                                        <AcountItem />
                                </PopperWrapper>
                            </div>
                )}>
                    <div className={cx('search')}>
                        <input placeholder='Tìm video hoặc tài khoản'/>
                        <button>
                            <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <Tippy content='Tìm kiếm'>
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                        <Button text>Upload</Button>
                        <Button primary >Login</Button>
                </div>
            </div>
                
        </header>
    )
}

export default Header;