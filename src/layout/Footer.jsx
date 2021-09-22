function Footer() {
    return(
        <footer className="page-footer purple darken-4">            
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
}

export {Footer}