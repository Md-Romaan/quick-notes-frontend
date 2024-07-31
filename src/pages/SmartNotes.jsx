import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify"


const SmartNotes = () => {

    const [notes, setNotes] = useState();

    const getNotes = async () => {
        try {
            const response = await axios.post("/note/getNotes", null);

            if (response.data.success) {
                setNotes(response.data.notes);
            }


        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {

        getNotes();

    }, [])

    const handleNoteSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {

            const response = await axios.post("note/addNote", data);

            if (response.data.success) {
                toast.success(response.data.message);
                window.location.reload();
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }

    }

    const handleDelete = async (id) => {
        try {
            console.log(id);
            const response = await axios.delete(`/note/deleteNote/${id}`);

            if (response.data.success) {
                toast.success(response.data.message);

                setTimeout(() => {
                    window.location.reload();
                }, 500);

            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <>
            <div className='flex flex-row gap-1'>

                <Sidebar />
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto mt-5'>
                    {
                        notes?.map((note) => {
                            return (
                                <>
                                    <div className="card bg-base-100  shadow-xl">
                                        <div className="card-body">
                                            <h2 className="card-title">{note.title}</h2>
                                            <p>{note.description}</p>
                                            <div className="card-actions justify-between">
                                                <button onClick={() => handleDelete(note._id)} className='btn btn-warning'>delete</button>
                                                <NavLink to={`/edit-note/${note._id}`} className="btn btn-primary">
                                                    Edit
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                    <div className='w-32 h-32 bg-gray-200 flex justify-center items-center rounded-lg'>
                        <i onClick={() => document.getElementById("my_modal_1").showModal()} class="fa-solid fa-plus text-3xl hover:cursor-pointer hover:text-gray-600"></i>
                    </div>

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Add a Note</h3>
                            <form onSubmit={handleNoteSubmit} className='space-y-4'>
                                <input type="text" name="title" id="" placeholder='Title' className='border-2 rounded-md border-gray-500 block mx-auto pl-2 p-2 w-full mt-5 text-lg text-green-800 font-bold ' />
                                <textarea type="text" name="description" id="" rows={6} placeholder='Description' className='border-2 rounded-md border-gray-500 block mx-auto pl-2 p-2 w-full text-lg text-pink-700 font-bold' />
                                <button type='submit' className="btn btn-success text-white font-bold">Save Note</button>
                                <button
                                    className='btn btn-error ml-5 text-white'
                                    onClick={() => window.location.reload()}>
                                    Close</button>
                            </form>

                        </div>
                    </dialog>

                </div>
            </div>
        </>
    )
}

export default SmartNotes