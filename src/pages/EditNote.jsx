import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Loader from '../components/Loader';


const EditNote = () => {

    const navigate = useNavigate();
    const params = useParams()
    const id = params.id;

    const [note, setNote] = useState();
    const [load, setLoad] = useState();

    const getNoteById = async () => {
        try {
            setLoad(true);
            const response = await axios.post(`/note/getNote/${id}`);
            if (response.data.success) {
                setNote(response.data.note);
                setLoad(false);
            }

        } catch (error) {
            console.log(error);
            setLoad(false);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {

        getNoteById();

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (!data.title && !data.description) {
            toast.error("Title or description required!");
            return;
        }
        data.id = id;
        try {
            setLoad(true);
            const response = await axios.post("/note/updateNote", data);

            if (response.data.success) {
                setLoad(false);
                toast.success(response.data.message);
                navigate("/notes")
            }

        } catch (error) {
            setLoad(false);
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    if (load === true) {
        return (
            <>
                <Loader />
            </>
        )
    }


    return (
        <>
            <div className='flex w-[100vw] h-[90vh] justify-center items-center'>

                <form onSubmit={handleSubmit} className='flex flex-col h-[60vh] justify-center items-center space-y-8 border-2 border-gray-600 rounded-lg p-10'>
                    <h1 className='text-2xl font-bold bg-pink-400 rounded-lg p-2 text-white'>EDIT NOTE</h1>
                    <input type="text" name='title' placeholder={note?.title} className="input input-bordered w-[70vw] sm:w-[40vw] md:w-[30vw] font-bold text-green-800" />
                    <textarea rows="6" name='description' placeholder={note?.description} className="input input-bordered w-[70vw] sm:w-[40vw] md:w-[30vw] font-bold text-pink-700" />
                    <button type='submit' className='btn btn-success text-white'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default EditNote