import React from "react";
import './Modal.css';

class Modal extends React.Component {
    constructor(props){
        super(props);
      }

        render() 
     {return(
     <div className="modal-container">
        <div className="modal">
            <form>
                    <div className="form-group">
                    <label htmlFor="page">Page</label>
                    <input name="page" />
                    </div>        
                    <div  className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" />
                    </div>    
                    <div  className="form-group">
                    <label htmlFor="status">Status</label>
                    <select name="status">
                    <option value = "live">live</option>
                    <option value = "draft">draft</option>
                    <option value = "error">error</option>
                    </select>
                 </div>   
                 <button type="submit"  className="btn"> submit </button>         
            </form>
        </div>
     </div>
        
     )
    }  
        
    };


    export default Modal;