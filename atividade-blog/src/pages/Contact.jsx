import Header from '../components/Header'

function Contact() {
  return (
    <>
      <Header />

      <div className="container">
        <h1>Contato</h1>

        <form>
          <input type="text" placeholder="Nome" />

          <input type="email" placeholder="Email" />

          <textarea placeholder="Mensagem"></textarea>

          <button type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact