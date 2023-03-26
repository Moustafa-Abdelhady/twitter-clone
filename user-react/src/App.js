import MainSidebar from "./components/main-sidebar/MainSidebar";
import TwModal from "./components/modal/modal";
import TwButton from "./components/tw-button/tw-button";

function App() {
    return (
        <main className="container">
            <section className="row" style={{height: "100vh"}}>
                <header className="col-3 col-xs-6 border">
                    <MainSidebar/>
                </header>
                <main className="col border">
                    Main Area
                    <TwModal.ModalButton targetId={"myModal"} title={'Show Form'} btnStyle={'outline-dark'} classes={'any-other-classes-names'}/>
                    <TwModal
                        id={"myModal"}
                        modalStyle={'modal-dialog-static or-other-classes-name'}
                    >
                        <TwModal.Header
                            title={"My New Modal"}
                            classes={"text-primary fs-5 custom-class-for-element"}
                        />
                        <TwModal.Body>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with
                                            anyone else.
                                        </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </TwModal.Body>
                        <TwModal.Footer>
                            <TwButton btnStyle={'outline-primary'} classes={'text-dark'}>FooterButton</TwButton>
                        </TwModal.Footer>
                    </TwModal>
                </main>
                <aside className="col-3 d-none d-lg-block border">Aside Bar</aside>
            </section>
        </main>
);
}

export default App;
