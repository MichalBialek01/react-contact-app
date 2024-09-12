import {toast} from 'react-toastify';

const toastConfiguration = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
}

export function toastInfo(infoMessage){
    toast.info(infoMessage,toastConfiguration);
}
export function toastSuccess(successMessage){
    toast.success(successMessage,toastConfiguration);
}
export function toastWarning(warningMessage){
    toast.warn(warningMessage,toastConfiguration);
}
export function toastError(errorMessage){
    toast.error(errorMessage,toastConfiguration);
}

