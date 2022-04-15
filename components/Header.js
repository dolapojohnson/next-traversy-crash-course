import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return(
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDevNews</span>
                <p className={headerStyles.description}>
                    Stay in touch with us for the latest web dev news
                </p>
            </h1>
        </div>
    )
}


export default Header; 