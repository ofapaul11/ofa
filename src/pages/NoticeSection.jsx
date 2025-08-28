import { useEffect, useState } from "react";
import { NoticeList } from "../components/NoticeList";
import { collection, onSnapshot } from "firebase/firestore";
import ofaDb, { dbName } from "../js/fireStore";

export const NoticeSection = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(ofaDb, dbName),
            (snapshot) => {
                const noticesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setNotices(noticesData);
            }
        );
        return () => unsubscribe();
    }, []);

    return (
        <div className="notice-section" id="Shared opinions">
            <h2>Shared opinions</h2>
            <NoticeList notices={notices} />
        </div>
    );
}