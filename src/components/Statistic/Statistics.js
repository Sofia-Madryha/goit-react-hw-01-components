import "./Statistics.css"

export const Statistics = ({stats, title = "Upload stats"})=>{
    return (
        <div className="statisticWrapper">
            <h2>{title}</h2>
            <ul className="statisticList" >
                {stats.map(stat => (<li key={stat.id}><p>{stat.label}</p> <p>{stat.percentage}%</p></li>))}
            </ul>
        </div>
    )
}