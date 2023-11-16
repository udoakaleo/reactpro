import React from "react"
class forms extends  React.components{
     super(props)
     this.state={"message": ''};
    render(){
        let visitor="charlie"
        return(
        <>
        <form>
            <button
            type='button' className='btn btn-danger' onClick={()=>this.welcome(vistor)}>
                 Click Here
            </button>

            <button
            type='button' className='btn btn-danger' onClick={this.welcome.bind(this,Atiku)}>
                 Click Here
            </button>
        </form>
        
        </>)
    }
    welcome(user){
        alert(user + ',you are welcome')
    }
}
export default Forms