import { useState, useEffect } from "react";

function NotificationComponent({ userId }) {
    const [notifications, setNotifications] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/notifications?userId=${userId}`, {
                    method: 'GET',
                    credentials: 'include',
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data.length === 0) {
                        setError("No notifications available.");
                    }
                    setNotifications(data); // Update state with the fetched notifications
                } else {
                    setError("Failed to fetch notifications.");
                }
            } catch (error) {
                setError("Error fetching notifications.");
            }
        };

        fetchNotifications();
    }, [userId]);

    return (
        <div>
            <h2>Notifications</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {notifications.length === 0 ? (
                <p>No new notifications</p>
            ) : (
                <ul>
                    {notifications.map((notif, index) => (
                        <li key={index}>{notif.message}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
