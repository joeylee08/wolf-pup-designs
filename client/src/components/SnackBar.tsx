type SnackBarProps = {
	message: string;
    color: string;
};

const SnackBar = ({ message, color}: SnackBarProps) => {
    return (
        <div className={`snackBar ${color || ''}`} role='status'>
            {/* <p className={color || ''}>{message}</p> */}
        </div>
    )
}

export default SnackBar