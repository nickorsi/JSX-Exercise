"use strict";

/** return rendering props from Tweet component */

function App(){
  return (
    <div>
      <Tweet
      username="Jim"
      name="Jim"
      date={new Date().toDateString()}
      message="hello"
      />
      <Tweet
      username="Nick"
      name="Nick"
      date={new Date().toDateString()}
      message="Bye"
      />
      <Tweet
      username="Jia"
      name="Jia"
      date={new Date().toDateString()}
      message="Good Day"
      />
    </div>
  );
}