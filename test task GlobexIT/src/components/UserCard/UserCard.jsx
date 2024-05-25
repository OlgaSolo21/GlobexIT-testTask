import phoneIcon from "../../image/phoneIcon.svg"
import mailIcon from "../../image/mailIcon.svg"


export default function UserCard ({data, onCardClick}) {
    const handleCardClick = () => {// открытие на весь экран
        onCardClick(data)
    }

    return (
        <li className="userCard__item" key={data} onClick={handleCardClick}>
            <h2 className="userCard__title">{data.name}</h2>
            <div className="userCard__info">
                <img className="userCard__icon" alt="иконка телефона" src={phoneIcon}/>
                <p className="userCard__subtitle">{data.phone}</p>
                <img className="userCard__icon" alt="иконка почты" src={mailIcon}/>
                <p className="userCard__subtitle">{data.email}</p>
            </div>
        </li>
    )
}