import { Outlet } from "react-router-dom";
import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";
import { ModalSignIn } from "../components/ModalSignIn";

export const Root = () => {
    return (
        <>
            <Header />
                <div className="container my-5">
                    <Outlet />
                </div>
            <Footer />
            <ModalSignIn />
        </>
    );
}