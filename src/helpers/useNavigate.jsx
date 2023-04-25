import { useNavigate } from 'react-router-dom';


// useNavigate
let instance = useNavigate();

export const navigate = (param) => {
    instance(param)
}
    