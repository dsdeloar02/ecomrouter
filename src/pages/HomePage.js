import React from 'react';
import Layout from '../components/Layout';
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireConfig';

const Homepage = () => {

    async function AddData() {
        try {
            await addDoc(collection(fireDB, "users"), { name: 'Shuvon', age: 28 })
        } catch (error) {
            console.log(error)
        }
    }

    async function GetData() {
        try {
            const users = await getDocs(collection(fireDB, "users"), {
                name: 'rahadbd',
                age: 26
            });

            const usersArray = [];

            users.forEach((doc) => {
                const obj = {
                    id: doc.id,
                    ...doc.data(),
                }
                usersArray.push(obj)
            });

            console.log(usersArray);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Layout>
            <div className='container'>
                <h1 className='mb-3'>HomePage</h1>
                <button onClick={AddData} className='btn btn-success' >
                    Add data to fireBase
                </button>

                <button onClick={GetData} className='btn btn-success ml-2' >
                    Add data from fireBase
                </button>
            </div>
        </Layout>
    );
}

export default Homepage;
