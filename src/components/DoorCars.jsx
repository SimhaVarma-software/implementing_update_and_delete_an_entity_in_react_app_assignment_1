import axios from 'axios';
import React {useState } from 'react';
const API_URI = 'http://${import.meta.env.VITE_API_URI}/doors';
const DoorCard = ({door}) => {
    async function deleteDoor() {
        try{
            await axios.delete('${API_URI}/$(door.id)');
            alert('Door deleted successfully');
        } catch  error
    }
}
const DoorCars = () => {
    async function deleteDoor() {
        try{
            await axios.delete()
        }
    }
  return (
    <>
    {
    !isEditMode?</>
    <div>
        <h3>Name : {door.name}</h3>
        <p>Status :{door.status}</p>
    </div>
    style={{
        display: "flex",
        justifyContent: "space-between",
    }}
    <button>Edit</button>
    <button>Delete</button>
}]
    <form action="" onsubmit={handleeform}>
        <input type="text" value={doorForm.name} onChange={handleInput} name="name" placeholder="Enter Door Name"
    </form>
  )
}

export default DoorCars
