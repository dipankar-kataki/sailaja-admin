import React,{useState,useEffect} from 'react'
import styles from "./ContactList.module.css"
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { publicURL } from '../../api/apiConfig';

const ContactList = () => {
    const [contactData,setContactData] = useState([]);
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Subject',
            selector: row => row.subject,
        },
        {
            name: 'Message',
            selector: row => row.message,
        },
    ];
   


    useEffect(() => {
        axios.get(`${publicURL}api/contact`)
          .then(response => {
           console.log(response.data.data)
           setContactData(response.data.data)
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
      const data = contactData.map(item => ({
        id: item._id,
        name: item.name,
        email: item.email,
        subject: item.subject,
        message: item.message
      }));
    
  return (
    <>
    <div>ContactList</div>
    <div  className={styles.contactList}>
    <DataTable
            columns={columns}
            data={data}
            wrap={true}
            sortable= {true}
            pagination
          
           
        />
    </div>
    </>
  )
}

export default ContactList