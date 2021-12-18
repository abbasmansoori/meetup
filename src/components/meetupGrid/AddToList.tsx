import React, { useState } from 'react'
import {IState as Props} from "../meetupGrid/Card";


interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string;
        rating: number;
        note: string;
        attending?: string | undefined
    }[]>>

    
}


const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        rating: "",
        note: "",
        attending: ""
    })

    const handleChange =  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
           [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if(
        
        !input.name || 
        !input.rating || 
        !input.note
        ){
          return  alert("Please fill out all fields")

        }
        setPeople([
            ...people,
            {
                name: input.name,
                rating: parseInt(input.rating),
                note: input.note,
                attending: input.attending
            }
        ])

        setInput({
            name: "",
        rating: "",
        note: "",
        attending: ""
        })
    }

    return (
        <div className='AddToList'>
            <input 
            type="text"
            placeholder="Name"
            className='AddToList-input'
            value={input.name}
            onChange={handleChange}
            name="name"

            />
            <input 
            type="number"
            placeholder="Rating"
            className='AddToList-input'
            value={input.rating}
            onChange={handleChange}
            name="rating"

            />
            <input 
            type="text"
            placeholder="Attending"
            className='AddToList-input'
            value={input.attending}
            onChange={handleChange}
            name="attending"
            />
            <textarea
            placeholder="Note"
            className='AddToList-input'
            value={input.note}
            onChange={handleChange}
            name="note"
            />
            <button 
            className="AddToList-button"
            onClick={handleClick}
            />
        </div>
    )
}

export default AddToList
