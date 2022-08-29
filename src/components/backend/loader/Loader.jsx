export default function Loader() {
    return (
        <>
            <div className="h-100">
                <div className="h-100 d-flex justify-content-center align-items-center">
                    <div className="spinner-grow" style={{ width: "5rem", height: "5rem", color: "#ed2563" }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </>
    )
}
