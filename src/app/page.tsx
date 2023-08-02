"use client"

import {photoList} from "../data/photoList";
import {PhotoItem} from "../components/PhotoItem";
import {Modal} from "../components/Modal";
import {useState} from "react";

const Page = () => {

    // state que irá controlar se um modal irá aparecer ou não
    const [showModal, setShowModal] = useState(false);

    // state que irá controlar qual foto será exibida no modal
    const [imageOfModal, setImageOfModal] = useState('');

    // Função que irá abrir o modal
    const handleOpenModal = (id: number) => {
        const photo = photoList.find(photo => photo.id === id)
        if (!photo) return;

        setImageOfModal(photo.url);
        setShowModal(true);
    }

    // Função que irá fechar o modal
    const handleCloseModal = () => {
        setShowModal(false);
        setImageOfModal('')
    }


    return (
        <div className="mx-2">
            <h1 className={"text-center text-3xl font-bold my-10"}>Fotos Intergalacticas</h1>

            <section className={"container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
                {photoList.map(photo => (
                    <PhotoItem key={photo.id} photo={photo} onClick={() => handleOpenModal(photo.id)}  />
                ))}
            </section>

            {showModal && <Modal image={imageOfModal} closeModal={handleCloseModal} />}
        </div>
    );
}

export default Page;