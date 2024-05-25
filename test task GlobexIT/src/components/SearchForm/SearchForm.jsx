import {useState} from "react";

export default function SearchForm({findUser}) {
    const [ isSearch, setIsSearch ] = useState(''); //старт поиска фильмов

    function handleFindSubmit(e) {
        e.preventDefault()
        findUser(isSearch)
    }

    function handleChangeInput(e) {
        setIsSearch(e.target.value)
    }

    return (
        <section className="search">
            <form className="search__form" onSubmit={handleFindSubmit} noValidate>
                <input className="search__input"
                       type="text"
                       name="search"
                       value={isSearch || ''}
                       onChange={handleChangeInput}
                />
                <button
                    type="submit"
                    className="search__submit"/>
            </form>
        </section>
    )
}