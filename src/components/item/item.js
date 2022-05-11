import './item.css'


export default function Item(props) {

    const {name, salary, onDelete, onToggleProp, increase, star} = props;

    let className = "list-group-item d-flex justify-content-between"


    if (increase) {
        className += ' increase'
    }

    if (star) {
        className += ' like'
    }

    return (
        <li className={className}>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '1000px', alignItems: 'center'}}>

                <div>
                    <span
                        data-toggle="star"
                        onClick={onToggleProp}
                        className="list-group-item-label">{name}</span>
                </div>

                <div>
                    <input type="text" className="list-group-item-input" defaultValue={salary + '$'}></input>
                    <button
                        data-toggle="increase"
                        onClick={onToggleProp}
                        type="button" className="btn-coin btn-sm">
                        <i className="fa-solid fa-money-bill"></i>
                    </button>

                    <button
                        onClick={onDelete}
                        type="button" className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fa-solid fa-star"></i>
                </div>
            </div>
        </li>
    )
}
