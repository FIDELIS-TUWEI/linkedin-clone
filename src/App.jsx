import { useState } from 'react'
import './App.css'

function App() {

  // useState
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  return (
    <main className="App">
      <h1>$400 <span>.00</span></h1>

      <form>
        <div className='basic'>
          <input type="text" 
              value={name}
            onChange={e => setName(e.target.value)}
            placeholder={'+200 new samsung tv'} 
          />
          <input type="datetime-local" 
            value={datetime} 
            onChange={e => setDatetime(e.target.value)}
          />
        </div>

        <div className='description'>
          <input type="text" 
            placeholder={'description'}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <button type='submit'>Add new transaction</button>

        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">New Samsung Tv</div>
              <div className="description">It was time for new Tv</div>
            </div>
            <div className="right">
              <div className="price red">-$500</div>
              <div className="datetime">2022-12-18 15:45</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">Gig Job new website</div>
              <div className="description">It was time for new Tv</div>
            </div>
            <div className="right">
              <div className="price green">+$400</div>
              <div className="datetime">2022-12-18 15:45</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">Iphone</div>
              <div className="description">It was time for new Tv</div>
            </div>
            <div className="right">
              <div className="price red">-$900</div>
              <div className="datetime">2022-12-18 15:45</div>
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}

export default App
