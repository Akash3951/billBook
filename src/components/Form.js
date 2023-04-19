import React from 'react';
import '../App.css';


export default function Form(props){

  


  const inputStyle={
            border:'none',
            outline:'none',
            width:'95%',
            'text-align':'center',
  }

  
  
  return (
    <>
    <div className='form-container'>
      <form onSubmit={props.handleSubmit}>
        <div className='form-heading'>
          <div className='from-details'>
              <legend className='from'>From : </legend>
              <textarea name='ownerDetails' className='text-area' onChange={props.handleChangeDetails} rows='6' columns='100' ></textarea>
          </div>
          <div className='billTo-details'>
              <legend className='bill-to'>Bill To : </legend>
              <textarea name='reciverDetails' className='text-area' onChange={props.handleChangeDetails} rows='6' columns='100' ></textarea>
          </div>
          <div className='date-details'>
            <div className='form-invoice-num'>
              <label for='formInvoiceNum'>Invoice Number :</label>
              <input type='number' name='formInvoiceNum' id='formInvoiceNum' onChange={props.handleChangeDetails}></input>
            </div>
            <div className='form-invoice-date'>
              <label for='formInvoiceDate'>Invoice Date :</label>
              <input type='date' name='formInvoiceDate' id='formInvoiceDate' onChange={props.handleChangeDetails}></input>
            </div>
            <div className='form-due-date'>
              <label for='formDueDate'>Due Date :</label>
              <input type='date' name='formDueDate' id='formDueDate'  onChange={props.handleChangeDetails}></input>
            </div>
          </div>
        </div>
      <div className='form-body'>
        <table className='form-table'>
          <tr className='heading'>
            <th height="45">DATE</th>
            <th>VEHICLE</th>
            <th width="40%">PLACE TO PLACE</th>
            <th>QUANTITY</th>
            <th>AMOUNT</th>
          </tr>
          {props.extraRow.map(row=>(
            <tr>
              <td height="30"><input name="date"  type ="date" style={inputStyle} id={row.id} onClick={props.handleAddRow} onChange={props.handleChangeData}></input></td>
              <td><input name="vechile" type="number" style={inputStyle} id={row.id} onChange={props.handleChangeData}></input></td>
              <td><input name="place" type ="text" style={inputStyle} id={row.id} onChange={props.handleChangeData}></input></td>
              <td><input name="quantity" type ="text" style={inputStyle} id={row.id} onChange={props.handleChangeData}></input></td>
              <td><input name="amount" type='number' style={inputStyle} id={row.id} onChange={props.handleChangeData}></input></td>
            </tr>
        ))}

          <tr>
            <th colSpan="4" height="30">OLD LAB BALANCE: </th> 
            <th><input type ="number" name="amount" style={inputStyle} id='500' onChange={props.handleChangeData}></input></th>
          </tr>
          <tr>
            <th colSpan="4" height="45">GRAND TOTAL:</th>
            <th>{props.total}</th>
          </tr>
        
        </table>
      </div>
    </form>
      
    </div>
    
      </>
  )  
}


