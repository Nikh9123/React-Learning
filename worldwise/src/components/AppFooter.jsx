import PropTypes from 'prop-types';


AppFooter.propTypes = {
    footerStyle: PropTypes.string.isRequired,
    copyrightStyle: PropTypes.string.isRequired
};

function AppFooter({ footerStyle, copyrightStyle }) {
    return (
        <footer className={footerStyle}>
            <p className={copyrightStyle}>
                &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
            </p>
        </footer>
    )
}

export default AppFooter ;
