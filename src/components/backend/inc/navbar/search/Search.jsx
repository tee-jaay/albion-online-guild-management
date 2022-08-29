const Search = () => {
    return (
        <>
            <ul className="navbar-nav mr-lg-4 w-100">
                <li className="nav-item nav-search d-none d-lg-block w-100">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="search">
                                <i className="mdi mdi-magnify"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search now" aria-label="search" aria-describedby="search" />
                    </div>
                </li>
            </ul>
        </>
    )
}
export default Search;