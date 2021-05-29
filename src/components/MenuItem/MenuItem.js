import React from 'react'
import { withRouter } from 'react-router-dom'
import './MenuItem.scss'

const MenuItem = ({title, imageURL, history, link, match}) => {
    return (
        <div className="menu-item" onClick={() => history.push(`${match.url}${link}`)}>
            <div className="menu-bg" style={{backgroundImage: `url(${imageURL}})`}}></div>
            <div className="content">
                <h2 className="title">{title}</h2>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
