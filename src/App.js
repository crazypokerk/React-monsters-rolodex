import './App.css';

// import { Component } from 'react'

import { useState } from 'react'
import { useEffect } from 'react';

import CardList from './conmponents/card-list/card-list.component'
import SearchBox from './conmponents/search-box/search-box.component'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filterMonsters, setFilterMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resonse => resonse.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilterMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilterMonsters(newFilterMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldStr = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldStr)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monster-search-box'
      />

      <CardList monsters={filterMonsters} className="card-list" />
    </div >
  );
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   // [2]
//   onSearchChange = (event) => {
//     // console.log(`event.target.value:${event.target.value}`)
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(resonse => resonse.json())
//       .then(users => this.setState(
//         () => {
//           return { monsters: users }
//         }
//       ))
//   }

//   render() {
//     // [1]
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filterMonsters = monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder='search monsters'
//           className='monster-search-box'
//         />

//         <CardList monsters={filterMonsters} className="card-list" />
//       </div >
//     );
//   }
// }

export default App;
