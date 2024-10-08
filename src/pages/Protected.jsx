import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../redux/userSlice';
import Loader from '../components/Loader';

const Protected = ({ children }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const token = useSelector(state => state.user.token);
    const [verified, setVerified] = useState();
    const [load, setLoad] = useState();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        else {
            verifyToken();
        }

    }, [token]);


    const verifyToken = async () => {
        try {
            setLoad(true);
            const response = await axios.post("/user/verify-token", null);
            setLoad(false);
            if (response.data.success) {
                setVerified("yes");
            }
            else {
                setVerified("no");
            }
        } catch (error) {
            setLoad(false);
            setVerified("no");
        }
    }


    useEffect(() => {
        if (verified === "no") {
            toast.error("Token not verified!");
            dispatch(logout());
            navigate("/login");
        }

    }, [verified]);

    if (load === true) return <Loader />

    if (verified === "yes") {
        return (
            <>
                {children}
            </>
        )
    }

    return null;
}

export default Protected;