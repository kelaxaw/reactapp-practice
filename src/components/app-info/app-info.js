import './app-info.css'

export default function AppInfo({employees, increases}) {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании V</h1>
            <h2>Всего сотрудников: {employees}</h2>
            <h2>Премию получат: {increases}</h2>
        </div>
    )
}