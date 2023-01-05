import axios from 'axios';

const DBURL = "http://localhost:8081/api/customers";

class CustomerService{
    getAllCustomers(){
        return axios.get(DBURL+"/getall")
    }

    createCustomer(customer)
    {
        return axios.post(DBURL+"/create", customer);
    }

    getCustomerByID(customerid)
    {
        return axios.get(DBURL + ' /get/ ' + customerid);
    }

    updateCustomer(customerid,customer)
    {
        return axios.post(DBURL+"/update/"+customerid , customer);
    }

    deleteCustomerById(customerid)
    {
        return axios.get(DBURL+"/delete/"+customerid);
    }
}

export default new CustomerService()