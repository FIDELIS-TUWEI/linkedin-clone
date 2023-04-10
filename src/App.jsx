import './App.css'

function App() {

  return (
    <main className="App">
      <h1>$400 <span>.00</span></h1>

      <form>
        <div className='basic'>
          <input type="text" placeholder={'+200 new samsung tv'} />
          <input type="datetime-local"/>
        </div>

        <div className='description'>
          <input type="text" placeholder={'description'} />
        </div>

        <button type='submit'>Add new transaction</button>

        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">New Samsung Tv</div>
              <div className="description">It was time for new Tv</div>
            </div>
            <div className="right">
              <div className="price">$500</div>
              <div className="datetime">2022-12-18 15:45</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">New Samsung Tv</div>
              <div className="description">It was time for new Tv</div>
            </div>
            <div className="right">
              <div className="price">$500</div>
              <div className="datetime">2022-12-18 15:45</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">New Samsung Tv</div>
              <div className="description">It was time for new Tv</div>
            </div>
            <div className="right">
              <div className="price">$500</div>
              <div className="datetime">2022-12-18 15:45</div>
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}

export default App
