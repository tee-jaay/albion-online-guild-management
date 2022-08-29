import './style.css';

const Search = () => {
    return (
        <>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Crafter's name" ariaLabel="Crafter's name" />
                <div className="input-group-append">
                    <button className="btn guild-bg-color text-light" style={{ border: 'none', width: '200px' }}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Search;