import "./Wrap.css"
function Wrap() {
    return (<div className="content-container">
        <div className="row">
            <div className="left-panel box">
                <div className="overlay">
                    <img src="./R.png" alt="image" width="100%" />
                </div>
                <ul style={{ color: "gray", fontSize: "30px" }}>
                    <li><p style={{ color: "gray", fontSize: "28px" }}>Lorem ipsum</p></li>
                    <li><p style={{ color: "gray", fontSize: "28px" }}>Lorem ipsum</p></li>
                    <li><p style={{ color: "gray", fontSize: "28px" }}>Lorem ipsum</p></li>
                    <li><p style={{ color: "gray", fontSize: "28px" }}>Lorem ipsum</p></li>
                    <li><p style={{ color: "gray", fontSize: "28px" }}>Lorem ipsum</p></li>
                    <li><p style={{ color: "gray", fontSize: "28px" }}>Lorem ipsum</p></li>
                </ul>
            </div>
            <div className="middle-panel box">
                <div className="sub-middle-pannel">
                    <h3 style={{ color: "navy", marginTop: '-45px' }}>Alina Ijaz</h3>
                </div>

                <hr style={{ height: "2px", margin: "10px", marginTop: "50px", marginLeft: "160px", borderWidth: "0", color: "gray", backgroundColor: "gray" }}></hr>
                <p style={{ color: "gray", fontSize: "25px", marginTop: '-33px', marginLeft: "10px" }}>EDUCATION</p>
                <p style={{ color: "gray", fontSize: "15px", marginLeft: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <hr style={{ height: "2px", margin: "10px", marginTop: "50px", marginLeft: "230px", borderWidth: "0", color: "gray", backgroundColor: "gray" }}></hr>
                <p style={{ color: "gray", fontSize: "25px", marginTop: '-33px', marginLeft: "10px" }}>WORK EXPERIENCE</p>
                <p style={{ color: "gray", fontSize: "15px", marginLeft: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>)
}
export default Wrap;