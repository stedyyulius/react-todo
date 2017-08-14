import React, {Component} from 'react'

class Todos extends Component{
	constructor(props){
	super(props)
	this.state={
		todos:[{
			task: 'makan'
		}],
		task: "",
		isEdit: false,
		index: ""
	}
}

	tambahTodo(){
		this.setState({
			todos: this.state.todos.concat({
				task:this.state.task
			}),
			task: ""
		})
	}

	hapustodos(index){
		this.state.todos.splice(index,1)
		this.setState({
			todos: this.state.todos
		})
	}

	edit(index,task){
		this.setState({
			isEdit: true,
			index: index,
			task: task
		})
	}

	submitEdit(){
		this.state.todos[this.state.index].task = this.state.task
		this.setState({
			todos: this.state.todos
		})
	}

	cancelEdit(){
		this.setState({
			isEdit: false,
			task: ""
		})
	}

	render(){
		return(
			<div>
				{(this.state.todos.map((todo,index)=>{
					return <div>
									<h3>{todo.task}</h3><button onClick={()=>this.hapustodos(index)}>delete</button>
									<button onClick={()=> this.edit(index,todo.task)}>edit</button>
								 </div>
				}))}
				<br />
				{(this.state.isEdit === true)
				?<div>
					<input placeholder="ini kolom edit" type="text"
					 value={this.state.task}
					 onChange={(e)=>this.setState({task:e.target.value})} />
		      <button onClick={()=> this.submitEdit()}>submit</button>
		      <button onClick={()=> this.cancelEdit()}>Cancel</button>
				 </div>
				:<div>
					<br />
					<input placeholder="tambah todo" type='text' value={this.state.task}
					 onChange={(e)=>this.setState({task:e.target.value})} />
					<button onClick={()=>this.tambahTodo()}>tambah</button>
			   </div>
			}
			</div>
			)
	}
}

export default Todos
