import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const array1 = ["one", "two", "three", "four"]
const subject = ["Kaitlyn", "Joanne", "Cathy"];

var subject_array = ["Kaitlyn", "Cathy", "Joanne", "coffee", "boba tea", "chocolate", "pizza", "dumpling", "noodle"]
var verb_array = ["enjoys", "tastes", "plays", "smells", "wants", "owns"]
// var subject_array = ["Kaitlyn"]
// var verb_array = ["tastes"]

function App() {

  function filterArr(arr, filterElem) {
    console.log(arr)
    console.log(filterElem)
    let result = []  //?
    if (arr === null || arr.length === 0 || filterElem === null || filterElem === undefined)  {
      return result
    }
  
   // Need a for loop to traverse arr, and put right element into result
    for (let i = 0; i < arr.length; i++){ 
      const elem = arr[i] //起始值為0, i是索引值
      if (elem !== filterElem){
        result.push(elem)
      }
    }

   return result
}


  const array = subject[0]
  Math.floor((Math.random()*2)+1);

  const array_name  = subject_array[Math.floor(Math.random() * subject_array.length)];
  const array_verb  = verb_array[Math.floor(Math.random() * verb_array.length)];
  const array_obj  = subject_array[Math.floor(Math.random() * subject_array.length)];

  //additemtext  
  const [itemText, setItemText] = useState("")
  const handleAddItem = () => {
    setSub([...sub, itemText])
    setItemText("")  
  }
  //addverbtext
  const [verbText, setVerbText] = useState("")
  const handleAddVerb = () => {
    setVer([...ver, verbText])
    setVerbText("")
  }

  //check 
  const [checked, setChecked] = useState(false);

  //console.log("here")
  //[pair] value, setValue 
  //change value, update component 
  const [name, setName] = useState(array_name);
  const [verb, setVerb] = useState(array_verb);
  const [obj, setObj] = useState(array_obj);
  
  // initial value 
  const [sentences, setSentences] = useState([`${name} ${verb} ${obj}`]);
  var targetOfGreeting = "welcome to my website";

  // initial value 
  const [sub, setSub] = useState(subject_array);
  const [ver, setVer] = useState(verb_array);
  
  //filtersubarray,  filterobj, filter掉的詞是sub
  const newSub = filterArr(sub, obj)


  const handleClick = () => {
    const newSub = filterArr(sub, obj) 
    const newVerb = filterArr(ver, verb)

    console.log(newSub)
    console.log(newVerb)

       //先把用過的詞從array拿走 clear array that contains enjoy
    if (newVerb.length === 0 || newSub.length === 0 ) {
      if (checked){
        setSub(newSub)
        setVer(newVerb)
      return
      }   
    }
    // console.log(newVerb)
    // console.log(newSub)
    // const aVerb  = newVerb[Math.floor(Math.random() * newVerb.length)]    
    // const aSub  = newSub[Math.floor(Math.random() * newSub.length)]
    if (ver.length === 0 || sub.length === 0 ) {
      return
    }
    let aVerb  = ver[Math.floor(Math.random() * ver.length)]
    let aSub  = sub[Math.floor(Math.random() * sub.length)]
    
    if (checked) {
      aVerb  = newVerb[Math.floor(Math.random() * newVerb.length)]
      aSub  = newSub[Math.floor(Math.random() * newSub.length)]
    }
    else {
    }

    //把sentences值展開 把sentence值push加進sentences array.push
    const sentence = `${obj} ${aVerb} ${aSub}`
    setSentences([...sentences, sentence])
    
    //call update 少詞
    if (checked) {
      setSub(newSub)
      setVer(newVerb)
    }
    //(x => x != obj) (x => x != verb)
    // Set name to previous obj
    setName(obj)
    // Set verb to a random verb in verb_array
    setVerb(aVerb)
    // Set obj to a random obj in subject_array
    setObj(aSub)
     
  //   if (remove verb == 0) {
  //     return false;
  // } else {
  //     return true;
  // }
  }
  return (
    <div className="App" style={{margin: '50px', backgroundColor: '#cfe8fc'}}>
      <div>
       Hello there, { targetOfGreeting }!
      </div>
      {/* <ul>
        <li>Kaitlyn</li>
        <li>Cathy</li>
        <li>Joanne</li>
      </ul>
      <ol>
      {subject_array.map((person, i) => (
        <li key={i}>{person} </li>
      ))}
      </ol>
       */}
      <ol>
      <p>List of Items: {sub.join(" ")} </p>
      <p>Verbs to choose from: {ver.join(" ")} </p>
      </ol>
      <div style={{margin: '10px'}}>    
      <input type="text" value={itemText} onChange={(e) => {setItemText(e.target.value)}} />
      <button onClick={handleAddItem} >Add an item</button>          
      </div>

      <div>        
      <input type="text" value={verbText} onChange={(e) => {setVerbText(e.target.value)}} />
      <button onClick={handleAddVerb} >Add an verb</button>          
      </div>      
      {/* <div>
      <p>Insert Your Own Item: </p>
      <input type="text"></input><button onClick={handleAddItem}>Add Item</button>
      </div>
      <div>
      <p>Insert Your Own Verb: </p>
      <input type="text"></input><button onClick={handleAddVerb}>Add Verb</button>
      </div> */}
      {/* <div>             
      <input type="checkbox" checked={checked} onChange={() => {setChecked(!checked)}} />
      <span><span style={{color:'blue', fontWeight:'bold'}}>Remove verb and object</span> that are used</span>
      </div> */}
      <div>             
      <Checkbox color= "Primary" type="checkbox" checked={checked} onChange={() => {setChecked(!checked)}} />
      <span><span style={{color:'blue', fontWeight:'bold'}}>Remove verb and object</span> that are used</span>
      </div>
      <p>Click to see the solitaire</p>
      <ol>
      {sentences.map((sentence, i) => (
        <p key={i}> {sentence} </p>
      ))}
      </ol>
      <div>{sub.length === 0 || ver.length === 0 ? <p>Out of items or verbs...</p > : null}</div>
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Click me
      </Button>
    
      
    </div>
      
{/*         
        <p>{}</p> */}
      {/* COMMAND KC COMMAD KU */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
