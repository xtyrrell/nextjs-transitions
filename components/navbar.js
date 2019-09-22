import Link from 'next/link'

const NavBar = () => {
    /*
     * Added this to toggle the is-active class, to allow the hamburger
     * menu to open and close.
     * See:
     * 
     * https://bulma.io/documentation/components/navbar/#navbar-menu
     * https://github.com/jgthms/bulma/issues/856
     */
    const toggleStyles = (event) => {
        document.querySelector('#burger').classList.toggle('is-active')
        document.querySelector('#navbarmenu').classList.toggle('is-active')
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link prefetch href="/">
                    <a className="navbar-item">
                        <img src="https://placekitten.com/100/100" />
                    </a>
                </Link>
                <a id="burger" onClick={toggleStyles}
                    role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarmenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarmenu" className="navbar-menu">
                <div className="navbar-start">
                    <Link prefetch href="/">
                        <a className="navbar-item">Home</a>
                    </Link>
                    <Link prefetch href="/elsewhere">
                        <a className="navbar-item">Elsewhere</a>
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a onClick={() => alert('You clicked the button!')} className="button is-primary">Click</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
