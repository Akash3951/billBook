import React from "react";
import '../App.css';
import {useReactToPrint} from 'react-to-print'



export default function GenerateInvoice(props){

  const inputStyle={
    border:'none',
    outline:'none',
    'text-align':'center',
}

  console.log(props.data)
  const componentPdf=React.useRef();

  const generatePdf= useReactToPrint({
    content: () => componentPdf.current,
    documentTitle:"Bill",
  })
 
  return(
    <>

    <button className='btn' onClick={generatePdf}>DOWNLOAD</button>

    <div className='invoice-container' ref={componentPdf}>
      <div className="contact">
        <label for='contact-num'>CONTACT : </label>
        <p id="contact-num"> 9150451606 <br/> 7358144335 <br/> 9092688201</p>
      </div>
      <h1 className="invoice-heading" style={{fontSize:'2.6rem'}}>INVOICE</h1>
      <div className="invoice-details">
          <div className='from-details'>
            <legend className='from'>From : </legend>
            <p className="invoice-from-data" >{props.invoiceData.ownerDetails}</p>
          </div>
          <div className='billTo-details'>
            <legend className='bill-to'>Bill To : </legend>
            <p className="invoice-billTo-data">{props.invoiceData.reciverDetails}</p>
          </div>
          <div className='date-details'>
            <div className='form-invoice-num'>
              <label for='formInvoiceNum'>Invoice Number :  {props.invoiceData.formInvoiceNum}</label>
            </div>
            <div className='form-invoice-date'>
              <label for='invoice-date'>Invoice Date :  {props.invoiceData.formInvoiceDate}</label>
            </div>
            <div className='form-due-date'>
              <label for='due-date' >Due Date :  {props.invoiceData.formDueDate}</label>
            </div>
          </div>
        
      </div>
      <div className="form-body">
        <table  className="invoice-table">
          <thead>
            <tr>
              <td colspan="5"><hr style={{ borderTop: '2px solid black', }} /></td>
            </tr>
            <tr className='invoice-heading'>
              <th height='30'>DATE</th>
              <th>VEHICLE</th>
              <th>PLACE TO PLACE</th>
              <th>QUANTITY</th>
              <th>AMOUNT</th>
            </tr>
            <tr>
              <td colspan="5"><hr style={{ borderTop: '2px solid black' }} /></td>
            </tr>
          </thead>
          <tbody>
            {props.data.map(row => (           
              <tr>
                <td style={inputStyle}>{row.date}</td>
                <td style={inputStyle}>{row.vechile}</td>
                <td style={inputStyle}>{row.place}</td>
                <td style={inputStyle}>{row.quantity}</td>
                <td style={inputStyle}>{row.amount}</td>
              </tr>
            ))}
            <tr>
              <td colspan="5"><hr style={{ borderTop: '2px solid black', }} /></td>
            </tr>
            <tr>
              <th colSpan="4" height="30">GRAND TOTAL:</th>
              <th>{props.total}</th>
            </tr>
            <tr>
              <td colspan="5"><hr style={{ borderTop: '2px solid black', }} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    </>
  )
}