import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const SUBJECT_ARRAY = ["Kaitlyn", "Cathy", "Joanne", "coffee", "boba tea", "chocolate", "pizza", "dumpling", "noodle"]
const VERB_ARRAY = ["enjoys", "tastes", "plays", "likes", "wants", "owns"]
const TARGET_OF_GREETIING = "welcome to my website";

function App() {

  const array_name  = SUBJECT_ARRAY[Math.floor(Math.random() * SUBJECT_ARRAY.length)];
  const array_verb  = VERB_ARRAY[Math.floor(Math.random() * VERB_ARRAY.length)];
  const array_obj  = SUBJECT_ARRAY[Math.floor(Math.random() * SUBJECT_ARRAY.length)];
  //[pair] value, setValue 
  const [itemText, setItemText] = useState("")
  const [verbText, setVerbText] = useState("")

  const [checked, setChecked] = useState(false);
  const [name, setName] = useState(array_name);
  const [verb, setVerb] = useState(array_verb);
  const [obj, setObj] = useState(array_obj);

  const [sentences, setSentences] = useState([`${name} ${verb} ${obj}`]); 
  const [sub, setSub] = useState(SUBJECT_ARRAY);
  const [ver, setVer] = useState(VERB_ARRAY);

  // Filter a array, traverse through arr
  function filterArr(arr, filterElem) {
    let result = [] 
    if (arr === null || arr.length === 0 || filterElem === null || filterElem === undefined)  {
      return result 
    }
      //initial value 0, i is index
    for (let i = 0; i < arr.length; i++){ 
      const elem = arr[i] 

      if (elem !== filterElem){
        result.push(elem)
      }
    }
   return result
}

  const handleAddItem = () => {
    setSub([...sub, itemText])
    setItemText("")  
  }

  const handleAddVerb = () => {
    setVer([...ver, verbText])
    setVerbText("")
  }

  const handleClick = () => {
    const newSub = filterArr(sub, obj) 
    const newVerb = filterArr(ver, verb)

    //clear array that are used
    if (newVerb.length === 0 || newSub.length === 0 ) {
      if (checked){
        setSub(newSub)
        setVer(newVerb)
      return
      }   
    }

    if (ver.length === 0 || sub.length === 0 ) {
      return
    }
    let aVerb  = ver[Math.floor(Math.random() * ver.length)]
    let aSub  = sub[Math.floor(Math.random() * sub.length)]
    
    if (checked) {
      aVerb  = newVerb[Math.floor(Math.random() * newVerb.length)]
      aSub  = newSub[Math.floor(Math.random() * newSub.length)]
    }

    const sentence = `${obj} ${aVerb} ${aSub}`
    //expend sentence value and push to sentences, array.push
    setSentences([...sentences, sentence])
    
    //call update 
    if (checked) {
      setSub(newSub)
      setVer(newVerb)
    }
    // Set name to previous obj
    setName(obj)
    // Set verb to a random verb in ver/ newVerb
    setVerb(aVerb)
    // Set obj to a random obj in sub/ newSub
    setObj(aSub)
  }
  return (
    <div className="App" style={{margin: '50px', backgroundColor: '#cfe8fc'}}>
      <div>
       Hello there, { TARGET_OF_GREETIING }!
      </div>

      <ol>
      <p>List of Items: {sub.join(", ")} </p>
      <p>Verbs to choose from: {ver.join(", ")} </p>
      </ol>
      <div style={{margin: '10px'}}>    
      <input type="text" value={itemText} onChange={(e) => {setItemText(e.target.value)}} />
      <button onClick={handleAddItem} >Add an item</button>          
      </div>

      <div>        
      <input type="text" value={verbText} onChange={(e) => {setVerbText(e.target.value)}} />
      <button onClick={handleAddVerb} >Add an verb</button>          
      </div>      

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
    </div>
  );
}

export default App;
