function CategoryNews(props) {



    return (
        <div className="head">
            {/* <ul className="head">
                <li><a href=""  onClick={() => props.CategoryNews("entertainment")}>Entertainment</a></li>
                <li><a href=""  onClick={() => props.CategoryNews("sports")}>Sports</a></li>
                <li><a href=""  onClick={() => props.CategoryNews("science")}>Science</a></li>
                <li><a href=""  onClick={() => props.CategoryNews("technology")}>Technology</a></li>

            </ul> */}
            <p onClick={() => props.CategoryNews("technology")} >Technology</p>
            <p onClick={() => props.CategoryNews("sports")} >Sports</p>
            <p onClick={() => props.CategoryNews("science")} >Science</p>
            <p onClick={() => props.CategoryNews("entertainment")} >Entertainment</p>
            <p onClick={() => props.CategoryNews("business")} >Business</p>
            <p onClick={() => props.CategoryNews("health")} >Health</p>


        </div>
    )
}

export default CategoryNews;