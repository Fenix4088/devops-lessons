import { Link, Route, Routes } from 'react-router'
import './App.css'

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Welcome to the SPA demo.</p>
    </section>
  )
}

function About() {
  return (
    <section>
      <h1>About</h1>
      <p>This is a tiny example app for the Docker lesson.</p>
      <p>Base URL: {import.meta.env.VITE_BASE_URL}</p>
      <p>Name: {import.meta.env.VITE_NAME}</p>
    </section>
  )
}

function App() {
  return (
    <>
      <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
