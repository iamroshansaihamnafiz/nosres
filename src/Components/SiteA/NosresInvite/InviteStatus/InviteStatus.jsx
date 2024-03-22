import React from 'react';
import clockImg from "../../../../assets/images/sitea/clock.png";
import moneyImg from "../../../../assets/images/sitea/invite-3.png";
import {Link} from "react-router-dom";

const InviteStatus = () => {
    return (
        <>
            <section id="invite-status-section" className="bg-[#F8F9FA] mt-14">
                <div className="container py-10">
                    <div className="head-wrap text-center">
                        <h1 className="font-semibold text-[24px]">
                            Referral Status
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Rest assured, we will provide you with regular updates on the progress of your referrals.
                        </p>
                    </div>

                    <div className="mt-10 flex items-center gap-2">
                        <img src={clockImg} className="w-7" alt="clockImg"/>
                        <h1 className="font-semibold text-[24px]">
                            Your Referral List
                        </h1>
                    </div>

                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
                        <div className="col lg:col-span-9">
                            <div className="overflow-x-auto">
                                <table className="w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50 border-t-2">
                                    <tr>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Sending Date
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Expiry Date
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Reward ($)
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            example@email.com
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            20 Jan 2020
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            20 Feb 2020
                                        </td>
                                        <td className="px-6 py-4 text-green-400 whitespace-nowrap">
                                            Complete
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            $10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            example@email.com
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            20 Jan 2020
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            20 Feb 2020
                                        </td>
                                        <td className="px-6 py-4 text-yellow-400 whitespace-nowrap">
                                            Pending
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            $0
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            example@email.com
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            20 Jan 2020
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            20 Feb 2020
                                        </td>
                                        <td className="px-6 py-4 text-red-500 whitespace-nowrap">
                                            Cancel
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            $0
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col lg:col-span-3">
                            <div className="box rounded border p-4">
                                <h1 className="pb-3 font-semibold flex items-center gap-1 text-[16px]">
                                    <img src={moneyImg} className="w-4" alt="moneyImg"/>
                                    Total Credits Earned
                                </h1>
                                <hr/>
                                <h4 className="pb-3 text-green-400 mt-2 text-[16px] font-semibold">
                                    $10
                                </h4>
                                <hr/>
                                <h1 className="py-3 font-semibold text-[16px]">
                                    Remaining Earning Credit
                                </h1>
                                <hr/>
                                <div className="pt-3">
                                    <Link to='#' className="text-primary">
                                        Details of Credits Earned
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
};

export default InviteStatus;