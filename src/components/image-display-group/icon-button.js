import './icon-button.css'
import icon from '../../assets/double-prong - 1.jpeg'

function IconButton(props){
    const assets = '../../assets/'
    let name = props.name
    let img = props.img
    // const onClick event = ?
    img = icon
    console.log(typeof icon)

    return (
        <div>
            <img src={img} className={name} alt="feature-icon" />
            <p>{name}</p>
        </div>
    )
}

export {IconButton}

