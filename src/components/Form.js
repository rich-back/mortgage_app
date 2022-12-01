import { useState } from "react";

const Form = ({onSubmit}) => {

    const [salary1, setSalary1] = useState();
    const [salary2, setSalary2] = useState();

    const handleSalary1Change = (evt) => {
        setSalary1(evt.target.value);
    }
    
    const handleSalary2Change = (evt) => {
        setSalary2(evt.target.value);
    }
    
    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const data = {
            "salary1": parseInt(salary1),
            "salary2": parseInt(salary2)
        }
        onSubmit(data)
    }
    
    return (
       <>
       <form 
        onSubmit={handleFormSubmit}
        className="salary-form">
            <input
                type="number"
                placeholder="£ Your Salary"
                value={salary1} 	
                onChange={handleSalary1Change}
            />
            <input
                type="number"
                placeholder="£ Your partner's Salary"
                value={salary2} 	
                onChange={handleSalary2Change}
            />

            <input type="submit" value="Calculate!" onClick={handleFormSubmit}/>
        </form>
        
        {/* <Calculation/> */}

        </>
    )
}

export default Form;