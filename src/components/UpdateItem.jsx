import axios from "axios";
import { useEffect, useState } from "react";
const API_URI = http://${import.meta.env.VITE_API_URI}/doors;
import DoorCard =({ door }) from "./DoorCard";

const UpdateItem = ({ item }) => {
    
    const [doors, setDoors] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        status: ""
    });

    async function getData() {
        try {
            const response = await axios.get(API_URI);
            setDoors(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Error fetching data. Please try again later.");
        }
    }      
    

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;;
        setFormData({...formData, [key]: value });
    }


    useEffect(() => {
        getData();
    }
    , []);

    // your code here
    return (
        <div>
            {
                doors.map((ele) => (
                    <DoorCard key={ele.id} door={ele} getDoors/>
                ))
            }

            <div>
                <h3>Update Item</h3>
                <form action="">
                    <input type="text" value={doorForm.name} onChange={handleInput} name="name" placeholder="Enter Door Name..."/> 

                    <input type="text" name="status" id="status" />
                    <button type="submit" onChange={handleChange()}>Update</button>
                </form>

            </div>
        </div>
        aync funnction handleForm(){
            try{
                const {name,status} =doorForm;
                if(!name || !status){
                    alert("Please fill all the fields");
                    return;
                }          
            await axios.post(API_URI,doorForm);
         alert("Door updated successfully");
         getDoors();   
        }
        }
    );
};

export default UpdateItem;