import Item from '../item/item'
import './items-list.css'

export default function ItemsList({data, onDelete, onToggleProp}) {

    const elements = data.map(item => {
        const {id, ...itemProps} = item; //деструктуризация
        return (
            <Item key={id}
                  {...itemProps}
            onDelete={() => onDelete(id)}
                  onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            /> //spread оператор разворачивает объект
        )
    })

    return (
        <uL className="app-list list-group">
             {elements}
        </uL>
    )
}