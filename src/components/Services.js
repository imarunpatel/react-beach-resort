import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title'

export default class Services extends Component {
    state = {
        services: [
            {
                icon:<FaCocktail/>,
                title: "free cocktails",
                info: 'lorem ipsum dolor sit amet consecteru asd ,dfmagin dcorpix1'
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hikin",
                info: 'lorem ipsum dolor sit amet consecteru asd ,dfmagin dcorpix1'
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free shuttle",
                info: 'lorem ipsum dolor sit amet consecteru asd ,dfmagin dcorpix1'
            },
            {
                icon:<FaBeer/>,
                title: "Strongest Beer",
                info: 'lorem ipsum dolor sit amet consecteru asd ,dfmagin dcorpix1'
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
