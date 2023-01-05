import * as Yup from 'yup';

export const custregval = Yup.object({
        customerName:Yup.string().min(2).max(30).required("Please enter your name"),
        dob:Yup.date().required("Please enter your date of birth"),
        customerContact:Yup.string().required("Please enter your mobile number"),
        customerAddress:Yup.string().required("Please enter your address"),
        customerEmailID:Yup.string().email().required("Please enter your EmailID"),
        customerGender:Yup.string().required("Please select a gender"),
        ch:Yup.string().required("Please check this box")
})