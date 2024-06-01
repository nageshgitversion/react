import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";


// const heading1 = document.createElement("h1")
// heading.innerHTML = "Hello I am new to Java Script step into first stage 🚀"
// const root =  document.getElementById("root")
// root.appendChild(heading1)


// const heading = React.createElement("h1" ,{},"Hello i am new to React 🚀");

// const jsxheading = <h1>Hello this is JSX </h1>



const AppLayout = ()=>{
return <div><Header />
            <Body />
      </div>   

}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />);