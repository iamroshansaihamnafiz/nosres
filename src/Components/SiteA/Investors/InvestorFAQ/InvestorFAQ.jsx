'use client';
import React from 'react';
import {Accordion} from 'flowbite-react';

const InvestorFaq = () => {
    return (
        <>
            <section id="investor-faq-section">
                <div className="container pt-16">
                    <h1 className="mb-1 font-semibold text-[24px]">
                        FAQs
                    </h1>
                    <Accordion>
                        <Accordion.Panel>
                            <Accordion.Title className="text-[16px]">1. What does your company do?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2">
                                    We are developping innovative products and services to satisfy people’s needs and
                                    desires. Our business portfolio includes Nosres Marketplace (coming soon), Nosres
                                    Wallet (in progress), Nosres Logistics (in progress), and Nosres Telecom (in
                                    progress).
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>2. Why did you choose this idea?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2">
                                    Online shopping is one of the most popular online activities worldwide. However,
                                    e-commerce remains underdeveloped in Latin America and the Caribbean. They are
                                    facing some problems during the process of shopping from international sites. These
                                    problems include shipping, payments, etc. Therefore, we would like to enable those
                                    consumers (including those in North America) to buy and sell their products in a
                                    trusted and secure social shopping marketplace. This idea may seem hard, but we
                                    choose it because we want to compete in tasks that challenge us.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>3. Where will your company be in 5 years?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2">
                                    We currently have a roadmap that shows us where the road is going. Our goal is for
                                    our company to be fully stable within five years. Indeed, our website is still very
                                    much a work in progress, and some technical factors impede our ability to move
                                    faster, but we hope to achieve this goal in five years.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>4. What is your company's business model?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2">
                                    Sellers are required to pay a service fee on orders placed for each item sold.
                                    Sellers who want to use our fulfillment services are required to pay fulfillment
                                    service fees, including a monthly inventory storage fee. Ultimately, we give users,
                                    including small business owners, the opportunity to promote, advertise and market
                                    their businesses on our Marketplace.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>5. How do you solve privacy issue?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2">
                                    Users’ privacy is our top priority. We use advanced encryption technologies to make
                                    sure that their sensitive information is always protected and never passed on to
                                    third parties.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>6. How will you use the capital you raise?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2">
                                    Building a social shopping network is our first priority – we want to integrate the
                                    social experience with the buying experience. We plan to scale the network as the
                                    number of users increases. As a result, we will need to invest in a scalable IT
                                    infrastructure. Our second priority is to develop a payment system that will
                                    facilitate transactions between buyers and sellers. Our third priority is to build a
                                    fulfillment center to enable the sellers to store their inventory.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>7. When do you expect to generate revenues?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2">
                                    We are not currently seeking to generate revenues. We are now focusing on building a
                                    strong brand that will make people believe in us. In the meantime, users can
                                    register and have access to our corporate website. Once we are on the verge of
                                    launching our first product, we will provide a detailed revenue forecast.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>8. What problem does Nosres solve?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2">
                                    E-commerce remains underdeveloped in Latin America and the Caribbean. So, we are
                                    building a social shopping marketplace with an integrated payment option that allows
                                    people to buy and sell products.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>9. Why your team is uniquely qualified to solve this
                                problem?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2">
                                    Our team is highly-skilled and analytical. Our specialties include marketing
                                    strategy, business operations analysis, business consultancy, corporate strategy,
                                    operations research, information technology, etc.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>10. How do you guarantee liquidity to equity investors?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2">
                                    We forecast that our first years of operations will concentrate on organic growth
                                    and achieving breakeven. Once we reach these goals, we will hopefully start thinking
                                    about a liquidity event that may enable investors to realize the value of their
                                    investment.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </section>
        </>
    );
};

export default InvestorFaq;