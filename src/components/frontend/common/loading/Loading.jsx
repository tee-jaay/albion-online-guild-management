// import './style.css';

export default function Loading() {
    return (
        <>
            <div className="col-12">
                <div className="h-100">
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        <div className="spinner-grow" style={{ width: "5rem", height: "5rem", color: "#ed2563" }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-12">
                <div className="loading-container py-5">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow guild-bg-color" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
