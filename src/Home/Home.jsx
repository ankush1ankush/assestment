import React, { useState, useEffect } from 'react'
import "./Home.css"
import Top from '../Top/Top'
import Middle from '../Middle/Middle'
import Bottom from '../Bottom/Bottom'
import Footer from '../Footer/Footer'
import LastPoint from '../LastPoint/LastPoint'
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../Firebase/firebase"

function Home() {
    const [Mydata, setdata] = useState([]);
    useEffect(() => {
        async function getData() {
            const querySnapshot = await getDocs(collection(db, "Data", "Data123", "file"));

            let data = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                data.push(doc.data())
            });
            setdata(data.map((data) => ({
                volume: data.volume,
                last: data.last,
                buy: data.buy,
                base_unit: data.base_unit,
                sell: data.sell,
                name: data.name,

            }
            )));


        }
        //console.log(Mydata)
        getData();
    }, [])
    return (
        <div className="Container  BackColor">

            <Top Mydata={Mydata} setdata={setdata} />
            <Middle />
            <Bottom Mydata={Mydata} setdata={setdata} />
            <Footer />
            <LastPoint />
        </div>
    )
}

export default Home