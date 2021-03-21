import React from 'react'
import './Modal.css'

class Modal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selected: null,
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        this.setState({selected: e.target.value})
    }

    componentDidMount(){
        const { currValue } = this.props
        this.setState({selected: currValue})
    }

    render(){
        const { title, options, onCancel, handleSubmit, currValue } = this.props
        const { selected } = this.state
        
        return(
            <div className="modalContainer">
                <div className="modal">
                    <div className="modalTitle"> {title} </div>
                        {options.map(option =>{
                            return(
                                <div className="modalOption" onChange={this.onChange}>
                                    <input type="radio" name="optionName" id={option} value={option} checked={option===selected} ></input>
                                    <label for={option}>{option}</label>
                                </div>
                            )
                        })}
                    <hr className="modalHr"></hr>
                    <div className="buttonContainer">
                        <button className="secondary" onClick={onCancel()}> Cancel </button>
                        <button className="primary" onClick={()=>handleSubmit(selected)}> Ok </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal