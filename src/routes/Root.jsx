import { Outlet } from "react-router-dom";
import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";
import { ModalSignIn } from "../components/ModalSignIn";
import { NetworkLinks } from "../layouts/NetworkLinks";
import { useState } from "react";

export const Root = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <Header openModal={openModal} />
            <div className="container my-5">
                <Outlet />
            </div>
            <Footer />
            {showModal && (
                <ModalSignIn showModal={showModal} closeModal={closeModal} />
            )}
        </>
    );
}