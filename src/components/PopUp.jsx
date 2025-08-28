import React, { useEffect } from "react";
import "../style/style.css";

const PopUp = ({ message, isSuccess, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose && onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`popup ${isSuccess ? "success" : "error"}`}>
            <p>{message}</p>
        </div>
    );
};

export default PopUp;