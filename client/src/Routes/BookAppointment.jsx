import React, { useEffect, useState } from 'react'
import DropDown from "/DropDown.svg"

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        date: '',
        name: '',
        pet: '',
        petSymptoms: '',
        contact: '',
        query: '',
    });
    
    useEffect(() => {
        const formDataFromStorage = localStorage.getItem('formData');
        if (formDataFromStorage) {
            try {
                setFormData(JSON.parse(formDataFromStorage));
            } catch (error) {
                console.error('Error parsing formData from storage:', error);
            }
        }
    }, []);
    
      
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

    };
    const handleDropDown = (e) => {
    }
    const handleSelect = (option) => {
        setOptions(option);
    };
    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);
    
    
    return (
        <>
            <div className='flex justify-center m-5 bg-slate-500 p-5 text-xl flex-wrap rounded-xl'>
                <h1 className='w-full text-center mb-4 text-2xl font-extrabold'>Book An Appointment</h1>
                <form className='flex flex-col w-full'>
                    <div className='flex justify-evenly w-full border-2 border-black p-3 items-center'>
                        <label className='w-[40%]' htmlFor="date">Pick a date for an appointment:</label>
                        <input id='date' className='rounded-md p-2 cursor-pointer w-[50%]' name='date' value={formData.date} onChange={handleChange} type="date" />
                    </div>
                    <div className='flex justify-evenly w-full border-2 border-black p-3 items-center'>
                        <label className='w-[40%]' htmlFor="pet">Pet (e.g.: dog, cat, etc) :</label>
                        <input id='pet' className='rounded-md p-2 cursor-text w-[50%]' type="text" name="pet" value={formData.pet} onChange={handleChange} />
                    </div>
                    <div className='flex justify-evenly w-full border-2 border-black p-3 items-center'>
                        <label className='w-[40%]' htmlFor="petSymptoms">Pet Symptoms :</label>
                        <input id='petSymptoms' className='rounded-md p-2 cursor-text w-[50%]' type="text" name="petSymptoms" value={formData.petSymptoms} onChange={handleChange} />
                    </div>
                    <div className='flex justify-evenly w-full border-2 border-black p-3 items-center'>
                        <label className='w-[40%]' htmlFor="name">Your Name:</label>
                        <input id='name' className='rounded-md p-2 cursor-text w-[50%]' type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className='flex justify-evenly w-full border-2 border-black p-3 items-center'>
                        <label className='w-[40%]' htmlFor="contact">Mobile Number :</label>
                        <input id='contact' className='rounded-md p-2 cursor-text w-[50%]' type="number" name="contact" value={formData.contact} onChange={handleChange} />
                    </div>
                </form>
            </div>
        </>
    );

}

export default BookAppointment
