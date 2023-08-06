import React from 'react'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
import './table.css'

class Table1 extends React.Component {
    constructor(props){
        super(props);
      }
        render()
    {
    return (
    <div className='table-wrapper'>
        <table className='table'>
            <thead>
                <tr>
                <th>page</th>
                <th className='expand'>description</th>
                <th>status</th>
                <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr> 
                    <td>home</td>
                    <td>this is the main page</td>
                    <td><span className='label label-live'>Live</span></td>
                    <td><span >
                    <BsFillTrashFill className='delete-bth' />
                    <BsFillPencilFill />
                    </span></td>
                </tr>
                <tr> 
                    <td>Page 2</td>
                    <td>this is the second page</td>
                    <td><span className='label label-draft'>draft</span></td>
                    <td><span className='actions'>
                    <BsFillTrashFill className='delete-bth' />
                    <BsFillPencilFill />
                    </span></td>
                </tr>
                <tr> 
                    <td>Page 3</td>
                    <td>this is the 3rd page</td>
                    <td><span className='label label-error'>draft</span></td>
                    <td><span className='actions'>
                    <BsFillTrashFill className='delete-bth' />
                    <BsFillPencilFill />
                    </span></td>
                </tr>
            </tbody>
        </table>
        </div>
    )
    }
}



export default Table1
