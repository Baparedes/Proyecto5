import PropTypes from "prop-types";

const Title = ({title}) => {

    if (!title) {
        throw new Error('El título es obligatorio');
    }

    return (
        <>
            <h1>{title}</h1>
        </>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title