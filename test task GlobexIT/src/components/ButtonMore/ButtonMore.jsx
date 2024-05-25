export default function ButtonMore({handleMoreLoad}) {
    return(
        <section className="more">
            <button className="more__btn" onClick={handleMoreLoad}>Еще</button>
        </section>
    )
}