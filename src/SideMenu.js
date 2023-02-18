// SideMenu.js
import React, { Component } from 'react'

const sideMenu = {
  position: 'fixed',
  width: '100%',
  height: 700,
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: 25,
}


const sideMenuOverlay = {
  position: 'absolute',
  right: 10,
  display: 'block',
  height: '100%',
  width: '30%',
  backgroundColor: '#abdbe3',
  padding: 10,
}

const title = "Museum"
const description = "nice"
const suggestions = "make it better duh"

class SideMenu extends Component {
  render() {
    return (
      // <h1> HELELKRGNSERLKJGN</h1>
      <div style={sideMenu}>
        <div style={sideMenuOverlay}>
          <h1>{title}</h1>
          <h2>{description}</h2>
          <h3>insert google streetview</h3>
          {/* insert street view here */}
          <p>{suggestions}</p>

        </div>
      </div>
    )
  }
}

export default SideMenu

{/* <aside className="side-menu">
        <div className="side-menu__overlay" />
        <div className="side-menu__content">Side bar</div>
      </aside> */}