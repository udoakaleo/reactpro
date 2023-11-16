import React from "react";

export class Category extends  React.component{
         constructor(props){
            super(props)
            this.state={"message":message}
         }
render(){
      let visitor = "charlie"
    return(<>
             <div class="col-3">catergory1</div>
               <div class="col-3">catergory2</div>
               <div class="col-3">catergory3</div>
               <div class="col-3">catergory4</div>
    </>)
}

}