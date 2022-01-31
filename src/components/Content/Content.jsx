import React from 'react';
import css from './Content.module.css';

const Content = () => {
    return (
        <div className={css.main}>
            <div className={css.main_content}>
                <h1>О проекте</h1>
                <p className={css.main_content__text}>
                    Проходил онлайн курс на канале
                    <a href='https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g'
                    target='_blank'
                    rel="noopener noreferrer">
                        IT-KAMASUTRA
                    </a>
                    с декабря 2021 по январь 2022.
                    Курс "Путь самурая" немного устарел, некоторые вещи уже не 
                    работают как у автора и приходится искать другие пути.
                    Но автор заряжает энергией, и навык поиска решений проблем
                    всегда необходим. Так что дерзайте, не останавливайтесь.
                </p>
                <blockquote className={css.main_content__quote}>
                    Самурай без меча подобен самураю с мечом, но только без меча.
                </blockquote>
                <p className={css.main_content__text}>
                    Страница пользователей сети (однокурсники), состоит из людей,
                    которые зарегистрировались на курсе
                    <a href='https://social-network.samuraijs.com/'
                    target='_blank'
                    rel="noopener noreferrer">
                        сайта
                    </a>
                    и получили API KEY для доступа.
                </p>
                <p className={css.main_content__text}>
                    У тестового пользователя не работает смена аватара 
                    (возможность заблокирована на сервере). Остальные
                    данные можно редактировать на страничке профиля с 
                    сохранением на сервере. Но одновременно кто-то другой 
                    также может редактирровать тестового пользователя.
                </p>
            </div>
            <div className={css.video_container}>
                <iframe className={css.iframe}
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/gb7gMluAeao"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}

export default Content;