import React, {useState} from 'react'

export default function Form({handleSubmit,value, setValue}) {

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <form style={{display: 'flex'}} onSubmit={handleSubmit}>
                <input type="text" name="value" style={{flex:'10', padding: '5px'}} onChange={handleChange} placeholder="해야 할 일을 입력하세요." value={value}/>
                <input type="submit" className="btn" style={{flex:'1'}} value="입력"/>
            </form>
        </div>
    )
}