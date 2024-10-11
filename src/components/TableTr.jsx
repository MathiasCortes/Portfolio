import React, { useState } from 'react'

function ShowAll (CID)  {

    const data = () => {
        [ID, setID] = useState('');
        [EntryDate] = useState('');
        [Dates, setDates] = useState('');
        [First, setFirst] = useState('');
        [Current,setCurrent] = useState('');
    }

    useEffect(() => {
        const loadNoteCases = async () => {
            try {
                const response = await fetch('http://192.168.1.206:3000/noteCases');
                const data = await response.json();
                setNoteCases(data); 
            } catch (error) {
                console.error('Error al cargar los usuarios:', error);
            }
        };
    loadNoteCases();
    }, []);

}

const TableTr = (CID,Name, SurName, Phone, Quantity) => {
  return (
    <table>
        {quantity.array.forEach(element => {
            <tr>
                <td>{Name}</td>
                <td>{SurName}</td>
                <td>{Phone}</td>
                <td>{Quantity}</td>
                <td></td>
            </tr>
        })}
    </table>
  )
}

export default TableTr
