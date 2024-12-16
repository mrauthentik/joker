import React from "react"

export default function Form (){
    const [formData, setFormData] = React.useState({
        firstname:'',
        lastname: '',
        comments:'',
        isFriendly: true,
        employment: '',
        favcolor: ''

    })
    function handleChange(event){
        event.preventDefault()
        const {name, email, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:type === "checkbox" ? checked : value

                
            }
            console.log(formData)
        })
    }
    return (
        <div>
          <h3>Register Form below for 
            <span> for using Forms in React</span>
          </h3>
          <input 
            type="text"
            name="firstname"
            placeholder="first name"
            value={formData.firstname} 
            onChange={handleChange}
            />
          <input 
          type="text"
            name="lastname"
            placeholder="last name"
            value={formData.lastname} 
            onChange={handleChange}
            />
          <input  
          type="email"
            name="email"
            placeholder="email"
            value={formData.email} 
            onChange={handleChange} />
          <textarea 
            name=""/>
            <input 
                type="checkbox" 
                name="isFriendly" 
                id="isFriendly"
                value={formData.isFriendly} 
                />
            <label htmlFor="isFriendly">Are you friendly ?</label>
            <br />
            <br />
            <br />

            <p>Current Employment Status</p>
            <input 
                type="radio"
                 name="employment" 
                 id="" 
                 value={'unemployed'}
                 onChange={handleChange}/>
            <label htmlFor="unemployed">Unemployment</label> <br />
            <input 
                type="radio"
                 name="employment" 
                 id="" 
                 value={formData.employment}
                 onChange={handleChange}/>
            <label htmlFor="part-time">Part-time</label> <br />
            <input 
                type="radio"
                 name="employment" 
                 id="" 
                 value={'full-time'}
                 onChange={handleChange}/>
            <label htmlFor="unemployed">Full-time </label>
        </div>
    )
}