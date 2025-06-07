function Home({ url }) {
    return (
        <div width = "100%" height = "100%">
            <iframe src={url}
                width = "100%"
                height = "1500vh"
                title="ExternalSite"
                 />
        </div>
    )
}

export default Home;