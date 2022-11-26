import React from 'react';
const Blog = () => {
    return (
        <div className="container mt-5 pt-5">
            <h1 className="d-flex justify-content-center fw-bold text-primary my-4">Blogs</h1>
            <div className="">
                <div className="card mb-5 mt-4  p-5 ">
                    <div className="question fw-semibold mb-3 ">
                        <h3> What are the different ways to manage a state in a React
                            application?</h3>
                    </div>
                    <div className="answer">
                        <p>There are four main types of state we need to properly manage in our React apps:

                            (i)Local state
                            (ii)Global state
                            (iii)Server state
                            (iv)URL state<br />{" "}
                            <b> useState</b> is the first tool we should reach for to manage state in our components.It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a <b>callback function</b> (without needing optimizations like useCallback).<b>useReducer</b> is another option that can be used for either local or global state.
                            <b> useContext</b> together with useReducer takes the component co-located
                            state management on another level. Suddenly we can pass the state
                            container created by useReducer and its dispatch function to any
                            component from any top-level component. It can also be the most
                            top-level component to make the state "global." It's also possible
                            to pass things down only using React props, but React's Context API
                            makes your state and dispatch function available anywhere without
                            explicitly passing everything down the component tree.</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="card mb-5 p-5 ">
                    <div className="question fw-semibold mb-3 ">
                        <h3>     How does prototypical inheritance work?</h3>
                    </div>
                    <div className="answer">
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="card mb-5 p-5 ">
                    <div className="question fw-semibold mb-3 ">
                        <h3>    What is a unit test? Why should we write unit tests?</h3>
                    </div>
                    <div className="answer">
                        <p>Unit testing is a software development process in which the smallest
                            testable parts of an application, called units, are individually and
                            independently scrutinized for proper operation. This testing
                            methodology is done during the development process by the software
                            developers and sometimes QA staff. The main objective of unit
                            testing is to isolate written code to test and determine if it works
                            as intended. Unit testing is an important step in the development
                            process, because if done correctly, it can help detect early flaws
                            in code which may be more difficult to find in later testing stages.
                            Unit testing is a component of test-driven development (TDD), a
                            pragmatic methodology that takes a meticulous approach to building a
                            product by means of continual testing and revision. This testing
                            method is also the first level of software testing, which is
                            performed before other testing methods such as integration testing.
                            Unit tests are typically isolated to ensure a unit does not rely on
                            any external code or functions. Testing can be done manually but is
                            often automated.</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="card mb-5 p-5 ">
                    <div className="question fw-semibold mb-3 ">
                        <h3>  React vs. Angular vs. Vue?</h3>
                    </div>
                    <div className="answer ">
                        <p> Angular.js offers a very clear structure and lots of features. It
                            allows development teams to move quickly to implementation without
                            the need to define structures or look for additional libraries.
                            However, it is often too overloaded for small projects and brings
                            unnecessary ballast. <br />
                            React is recommended for projects with front-end-heavy results.
                            Since there are no clear structures, close cooperation between the
                            development team is vital. React has stronger server-side rendering
                            support, making the library more SEO-friendly. <br />
                            Vue may be used for a wide range of applications. It may give a
                            great solution for virtually every project type due to its
                            interoperability with other JavaScript frameworks and its ability to
                            add more complicated logic to current programs.</p>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        </div>
    );
};

export default Blog;