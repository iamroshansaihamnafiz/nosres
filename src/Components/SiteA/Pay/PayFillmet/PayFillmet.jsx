import React from 'react';

const PayFillmet = () => {
    return (
        <>
            <section id="pay-fillmet-section" className="bg-primary">
                <div className="container py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="col image-box border px-6 py-6 rounded text-white">
                            <h4 className="text-[16px]">Add Money</h4>
                            <div className="mt-6 border-b-2 border-b-white"></div>
                            <h4 className="text-[14px] mt-6">
                                You need to add money to your Nosres Cash card to make transactions like sending and
                                tranferring money.
                            </h4>
                        </div>

                        <div className="col image-box border px-6 py-6 rounded text-white">
                            <h4 className="text-[16px]">Request Money</h4>
                            <div className="mt-6 border-b-2 border-b-white"></div>
                            <h4 className="text-[14px] mt-6">
                                You may also request money from people you have completed jobs for. They will receive a
                                friendly reminder.
                            </h4>
                        </div>

                        <div className="col image-box border px-6 py-6 rounded text-white">
                            <h4 className="text-[16px]">Send Money</h4>
                            <div className="mt-6 border-b-2 border-b-white"></div>
                            <h4 className="text-[14px] mt-6">
                                You can use your Nosres Cash card to pay people for jobs that they have completed for
                                you.
                            </h4>
                        </div>

                        <div className="col image-box border px-6 py-6 rounded text-white">
                            <h4 className="text-[16px]">Real-time Monitoring</h4>
                            <div className="mt-6 border-b-2 border-b-white"></div>
                            <h4 className="text-[14px] mt-6">
                                You can also transfer money from your Nosres Cash card to your debit card or bank
                                account.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PayFillmet;