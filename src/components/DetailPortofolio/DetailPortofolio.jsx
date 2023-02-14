import React from "react";
import './DetailPortofolio.scss'
import detailInfo from './detailInfo'
import { useNavigate, useParams } from "react-router-dom"

const DetailPortofolio = () => {
    let navigate = useNavigate()
    const { params } = useParams()
    return (
        <div className="app__detailportofolio-container">
            { console.log("params: ", params)}
            <div className="app__detailportofolio-btn">
                <button onClick={() => navigate(-1)}>&#8678; Back</button>
            </div>
            <div className="app__detailportofolio-title">
                <h1>Portofolio</h1>
                {/* <h2>Dewe Tour | Ecommerce</h2> */}
                <h2>{detailInfo[params].title}</h2>
            </div>

            {params !== "todo-app" ? 
            <div className="app__detailportofolio-img">
                <div>
                    <div>
                        <img src={require(`../../assets/${params}-1.png`)} alt="dewe-tour"/>
                        <h2>{detailInfo[params].list[0]}</h2>
                    </div>
                    <div>
                        <img src={require(`../../assets/${params}-2.png`)} alt="dewe-tour"/>
                        <h2>{detailInfo[params].list[1]}</h2>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={require(`../../assets/${params}-3.png`)} alt="dewe-tour"/>
                        <h2>{detailInfo[params].list[2]}</h2>
                    </div>
                    <div>
                        <img src={require(`../../assets/${params}-4.png`)} alt="dewe-tour"/>
                        <h2>{detailInfo[params].list[3]}</h2>
                    </div>
                </div>
            </div>
            : 
            <div className="app__detailportofolio-todo-img">
                <div>
                    <img src={require(`../../assets/${params}-1.png`)} alt="dewe-tour"/>
                    <h2>Todo App</h2>
                </div>
                <div>
                    <img src={require(`../../assets/${params}-2.png`)} alt="dewe-tour"/>
                    <h2>Todo App (Detail)</h2>
                </div>
            </div>
            }

            <div className="app__detailportofolio-description">
                <h1>Description</h1>
                <h3>{detailInfo[params].description}<a href={detailInfo[params].link}>{detailInfo[params].link}</a></h3>
                {/* <h3>Web app for online travelling agent, that have many feature such as search trip, booking trip, payment, and realtime chat. The App consists of frontend and backend, frontend built using react Js and backend built using express Js as its framework. Backend link to mysql database using ORM sequelize. You can see the source code in this link: <a href="https://github.com/fadhil-amhadin/dewe-tour">https://github.com/fadhil-amhadin/dewe-tour</a></h3> */}
            </div>
        </div>
    )
}

export default DetailPortofolio