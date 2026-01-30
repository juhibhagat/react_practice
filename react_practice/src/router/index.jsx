import { BrowserRouter, Link, Route, Routes} from "react-router-dom"


function Important() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <header className="p-2 text-content  border border-1">
                    <h2>Shopping</h2>
                
                <nav>
                    <span className="mx-4 "><Link to="/">Home</Link></span>
                    <span className="mx-4"><Link to="javascript">javascript</Link></span>
                    <span className="mx-4"><Link to="mern">Mern</Link></span>
                    <span className="mx-4"><Link to="python">Python</Link></span>
                </nav>
                </header>
                <section>
                

                        <Routes>
                            <Route path="/" element={<div><h2>Shopping Home</h2> <p>Women fashion</p></div>}/>
                            <Route path="/javascript" element={<div><h2>JavaScript</h2></div>}/>
                            <Route path="/mern" element={<div><h2>merns</h2></div>}/>
                        </Routes>
                </section>

            </BrowserRouter>

        </div>
    )
}

export default Important