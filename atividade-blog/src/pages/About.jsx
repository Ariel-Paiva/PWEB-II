import Header from '../components/Header'

function About() {
  return (
    <>
      <Header />

      <div className="container">
        <h1>Sobre</h1>

        <div className="post-card">
          <p>
            Este é um blog pessoal criado com React.
            Os dados são fornecidos pela API JSONPlaceholder.
          </p>
        </div>
      </div>
    </>
  )
}

export default About