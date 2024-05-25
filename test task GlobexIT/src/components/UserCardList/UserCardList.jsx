import UserCard from "../UserCard/UserCard.jsx";
import {useState} from "react";
import ButtonMore from "../ButtonMore/ButtonMore.jsx";
import Preloader from "../Preloader/Preloader.jsx";

export default function UserCardList ({usersAll, onCardClick, isLoading}) {
    const [countUserCard, setCountUserCard] = useState(6)

    const handleShowMore = () => {
            let newCardCount = countUserCard + 3;
            setCountUserCard(newCardCount);
    };

    return (
        <section className="userCard">
            {isLoading && <Preloader/>}
            <ul className="userCard__list">
                {usersAll.slice(0, countUserCard).map((data) => (
                    <UserCard data={data}
                              usersAll={usersAll}
                              key={data.name}
                              onCardClick={onCardClick}
                    />
                ))}
            </ul>
            {countUserCard < usersAll.length && (
                <ButtonMore handleMoreLoad={handleShowMore}/>
            )}
        </section>
    )
}