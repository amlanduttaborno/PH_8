import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="footer-left">
          <img src="/assets/logo.png" alt="logo" className="footer-logo" />
        </div>
        <div className="footer-right">
          <div className="social-links" aria-hidden>
            <a href="#" className="social" aria-label="twitter" title="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.63.28-1.3.48-2 .57.72-.43 1.27-1.1 1.53-1.9-.67.4-1.4.7-2.18.86A3.6 3.6 0 0 0 12.6 8.4c0 .28.03.55.1.8-3-.15-5.66-1.6-7.45-3.8-.32.55-.5 1.2-.5 1.9 0 1.3.65 2.45 1.64 3.12-.6-.02-1.16-.18-1.65-.45v.04c0 1.86 1.32 3.4 3.07 3.75-.32.08-.65.12-1 .12-.24 0-.48-.02-.71-.07.47 1.46 1.84 2.53 3.46 2.56A7.24 7.24 0 0 1 3 19.5c.43.25.95.39 1.5.39 6.02 0 9.32-4.98 9.32-9.3v-.42c.64-.46 1.19-1.03 1.63-1.68-.59.26-1.22.43-1.87.52z" fill="#fff"/></svg>
            </a>
            <a href="#" className="social" aria-label="linkedin" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zm.02 6.5H2v11h3V10zM9 10h2.88v1.5h.04c.4-.76 1.37-1.5 2.82-1.5C17.8 10 19 11.5 19 14.3V21h-3v-6.1c0-1.56-.56-2.6-1.95-2.6-1.06 0-1.7.72-1.98 1.41-.1.25-.12.6-.12.95V21H9v-11z" fill="#fff"/></svg>
            </a>
            <a href="#" className="social" aria-label="facebook" title="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.02H8.1v-2.9h2.34V9.41c0-2.32 1.38-3.6 3.5-3.6.99 0 2.03.18 2.03.18v2.23H15.6c-1.19 0-1.56.75-1.56 1.52v1.83h2.66l-.43 2.9h-2.23V22c4.78-.8 8.44-4.94 8.44-9.93z" fill="#fff"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">Copyright © {new Date().getFullYear()} - All right reserved</div>
        </div>
      </div>
    </footer>
  )
}
