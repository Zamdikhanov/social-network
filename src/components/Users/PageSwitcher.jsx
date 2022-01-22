import React from 'react';
import styles from './PageSwitcher.module.css';


const PageSwitcher = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let newPage = React.createRef();

    const toInterval = (page) => {
        if (Number(page) < 0) { return 1 };
        if (Number(page) > pagesCount) { return pagesCount };
        return page;
    }


    return (
        <div className={styles.pageNumbersWrap}>
            <div className={styles.pageNumbers}>
                <button className={styles.switchingPageButton + ' ' + styles.leftNarrow} onClick={() => { props.onPageChanged(props.currentPage - 1) }}>
                    Предыдущая
                </button>
                <div className={styles.pageNumber_text}>
                    стр. <span>{props.currentPage}</span> из {pagesCount}
                </div>
                <button className={styles.switchingPageButton + ' ' + styles.rightNarrow} onClick={() => { props.onPageChanged(props.currentPage + 1) }}>
                    Следующая
                </button>
            </div>
            <div className={styles.pageNumbers}>
                <input className={styles.pageNumberInput} type='number' ref={newPage} placeholder={props.currentPage} />
                <button className={styles.switchingPageButton + ' ' + styles.submit} onClick={() => {
                    props.onPageChanged(Math.round(toInterval(newPage.current.value)));
                    newPage.current.value = '';
                }}>
                    Перейти
                </button>
            </div>
        </div>
    )
}

export default PageSwitcher;