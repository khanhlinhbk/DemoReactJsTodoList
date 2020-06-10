import React from 'react';
import './App.css';
import TodoItem from './conponent/todoitem';
import Active from './conponent/active';
import Completed from './conponent/complete';
import tick from './img/tick.svg'; 
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      newItem: '',
      currentFilter: 'All',
      TodoItems:[
      { title: 'Học Bài', isCollapsed: true},
      { title: 'Đi chơi', isCollapsed: true},
      { title: 'Có gấu', isCollapsed: true}

      ]
    }
    //sửa lỗi set dữ liệu
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.active = this.active.bind(this);
    this.all=this.all.bind(this);
    this.completed=this.completed.bind(this);
    this.delete=this.delete.bind(this);
  }
  onItemClicked(item){
    return(event)=> {
      const isComplete = item.isComplete;
      const {TodoItems}= this.state;
      const index = TodoItems.indexOf(item)
      this.setState({
        TodoItems: [
            ...TodoItems.slice(0, index),
            {
              ...item,
              isComplete: !isComplete
            },
            ...TodoItems.slice(index + 1)
        ]
      });
    };
  }
  onKeyUp(event){
    if (event.keyCode === 13) { //enter key
      let text = event.target.value;
      if(!text){
        return;
      }
  
      text = text.trim();
      if(!text){return;}
  
      this.setState({
        newItem: '',
        TodoItems: [
          {title: text, isComplete: false},
          ...this.state.TodoItems
        ]
      });
    }
    
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }
  active(){
    this.setState({
      currentFilter: 'Active'
    })
  }
  all(){
    this.setState({
      currentFilter: 'All'
    })
  }
  completed(){
    this.setState({
      currentFilter: 'Completed'
    })
  }
  //phải dùng mảng a vì map khác foreach ở chỗ nó copy ra mảng khác rồi thực hiện
  delete(){
    const {TodoItems} = this.state;
    
    let a=[];
   TodoItems.map((item,index) =>
     {
        if(item.isComplete !== true){
          a.push(item)
        
      }
      this.setState({
        TodoItems : a
      })
    }
      )
  }

  render() {
    const { TodoItems, newItem, currentFilter } = this.state;
    let a = 0;
    TodoItems.map((item,index)=>{
    if(item.isComplete===true){a++}
  });
  console.log(a)
  if(currentFilter === 'Active'){
    return (
      <div className="App">
        <div className="node">
          <p>Todo List</p>
        </div>
        <div className="Header">
          <img src={tick} width={32} height={32} />
          <input type="text" 
          placeholder="Add a new item"
          value= {newItem}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          />
        </div>
        { TodoItems.length  && TodoItems.map((item,index)=>
        <Active 
            key={index} 
            item={item}
            onClick={this.onItemClicked(item)}/>
        )
      }
      <div className="Footer">
        <button type="button"onClick={this.all}>All</button>
        <button type="button" onClick={this.active}>Active</button>
        <button type="button"onClick={this.completed}>Completed</button>
        <button style={{display: a ? "flex" : 'none' }} type="button" onClick={this.delete}>Clear Completed</button>
      </div>
       
      </div>
     
    );

    
  }
  if(currentFilter ==='All'){
      return (
        <div className="App">
          <div className="node">
            <p>Todo List</p>
          </div>
          <div className="Header">
            <img src={tick} width={32} height={32} />
            <input type="text" 
            placeholder="Add a new item"
            value= {newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
            />
          </div>
          { TodoItems.length  && TodoItems.map((item,index)=>
          <TodoItem 
              key={index} 
              item={item}
              onClick={this.onItemClicked(item)}/>
          )
        }
        <div className="Footer">
          <button type="button"onClick={this.all}>All</button>
          <button type="button" onClick={this.active}>Active</button>
          <button type="button"onClick={this.completed}>Completed</button>
          <button style={{display: a ? 'block' : 'none' }} type="button" onClick={this.delete}>Clear Completed</button>
        </div>
         
        </div>
       
      );
  }
  if(currentFilter === 'Completed'){
    return (
      <div className="App">
        <div className="node">
          <p>Todo List</p>
        </div>
        <div className="Header">
          <img src={tick} width={32} height={32} />
          <input type="text" 
          placeholder="Add a new item"
          value= {newItem}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          />
        </div>
        { TodoItems.length  && TodoItems.map((item,index)=>
        <Completed 
            key={index} 
            item={item}
            onClick={this.onItemClicked(item)}/>
        )
      }
      <div className="Footer">
        <button type="button"onClick={this.all}>All</button>
        <button type="button" onClick={this.active}>Active</button>
        <button type="button"onClick={this.completed}>Completed</button>
        <button style={{display: a ? 'block' : 'none' }} type="button" onClick={this.delete}>Clear Completed</button>
      </div>
       
      </div>
     
    );

  }
    
    
}

}

export default App;
