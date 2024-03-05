import './bookmarkManager.css'

const BookmarkManager = () => {
    return (
        <div>
            <section className="bookmarkManager">
                <div className="bookmarkManagerConteudo">
                    <h1>A Simple Bookmark Manager</h1>
                    <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free</p>
                    <button className="getItOnChrome" type="button" >Get it on Chrome</button>
                    <button className="getItOnFirefox" type="button" >Get it on Firefox</button>
                </div>
            <img src="./imagens/illustration-features-tab-1.svg" alt="" />
            </section>
            <section className="features">
            <div className="featuresConteudo">
                <h1>Features</h1>
                <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>
            </section>
        </div>
    )
}

export default BookmarkManager