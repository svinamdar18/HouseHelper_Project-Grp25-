import axios from 'axios';

const DBURL = "http://localhost:8081/api/orders";

class OrderService{
    getAllOrders(){
        return axios.get(DBURL+"/getall")
    }

    createOrder(order)
    {
        return axios.post(DBURL+"/create", order);
    }

    getOrderbyHelperID(orderid)
    {
        return axios.get(DBURL +'/helper/'+orderid+'/orders ');
        
    }

    getOrderbyCustomerID(orderid)
    {
        return axios.get(DBURL +'/customer/'+orderid+'/orders ');
        
    }

    updateOrder(orderid,order)
    {
        return axios.post(DBURL+"/update/"+orderid , order);
    }

    deleteOrderById(orderid)
    {
        return axios.get(DBURL+"/delete/"+orderid);
    }
}

export default new OrderService()