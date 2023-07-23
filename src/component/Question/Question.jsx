import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question-answer">
      <h2>Question & Answer</h2>
      <h3>1.Props vs state</h3>
      <ul>
        <li>
          Components receive data from outside with props, whereas they can
          create and manage their own data with state
        </li>
        <li>Props are used to pass data, whereas state is for managing data</li>
        <li>
          Data from props is read-only, and cannot be modified by a component
          that is receiving it from outside
        </li>
        <li>
          State data can be modified by its own component, but is private
          (cannot be accessed from outside)
        </li>
        <li>
          Props can only be passed from parent component to child
          (unidirectional flow)
        </li>
      </ul>
      <div>
        <h3>2.How does useState work?</h3>
        <p>
          useState is React Hook that allows you to add state to a functional
          component. It returns an array with two values: the current state and
          a function to update it. The Hook takes an initial state value as an
          argument and returns an updated state value whenever the setter
          function is called
        </p>
      </div>
      <div>
        <h3>3.Purpose of useEffect other than fetching data.</h3>
        <ul>
          <li>Side-effects</li>
          <li>
            useEffect() arguments
            <ul>
              <li>Dependencies argument</li>
            </ul>
          </li>
          <li>
            Component lifecycle
            <ul>
              <li> Component did mount</li> <li>Component did update</li>
            </ul>
          </li>
          <li>Side-effect cleanup</li>
          <li>Conclusion</li>
        </ul>
      </div>
      <div>
        <h3>4.How Does React work?</h3>
        <p>
          React is a JavaScript library for building user interfaces. It allows
          developers to build reusable UI components that can be composed to
          create complex user interfaces. When a user interacts with a React
          component, React automatically updates the component and any child
          components that need to be updated. This allows React to provide a
          fast and responsive user experience, without requiring the entire page
          to be reloaded.
        </p>
      </div>
    </div>
  );
};

export default Question;
