import React from 'react';
import './App.css';
import Form from './components/Form';
import Invoice from './components/Invoice';

function App() {

  const [extraRow, setExtraRow]=React.useState([{id:1}]);

  const [extraAmount, setExtraAmount]= React.useState({id:500, amount:0})
  console.log(extraAmount)
  
  const [total, setTotal]=React.useState(0);

  const [tableData, setTableData]=React.useState([
    {
      id:1,
      date:"",
      vechile:"",
      place:"",
      quantity:"",
      amount:"",
    }
  ])

  const [invoiceData, setInvoiceData]=React.useState([{
    ownerDetails:'',
    reciverDetails:'',
    formInvoiceNum:'',
    formInvoiceDate:'',
    formDueDate:''
  }])

  const handleAddRow=function(e){
    console.log(e);
    const {id}=e.target;
    setExtraRow(prevArr=>{return (+id===prevArr.length ? [...prevArr,{id:prevArr.length+1}] : prevArr)})
    setTableData(prevArr => {return ([...prevArr, {id:prevArr.length+1, date:'', place:'', quantity:'', amount:''}])})
  }


  const handleChangeData= function(e){
    let {value, name, id}=e.target;
    console.log(id,name,value)
    
    if(+id===500){
      console.log(+value)
      console.log(total)
      // generateTotal('', value);
      setExtraAmount(prevAmount => {
        return {...prevAmount, [name]:value}
      })
    }
    else{
      setTableData(prevData => {
        const newData = prevData.map(row => {
          if(+id===row.id){
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
  }
  
  function handleChangeDetails(e){
    const {name, value}=e.target;
    console.log(name, value);
    setInvoiceData(prevdata => ({...prevdata, [name]:value}))
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log('submitted')
  }

  const generateTotal = function(newData, labourBal){
    setTotal(newData.reduce((accumulator, currentValue)=>{return accumulator+(+currentValue.amount)},0)); 
    // setTotal(prevTotal => (prevTotal + (+labourBal)));
   
  }

  return (
    <>
      <div className="App">
        <Form handleAddRow={handleAddRow} extraRow={extraRow} handleChangeData={handleChangeData} handleSubmit={handleSubmit} total={total} handleChangeDetails={handleChangeDetails} />
        <Invoice data={tableData} total={total} invoiceData={invoiceData} />
      </div>
      
    </>
  );
}

export default App;
