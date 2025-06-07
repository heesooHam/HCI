function Home({ url }) {
    return (
        <iframe src={url}
            width="100%"
            height="600px"
            title="ExternalSite" />
    )
}

export default Home;