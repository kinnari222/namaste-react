const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World React Js"
);
console.log("heading", heading); //returns object
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root", root);
root.render(heading); //render method is converting this object to an h1 tag and putting it in the DOM.

// if you want a nested div like below
{
  /* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an h1 tag")
  )
);
const roots = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// more than one children
const parents = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")]
  )
);
const rootss = ReactDOM.createRoot(document.getElementById("header"));
root.render(parents);
