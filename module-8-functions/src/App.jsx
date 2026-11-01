import React from 'react'

const App = () => {

  const btnClicked = () => {
    console.log('button is clicked');
  }

  function mouseEnter() {
    console.log('Mouse Entered!');
  }

  function inputChanging(elem) {
    console.log(elem.target.value);

  }

  function pageScrolling(elem) {
    if(elem>0){
      console.log('Seedha scroll ho rha');
      
    }else{
      console.log('ulta ho gyaa');
      
    }
  }

  return (
    <div>
      <h1>Hello Abhii</h1>
      <br />
      <br />
      <br />

      <div onWheel={(elem)=>{
        pageScrolling(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>


      <span>Life Partner name:- </span>
      <input className='mt-10 p-5 ' onChange={inputChanging} type="text" placeholder='Enter your wify name...' />

      <button onClick={btnClicked}>Submit</button>
      <br/>
      <button onClick={btnClicked} onMouseEnter={mouseEnter}> Next Page </button>
      <br/>
      <br/>
      <button onDoubleClick={function(){
        console.log('Hello Abhii! nice to meet you');

      }}>Show me!</button>

    </div>
  )
}

export default App
