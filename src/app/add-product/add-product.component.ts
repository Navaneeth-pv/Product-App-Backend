import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

 productCode=""
 productName=""
 manDate=""
 expDate=""
 brand=""
 price=""
 sellerName=""
 distrinutorName=""

 constructor(private api :ApiService){}
 readValues=()=>
 {
  let data:any={"productCode":this.productCode,"productName":this.productName,"manDate":this.manDate,"expDate":this.expDate,"brand":this.brand,"price":this.price,"sellerName":this.sellerName,"distrinutorName":this.distrinutorName}

  console.log(data)

  this.api.addProducts(data).subscribe(
    (response:any)=>{
      console.log(response)

      if (response.status=="success") {
        alert("Course Added Successfully")

        this.productCode=""
        this.productName=""
        this.manDate=""
        this.expDate=""
        this.brand=""
        this.price=""
        this.sellerName=""
        this.distrinutorName=""
        
      } else {
        alert("Something went Wrong")
        
      }
    }
  )
 



}
}
