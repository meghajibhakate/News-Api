function CategoryNewsData(props) {
    console.log('props: ', props)
    return (
        <div>
            {props.TopNews.map((data, key) => {
                return (
                    <div className="maindiv" key={key} >
                            <p><strong>Author:-</strong>{data.author}</p>
                            <p>{data.publishedAt}</p>                    
                    </div>
                )
            })
            }
        </div>
    )
}
    export default CategoryNewsData;