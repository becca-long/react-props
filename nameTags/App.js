// Render the name tags using React!
const App = (props) => {
    let { nameTags } = props;
    console.log(nameTags)

    return nameTags.map((nameTag) => {
        return (<div className="nametag mx-auto w-50 text-center border m-1">
                    <div className="hello bg-primary text-white p-3 h3">Hello, my name is:</div>
                    <div className="name h4 p-5">{nameTag}</div>
                </div>)
    })
}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
const NameTag = null;  