
import { toast } from "react-toastify";

// create tost 
const createTost = (message, type= 'error') => {
    switch (type) {
        case 'success':
            toast.success(message)
            break;
        case 'info':
            toast.info(message)
            break;
        case 'warning':
            toast.warning(message)
            break;
        case 'error':
            toast.error(message)
            break;
    
        default:
            break;
    }
}

export default createTost;


