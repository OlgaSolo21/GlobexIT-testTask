import SearchForm from "../SearchForm/SearchForm.jsx";
import UserCardList from "../UserCardList/UserCardList.jsx";
import * as mainApi from "../../utils/MainApi.js"
import {useState} from "react";
import {filterUser} from "../../utils/utils.js";

export default function Main({onCardClick, usersAll, setUsersAll}) {

    const [isLoading, setIsLoading] = useState(false)

    function filterFindUser(data, search) {
        const userResult = filterUser(data, search)
        setUsersAll(userResult)
    }

    function handleFindUser(search) {
        setIsLoading(true)
        mainApi.getUser()
            .then(res => {
                filterFindUser(res, search)
            })
            .catch(error => {
                console.error('Ошибка:', error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <>
            <SearchForm findUser={handleFindUser}/>
            <UserCardList
                isLoading={isLoading}
                usersAll={usersAll}
                onCardClick={onCardClick}/>
        </>
    )
}