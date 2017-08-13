import React, {Component} from 'react'

class Todos extends Component{
	constructor(props){
	super(props)
	this.state={
		judul: "ini judul",
		pkl:[{
			name: 'elsa'
		}],
		nama:"",
		isEdit: false,
		index: ""
	}
}
	gantiJudul(){
		this.setState({
			judul: "sapi"
		})
	}

	tambahPkl(){
		this.setState({
			pkl: this.state.pkl.concat({name:this.state.nama})
		})
	}

	hapusPkl(index){
		this.state.pkl.splice(index,1)
		this.setState({
			pkl: this.state.pkl
		})
	}

	edit(index){
		this.setState({
			isEdit: true,
			index: index
		})
	}

	submitEdit(){
		this.state.pkl[this.state.index].name = this.state.nama
		this.setState({
			pkl: this.state.pkl
		})
	}

	cancelEdit(){
		this.setState({
			isEdit: false
		})
	}

	render(){
		return(
			<div>
				<h1>{this.state.judul}</h1>
				<button onClick={()=>this.gantiJudul()}>ganti judul</button>
				{(this.state.pkl.map((p,index)=>{
					return <div> <h1>{p.name}</h1><button onClick={()=>this.hapusPkl(index)}>delete</button> 
								<button onClick={()=> this.edit(index)}>edit</button></div> 
				}))}
				<h3>nama pkl </h3>
				{(this.state.isEdit === true)
				?<div><input placeholder="ini kolom edit" type="text" value={this.state.nama} onChange={(e)=>this.setState({nama:e.target.value})}/>
				      <button onClick={()=> this.submitEdit()}>submit</button>
				      <button onClick={()=> this.cancelEdit()}>Cancel</button></div>
				:<div>{this.state.nama}<br />
				<input placeholder="ini kolom add" type='text' onChange={(e)=>this.setState({nama:e.target.value})}/>
				<button onClick={()=>this.tambahPkl()}>tambah</button></div>
			}
			</div>
			)
	}
}

export default Todos