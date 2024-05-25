import Main from "../Main/Main.jsx";
import Popup from "../Popup/Popup.jsx";
import {useEffect, useState} from "react";

function App() {
    const [usersAll, setUsersAll] = useState([])

    //стейт-переменная открытия карточки на весь экран
    const [selectedCard, setSelectedCard] = useState({})
    function handleOpenFullScreenCard(selectedCard) {
        setSelectedCard(selectedCard)
        console.log(selectedCard.name)
    }

    function closePopup() {
        setSelectedCard({});
    }

    useEffect(() => {
        const close = (e) => {
            if (e.key === 'Escape' ||
                (document.querySelector('.popup_opened') &&
                    document.querySelector('.popup_opened').contains(e.target))) {
                closePopup();
            }
        };

        window.addEventListener('keydown', close);
        window.addEventListener('click', close);

        return () => {
            window.removeEventListener('keydown', close);
            window.removeEventListener('click', close);
        };
    }, []);


    // function closePopup() {
    //     setSelectedCard({})
    // }
    //
    // useEffect(() => {
    //     const close = (e) => {
    //         if (e.key === 'Escape') {
    //             setSelectedCard({})
    //         }
    //     }
    //     window.addEventListener('keydown', close)
    //
    //     return () =>
    //         window.removeEventListener('keydown', close)
    // }, []);
    //
    // useEffect(() => {
    //     const close = (e) => {
    //         if (document.querySelector('.popup_opened').contains(e.target)) {
    //             setSelectedCard({});
    //         }
    //     }
    //     window.addEventListener('click', close)
    //     return () => window.removeEventListener('click', close)
    // }, []);

    return (
    <>
        <Main
            onCardClick={handleOpenFullScreenCard}
            usersAll={usersAll}
            setUsersAll={setUsersAll}
        />
        <Popup
            isOpen={ selectedCard.name }
            data={selectedCard}
            onClose={closePopup}
        />
    </>
  )
}

export default App
