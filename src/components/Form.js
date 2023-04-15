import React from 'react';
import '../App.css';
import {useReactToPrint} from 'react-to-print'


export default function Form(){

  const componentPdf=React.useRef();

  const [tableData, setTableData]=React.useState([{
    id:1,
    date:"",
    vechile:"",
    place:"",
    quantity:"",
    amount:"",
  }, {
    id:500,
    amount:'',
  }])

  const [total, setTotal]=React.useState(0);

  const [extraRow, setExtraRow]=React.useState([{id:1}]);

  const inputStyle={
            border:'none',
            outline:'none',
            width:'95%',
            'text-align':'center',
  }

  const handleAddRow=function(e){
    console.log(e);
    const {id}=e.target;
    setExtraRow(prevArr=>{return (+id===prevArr.length ? [...prevArr,{id:prevArr.length+1}] : prevArr)})
    setTableData(prevArr => {return ([...prevArr, {id:prevArr.length+1, date:'', place:'', quantity:'', amount:''}])})
  }

  const handleChange= function(e){
    let {value, name, id}=e.target;
    console.log(id,name,value)
    
    setTableData(prevData => {
      const newData = prevData.map(row => {
        if(+id===row.id){
          // name= name==='quantity' ? +value : value;
          return {...row, [name]:value};
        }
        else
          return row;

      });
      generateTotal(newData);
      console.log(tableData)
      return newData;
    });

  }


  const generatePdf= useReactToPrint({
    content: () => componentPdf.current,
    documentTitle:"Bill",
  })

  const generateTotal = function(newData){
    setTotal(newData.reduce((accumulator, currentValue)=>{return accumulator+(+currentValue.amount)},0));
  }


  return (
    <>
    <div className='container' ref={componentPdf}>
      {/* <form onSubmit={handleSubmit}> */}
        <table  width="80%" align='center'>
          <tr className='heading'>
            <th height="45">DATE</th>
            <th>VEHICLE</th>
            <th width="40%">PLACE TO PLACE</th>
            <th>QUANTITY</th>
            <th>AMOUNT</th>
          </tr>
          {extraRow.map(row=>(
            <tr id="1">
              <td height="30"><input name="date"  type ="date" style={inputStyle} id={row.id} onClick={handleAddRow} onChange={handleChange}></input></td>
              <td><input name="vechile" type="number" style={inputStyle} id={row.id} onChange={handleChange}></input></td>
              <td><input name="place" type ="text" style={inputStyle} id={row.id} onChange={handleChange}></input></td>
              <td><input name="quantity" type ="text" style={inputStyle} id={row.id} onChange={handleChange}></input></td>
              <td><input name="amount" type='number' style={inputStyle} id={row.id} onChange={handleChange}></input></td>
            </tr>
        ))}

          <tr>
            <th colSpan="4" height="30">OLD LAB BALANCE: </th> 
            <th><input type ="number" name="amount" style={inputStyle} id='500' onChange={handleChange}></input></th>
          </tr>
          <tr>
            <th colSpan="4" height="45">GRAND TOTAL:</th>
            <th>{total}</th>
          </tr>
        
        </table>
      {/* </form> */}
      
    </div>
    <div className='btn'>
      <button onClick={generatePdf}>DOWNLOAD</button>
      </div>
      </>
  )

  
}


