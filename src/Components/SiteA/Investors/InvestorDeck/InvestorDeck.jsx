import React from 'react';
import inDeckImg from '../../../../assets/images/sitea/investor-deck.png';

const InvestorDeck = () => {
    return (
        <>
            <section id="investor-deck-section">
                <div className="container pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="col mt-1">
                            <img src={inDeckImg} className="w-full h-80" alt="inDeckImg"/>
                        </div>
                        <div className="col">
                            <h4 className="text-[16px] font-semibold">Investor Deck</h4>
                            <p className="mt-3">
                                If you want to get a copy of our Investor Deck, please send us your request by email at
                                investor@nosres.com and we will get back to you within 24 hours, during normal business
                                hours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InvestorDeck;