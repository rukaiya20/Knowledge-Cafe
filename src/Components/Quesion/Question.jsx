import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js" 


const Question = () => {
  return (
    <div className="container mb-5 mx-5">
      <h1 className="mb-5 border p-3 rounded-2 bg-secondary text-center">Question Part</h1>
    <div className="accordion" id="accordionPanelsStayOpenExample">
<div className="accordion-item">
  <h2 className="accordion-header " id="panelsStayOpen-headingOne">
    <button className="accordion-button  fw-bolder fs-4 text-bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne ">
    Props vs state
    </button>
  </h2>
  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
    <div className="accordion-body text-secondary fw-bold ">
    Props are used to pass data from a parent component to a child component, while state is used to manage data within a component. Props are immutable and cannot be changed within a component, while state is mutable and can be updated using the setState function
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
    <button className="accordion-button collapsed te fw-bolder fs-4 text-bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
    2.How does useState work?
    </button>
  </h2>
  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
    <div className="accordion-body text-secondary fw-bold">
    useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
    <button className="accordion-button collapsed  fw-bolder fs-4 text-bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
    3.Purpose of useEffect other than fetching data.
    </button>
  </h2>
  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
    <div className="accordion-body text-secondary fw-bold">
    The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
    <button className="accordion-button collapsed fw-bolder fs-4 text-bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
    4.How Does React work?
    </button>
  </h2>
  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
    <div className="accordion-body text-secondary fw-bold">
    React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed!
    </div>
  </div>
</div>
</div>
  </div>  
  )
}

function App() {

  const [mounted, setMounted] = useState(true);

  return (
    <div className="container py-4">
        <h3>Bootstrap 5 Accordion with React</h3>
        {mounted &&
            <div>
                <AccordionDemo/>
            </div>
        }
    </div>
  )
  
}


export default Question;
