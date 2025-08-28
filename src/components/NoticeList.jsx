import { useState, useEffect } from "react";

export const NoticeList = ({ notices }) => {

    const [notes, setNotes] = useState(notices);

    useEffect(() => {
        setNotes(notices);
    }, [notices]);

    return (
        <>
            {notes.length === 0 ? (
                <p className="notice-empty">Please add a review.</p>
            ) : (
                <ul className="notice-list">
                    {notes.slice(0,15).map((notice, id) => (
                        <li key={id} className="notice-item">
                            <strong>{notice.name}</strong>
                            <div>{notice.message}</div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
