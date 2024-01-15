"use strict";

/** Takes in props - username, name, date, message
 *
 */

function Tweet({username, name, date, message}){
  return (
    <div className="tweet">
      <h1>{name}</h1>
      <span>{username}</span>
      <p>{date}</p>
      <p>{message}</p>
    </div>
  );
}