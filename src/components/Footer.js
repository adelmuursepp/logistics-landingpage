import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Visit us on {' '}
      <a href="https://www.facebook.com/Vegan-Tours-Tallinn-109226621442665/">
        Facebook page
      </a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
