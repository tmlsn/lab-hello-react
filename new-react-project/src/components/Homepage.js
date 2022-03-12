import "./Homepage.css"

export function Homepage() {
    return (
        <div className="App">
      <div className="header">
        <div className='navBar'>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="logo" />
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="menu" />
        </div>
        <div className="info" >
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="content">
      <ul>
        <li>
         <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="icon1" />
         <h3>Declarative</h3>
         <p>React makes it painless to create interactive UIs.</p>
        </li>
        <li>
         <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="icon2" />
         <h3>Components</h3>
         <p>Build encapsulated components that manage their state.</p>
        </li>
        <li>
         <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="icon3" />
         <h3>Single-Way</h3>
         <p>A set of immutable values are passed to the component's.</p>
        </li>
        <li>
         <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="icon4" />
         <h3>JSX</h3>
         <p>Statically-typed, designed to run on modern browsers.</p>
        </li>
      </ul>
      </div>
    </div>
    )
}