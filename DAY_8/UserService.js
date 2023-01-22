import axios from "axios"

export default
{
     fetchproducts({success, fail,data})
     {
       axios.get(`https://www.blibli.com/backend/search/products?searchTerm=${data}&start=0&itemPerPage=24`).then(
               (data) => {
                //   console.log(res);
                //   this.onSearchSuccess(res.data.data.products);
                //  this.filter_list=res.data.data.products
                 
                success(data)
                  
              }
          ).catch((error) => {
            //   function(res) {
            //       console.log(res);
            fail(error)
              }
  
          )
    }
}
