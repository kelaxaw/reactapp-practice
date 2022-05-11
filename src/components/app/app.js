import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import ItemAddForm from '../item-add-form/item-add-form'
import ItemsList from '../items-list/items-list'
import SearchPanel from '../search-panel/search-panel'
import nextId from "react-id-generator";
import './app.css'
import {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Alex', salary: 1, increase: true, star: true, id: nextId()},
                {name: 'Bogdan', salary: 100, increase: false, star: false, id: nextId()},
                {name: 'Cypher', salary: 1000, increase: false, star: false, id: nextId()},
                {name: 'Daun', salary: 100000, increase: false, star: false, id: nextId()},
                {name: 'Eva', salary: 135345, increase: false, star: false, id: nextId()},
                {name: 'F', salary: 1345345, increase: false, star: false, id: nextId()},
                {name: 'George', salary: 1768678, increase: false, star: false, id: nextId()},
            ],
            term: '',
            filter: 'all'
        }

    }


    onUpdateSearch = (term) => {
        this.setState({term})
    }

  

    deleteItem = (id) => {

        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {

        const newItem = {
            name,
            salary,
            increase: false,
            star: false,
            id: nextId()
        }

        if (newItem.name.length > 2  || newItem.salary > 0) {
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
        }
    }

    onToggleProp = (id, prop) => {

          this.setState(({data}) => ({
             data: data.map(item => {
                 if (item.id === id) {
                     return {...item, [prop]: !item[prop]}
                     }
                     return item;
             })
          }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'star':
                return items.filter(item => item.star)
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const employees = this.state.data.length
        const increases = this.state.data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increases={increases}/>

                <div className='search-panel'>
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    />
                </div>

                <ItemsList
                    onDelete={this.deleteItem}
                    data={visibleData}
                    onToggleProp={this.onToggleProp}
                />

                <ItemAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App