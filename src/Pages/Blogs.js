import React from "react";

const Blogs = () => {
  return (
    <div
      className="accordion accordion-flush container mx-auto my-16"
      id="accordionFlushExample"
    >
      <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingOne">
          <button
            className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <h1 className="font-bold text-xl">
              1. How will you improve the performance of a React Application?
            </h1>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse border-0 collapse show"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body py-4 px-5">
            <h2 className="text-xl">
              To improve the performance of a React Application:
            </h2>
            <div className="flex">
              <ol className="bg-white rounded-lg w-96 text-gray-900">
                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                  1. Keeping component state local where necessary.
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  2. Memoizing React components to prevent unnecessary
                  re-renders.
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  3. Code-splitting in React using dynamic import()
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  4. Windowing or list virtualization in React.
                </li>
                <li className="px-6 py-2 w-full rounded-b-lg">
                  5. Lazy loading images in React.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingTwo">
          <button
            className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            <h1 className="font-bold text-xl">
              2. What are the different ways to manage a state in a React
              application?
            </h1>
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body py-4 px-5">
            <h2 className="text-xl">
              There are four main types of state you need to properly manage in
              a React application:
            </h2>
            <div className="flex">
              <ol className="bg-white rounded-lg w-96 text-gray-900">
                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                  1. Local State
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  2. Global State
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  3. Server State
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  4. URL State
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingThree">
          <button
            className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            <h1 className="font-bold text-xl">
              3. How does prototypical inheritance work?
            </h1>
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body py-4 px-5">
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using _proto_.
          </div>
        </div>
      </div>
      <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingFour">
          <button
            className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            <h1 className="font-bold text-xl">
              4. Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts?
            </h1>
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body py-4 px-5">
            <h2 className="text-xl">
              One should never set the state directly because of the following
              reasons:
            </h2>
            <div className="flex">
              <ol className="bg-white rounded-lg w-96 text-gray-900">
                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                  1. If you update it directly, calling the setState() afterward
                  may just replace the update you made.
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  2. When you directly update the state, it does not change
                  this.state immediately. Instead, it creates a pending state
                  transition, and accessing it after calling this method will
                  only return the present value.
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  3. You will lose control of the state across all components.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingFive">
          <button
            className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            <h1 className="font-bold text-xl">
              5. What is a unit test? Why should write unit tests?
            </h1>
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body py-4 px-5">
            <p>
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property.
            </p>{" "}
            <br />
            <p>
              Unit testing is considered part of the programming phase, with the
              person that wrote the program...unit testing". That isn't because
              programmers hold the secret sauce to unit testing, it's because it
              makes sense. The programmer that wrote the prod code will likely
              know how to access the parts that can be tested easily and how to
              mock objects that can't be accessed otherwise. It's a time trade
              off. Other times, someone will come in after the fact and write
              tests to help create safe guards while they refactor or further
              develop that area of the code base.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
