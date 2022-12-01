import { useState } from "react"
import Calculation from "../components/Calculation";
import Form from "../components/Form";
import Title from "../components/Title";


const MortgageContainer = () => {
    const [maxMortgage, setMaxMortgage] = useState ([])

    const handleSubmit = (data) => {
        let amount = data.salary1 + data.salary2;
        setMaxMortgage(amount * 3);
    }

return(
    <>
        <Title />
        <Form onSubmit={handleSubmit}/>
        <Calculation maxMortgage={maxMortgage}/>
    </>
)

};


export default MortgageContainer;
