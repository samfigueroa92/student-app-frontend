import "./Error.css";

const Error = ({error}) => {
    return (
        <div className="Error">
            Error: {error}
        </div>
    );
};

export default Error;