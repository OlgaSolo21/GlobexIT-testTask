export default function Popup({isOpen, onClose, data}) {
    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__cards">
                <button
                        type="button"
                        aria-label="Close"
                        className="popup__close"
                        onClick={onClose}
                />
                <h2 className="userCard__title">{data.name}</h2>
                <ul className="popup__info">
                    <p className="popup__title">Телефон:</p>
                    <li className="popup__subtitle">{data.phone}</li>
                    <p className="popup__title">Почта:</p>
                    <li className="popup__subtitle">{data.email}</li>
                    <p className="popup__title">Дата приема:</p>
                    <li className="popup__subtitle">{data.hire_date}</li>
                    <p className="popup__title">Должность:</p>
                    <li className="popup__subtitle">{data.position_name}</li>
                    <p className="popup__title">Подразделение:</p>
                    <li className="popup__subtitle">{data.department}</li>
                </ul>
                <div className="popup__moreInfo">
                    <p className="popup__title">Дополнительная информация:</p>
                    <p className="popup__subtitle">Разработчики используют текст в качестве заполнителя макта страницы.
                        Разработчики используют текст в качестве заполнителя макта страницы.</p>
                </div>
            </div>
        </div>
    )
}