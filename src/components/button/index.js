import './button.scss';
import PropTypes from 'prop-types'

function Button(props) {
    return (  
        <button
            className={`btn ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    );
}

export const OutlineButton = props => {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;