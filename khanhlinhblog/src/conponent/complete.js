import React,{Component} from 'react';
import classNames from 'classnames';
import './todoitem.css'; 
import checkImg from '../img/check.svg';
import checkComplete from '../img/checkcomplete.svg';

class Completed extends Component {

     render(){
         const { item, onClick } = this.props;
         let url = checkImg; 
         if(item.isComplete){
            url = checkComplete; 
         }
         
        if(item.isComplete === true){
            console.log(item.isComplete)
            return (  
                <div  className={classNames('TodoItem',{
                    'TodoItem-complete': item.isComplete
                })}>
                    <img onClick={onClick} src={url} width={32} height={32}/>
                    <p>{this.props.item.title}</p> 
                </div>
                );
        }
        else {console.log(item.isComplete); return "" }; 
            
         
         
     }
 }
 export default Completed;