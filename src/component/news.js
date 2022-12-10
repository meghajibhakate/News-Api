function NewsData(props) {
    console.log('props: ', props)
    return (
        <div className="container">
            {props.TopNews.map((data, key) => {
                return (
                    <div className="maindiv" key={key} onClick={() => props.Newpage(data.url)}>
                        <div className="NewsHeading"><h3>{data.title}</h3></div>
                        {/* <h3>{data.title}</h3> */}
                        <img src={data.urlToImage} alt="img"></img>
                        {/* <div className="dataNews"> */}
                            
                            <p className="Description"><strong>Description:-</strong>{data.description}</p>
                            <p className="Content"><strong>Content:-</strong>{data.content}</p>
                        {/* </div> */}
                        <div className="box">

                            <p><strong>Author:-</strong>{data.author}</p>
                            <p>{data.publishedAt}</p>

                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default NewsData;