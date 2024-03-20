import React from 'react';
import networkIMG from '../../../../assets/images/sitea/marketplace-short.png';

const MarketplaceNetwork = () => {
    return (
        <>
            <section id="marketplace-network-section">
                <div className="container pt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="col mt-2">
                            <img src={networkIMG} alt="networkIMG"/>
                        </div>
                        <div className="col">
                            <h1 className="font-semibold text-[24px]">
                                A Classic Social Shopping Network
                            </h1>
                            <p className="mt-3 text-[#ABABAB] text-[16px]">
                                We use a combination of sleek minimalism, intuitive graphical user interface, and
                                signature simplicity to create a wonderful user experience. As a result, we create a
                                classic social shopping network.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MarketplaceNetwork;