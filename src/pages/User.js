import React from "react";

export default function User({match}) {
return(<div>User {match.params.name}</div>)
}