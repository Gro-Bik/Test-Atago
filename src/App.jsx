import styles from `./App.module.css`;

export default function App() {
  return (
    <>
      <h1 className="header">MiniStore</h1>
      
      <main>
        <section className= "Atagoboder">
          <h1>Товар 1</h1>
          <p>Описание</p>
          <span>24/09</span>
        </section>
        
        <section className= "Atagoboder">
          <h1>Товар 2</h1>
          <p>Описание</p>
          <span>25/09</span>
        </section>

        <section className= "Atagoboder">
          <h1>Товар 3</h1>
          <p>Описание</p>
          <span>04/09</span>
        </section>
      </main>
    </>
    
  );
}
