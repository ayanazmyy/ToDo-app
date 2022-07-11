import React from 'react'

const Form = ({inputHandler , addTaskHandler, inputText}) => {
    return (
        <>
            <div className="col-lg-6 mx-auto">
                <h2 className='title'>T O D O</h2>
                <div className="input-group">
                    <input type="text" value={inputText} onChange={inputHandler} className="form-control" id="specificSizeInputGroupUsername" placeholder="Add new item"/>
                    <div className="input-group-text btn add-div"onClick={addTaskHandler} ><i className="fa-solid fa-plus"></i></div>
                </div>
            </div>
        </>
    )
}

export default Form