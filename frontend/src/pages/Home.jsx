import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HomeHeader } from '../cmps/HomeHeader'
import heroImgUrl from '../assets/img/hero.png'
export class Home extends Component {
    render() {
        return (
            <div className="home">
                <HomeHeader />
                <main className="home-container">
                    <div className="hero-container">
                        <section className="hero">
                            <div className="hero-info">
                                <h1>D-altask helps teams move work forward.</h1>
                                <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with D-altask.</p>
                                <Link to="/login" className="clean-link">Get started!</Link>
                            </div>
                            <div className="hero-img">
                                <img src={heroImgUrl} alt="" />
                            </div>
                        </section>
                    </div>
                    <section className="product">
                        <div className="product-info">
                            <h2>It's more than work. It's a way of working together.</h2>
                            <p>Start with a D-altask board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
                            <Link to="/signup" className="clean-link" >Start doing →</Link>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}