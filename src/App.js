import React from 'react';
import './App.css';
import Form from './components/Form';
import Invoice from './components/Invoice';

function App() {

  const [extraRow, setExtraRow]=React.useState([{id:1}]);

  const [total, setTotal]=React.useState(0);

  const [tableData, setTableData]=React.useState([
    {
      id:1,
      date:"",
      vechile:"",
      place:"",
      quantity:"",
      amount:"",
    },
    {
      id:500,
      amount:'',
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
    setTableData(prevArr => {
      const lastArr=prevArr.splice(-1);
      console.log(prevArr)
      console.log(lastArr)
      prevArr.push({id:prevArr.length+1, date:'', vechile:'', place:'', quantity:'', amount:''});
      // const newArr=prevArr.concat(lastArr);
      prevArr.push(...lastArr);
      console.log(prevArr)
      // console.log(newArr)
      return(prevArr);
    })
  }

  // let additionalBal;
  const handleChangeData= function(e){
    let {value, name, id}=e.target;
    console.log(id,name,value)

    // if(+id===500){
    //   console.log(+value)
    //   console.log(total)
    //   // additionalBal=+value;
    //   // generateTotal(_, value);
    //   // setExtraAmount(prevAmount => {
    //   //   return {...prevAmount, [name]:value}
    //   // })
    // }
    
    setTableData(prevData => {
      const newData = prevData.map(row => {
        if(+id===row.id){
          return {...row, [name]:value};
        }
        else
        return row;
        
      });
      
      // const allAmount=newData.map(row => row.amount);
      // allAmount.push
      generateTotal(newData);
      console.log(tableData)
      return newData;
    });

   
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

  const generateTotal = function(newData){
    setTotal(newData.reduce((accumulator, currentValue)=>{return accumulator+(+currentValue.amount)},0)); 

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
