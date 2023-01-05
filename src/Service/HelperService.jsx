import axios from 'axios';

const DBURL = "http://localhost:8081/api/helpers";

class HelperService{
    getAllHelpers(){
        return axios.get(DBURL+"/getall")
    }

    createHelper(helper)
    {
        return axios.post(DBURL+"/create", helper);
    }

    getHelperByID(helperid)
    {
        return axios.get(DBURL + ' /get/ ' + helperid);
    }

    updateHelper(helperid,helper)
    {
        return axios.post(DBURL+"/update/"+helperid , helper);
    }

    deleteHelperById(helperid)
    {
        return axios.get(DBURL+"/delete/"+helperid);
    }
}

export default new HelperService()