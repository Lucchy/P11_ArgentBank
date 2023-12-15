import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Info from '../components/info';
import '../styles/Home.css';

const Home = () => {
    return (
        <div>
            <Header/>
            <main>
                <div className="hero">
                    <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <Info url='src/assets/img/icon-chat.webp' title='You are our prioprity #1'>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </Info>
                    <Info url='src/assets/img/icon-money.webp' title='More savings means higher rates'>
                        The more you save with us, the higher your interest rate will be!
                    </Info>
                    <Info url='src/assets/img/icon-security.webp' title='Security you can trust'>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </Info>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default Home;