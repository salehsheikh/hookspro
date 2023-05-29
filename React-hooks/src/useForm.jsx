import { useState } from 'react';
export const useForm=initialValues=>{
    const [values,setValue]=useState(initialValues);
    return[values,
    e=>{
        setValue({
            ...values,
            [e.target.name]:e.target.value
        });
    }
];

}
