import { createSignal } from 'solid-js'
import './style.css';

/*
<head>
<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>My CV</title>
<link rel="stylesheet" href="style.css" />
</head>
*/


function App() {
  const [count, setCount] = createSignal(0)

    return (
      <div>
          <header>
            <h1>P J Anthony</h1>
            <p>Email: anthony.p_j@etu.minesparis.psl.eu | Phone: +1234567890</p>
          </header>
  
          <section className="section">
            <h2>Summary</h2>
            <p>
              I am a double-masters student at MINES Paris. Before, I was a student at the National
              University of Singapore, with a Bachelors of Computer Science. I would like to do
              research in Computer Science, but that depends on life and my stupidity.
            </p>
          </section>
  
          <section className="section">
            <h2>Experience</h2>
            <h3>Software Engineer - Lighting Controls Pte Ltd</h3>
            <p>May 2023 - August 2023</p>
            <p>
              Worked on micro-controllers, developing a library that enables a Raspberry Pi Pico to be
              DMX transceiver, for lighting purposes.
            </p>
          </section>
  
          <section className="section">
            <h2>Education</h2>
            <h3>Masters of Computing - National University of Singapore</h3>
            <p>August 2026 - </p>
            <h3>Diplôme d'Ingénieur - École des Mines de Paris</h3>
            <p>August 2024 - Present</p>
            <h3>Bachelors of Computing - National University of Singapore</h3>
            <p>August 2022 - August 2024</p>
          </section>
  
          <section className="section">
            <h2>Skills</h2>
            <ul>
              <li>Intermediate Knowledge of C++, Rust, Python, Java, Golang</li>
              <li>Fluent Languages: English, Malayalam, Beginner Languages: Hindi, French</li>
              <li>Procrastinating</li>
            </ul>
          </section>
      </div>
    );
}
  


export default App
