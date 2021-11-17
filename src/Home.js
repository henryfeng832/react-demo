import './Home.css'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='container'>
            <div>
                <Link to="/based-using">React基础使用</Link>
            </div>
            <div>
                <Link to="/advanced-using">React高级使用</Link>
            </div>
            <div>
                <Link to="/hook-using">React Hook使用</Link>
            </div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
    )
}

export default Home
