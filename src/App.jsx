import './App.css'

function App() {
  return (
    <div className="container">
      {/* Header Section */}
      <header>
        <h1>Personal Website</h1>
        <h2>Hi, I'm BO CHING, WU (r13921a24).</h2>
      </header>

      <hr />

      {/* Introduction Section */}
      <section className="intro-card">
        <h3>About Me</h3>
        <p>
          Hello! My name is BO CHING, and I am from Taichung. 
          Currently, I am a master student majoring in EE at National Taiwan University. 
          My interests include music and baseball, which help me stay relaxed and hyped. 
          I am very excited to learn cybersecurity skills in this course!
          My goal is to packed myself with cybersecurity experience that can solve real-world problems. 
          I look forward to learn more and improving my cybersecurity abilities!
        </p>
      </section>

      {/* Interests Section */}
      <section className="details">
        <h3>Interests & Goals</h3>
        <ul>
          <li>Favorite Tools: VS Code, Gemini(free but I'm more of claude recently)</li>
          <li>Skills to Learn: React, Tailwind CSS, Cybersecurity</li>
          <li>Future Goals: GRADUATE!</li>
        </ul>
      </section>
    </div>
  )
}

export default App