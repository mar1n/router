import React from "react";
import { useLocation } from "react-router";

export default function About() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <div>About</div>
            <div>Location = {location.pathname}</div>
            <div>From = {location.state.from}</div>
        </>
    );
}