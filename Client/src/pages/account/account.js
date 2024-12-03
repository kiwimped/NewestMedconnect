import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Navigate } from "react-router-dom";

export default function Account() {
    const { user, setUser } = useContext(UserContext);
    const [name, setName] = useState(user?.name || "");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name, password };

        // Send the updated data to the backend
        const response = await fetch('http://localhost:8000/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include', // To send the token in cookies
        });

        const result = await response.json();
        if (result.error) {
            setError(result.error);
        } else {
            setUser(result); // Update the user context
            alert('User updated successfully');
        }
    };
    if(!user){
        return <Navigate to="/loginNEW" />;
    }
    if(user){
    return (
        <div>
            <h1>ACCOUNT</h1>
            {!!user && user.name && <h2>HI {user.name}!</h2>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Update</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
}
