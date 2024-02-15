// const heading = React.createElement("h1",{ id:"heading" },"hello manvendra");

// const root =ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


const parent =React.createElement(
    "div",
    { id:"parent"},
    React.createElement(
        "div",{ id:"child"},
        [
            React.createElement(
                "h1",
                { id:"heading" },
                "hello manvendra"),
            React.createElement(
            "h2",
            { id:"heading2" },
            "hello manvendra")
        ]
         
    ))
    const root =ReactDOM.createRoot(document.getElementById("root"));

 root.render(parent);