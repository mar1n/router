import React from "react";
import { useParams } from "react-router";

export default function User({match}) {
    const { name } = useParams();
return(<div>User {name}</div>)
}