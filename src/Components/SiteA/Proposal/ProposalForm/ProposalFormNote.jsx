import React from 'react';
import {Link} from "react-scroll";

const ProposalForm = () => {
    return (
        <>
            <section id="proposal-form-section">
                <div className="container">

                    {/* Left Side Fixed */}
                    <div
                        className="left_side_fixed fixed z-[9999] bg-white rounded w-[200px] text-[14px] mt-12">
                        <ol className="relative text-gray-500 border-s-2 border-gray-300">
                            <li className="mb-10 ms-6">
        <span
            className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg className="w-3.5 h-3.5 text-green-500" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
        </span>
                                <h3 className="font-medium leading-tight">Personal Information</h3>
                                <p className="text-sm">Step details here</p>
                            </li>
                            <li className="mb-10 ms-6">
        <span
            className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path
                    d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
            </svg>
        </span>
                                <h3 className="font-medium leading-tight">Account Info</h3>
                                <p className="text-sm">Step details here</p>
                            </li>
                            <li className="mb-10 ms-6">
        <span
            className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path
                    d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
            </svg>
        </span>
                                <h3 className="font-medium leading-tight">Review</h3>
                                <p className="text-sm">Step details here</p>
                            </li>
                            <li className="ms-6">
        <span
            className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path
                    d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
            </svg>
        </span>
                                <h3 className="font-medium leading-tight">Confirmation</h3>
                                <p className="text-sm">Step details here</p>
                            </li>
                        </ol>

                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium ad adipisci aperiam
                    at autem beatae cum, dolorem doloremque doloribus, et fugiat fugit id impedit iure laborum minima
                    modi natus nesciunt pariatur perspiciatis quas quasi quia quo, saepe sequi similique vero voluptas
                    voluptate voluptatibus? Ab aperiam aspernatur deserunt dolor eaque eligendi error eveniet fuga,
                    fugiat hic id labore magni maxime minima, minus mollitia nulla quae quisquam ratione repellat vero
                    voluptates voluptatibus. Accusantium architecto distinctio dolorem ducimus eligendi error fuga fugit
                    id, in ipsam, laboriosam molestias provident quas soluta voluptas. Asperiores aut consectetur
                    dignissimos distinctio eaque eligendi enim esse et, fuga, ipsa labore laborum laudantium molestias
                    nobis obcaecati omnis quisquam repellendus similique ullam voluptate. Dolorem eum inventore neque
                    numquam placeat sapiente sint soluta voluptatem! Animi ipsam natus officia perspiciatis placeat,
                    voluptas. Aliquam beatae blanditiis eligendi eum, id incidunt ipsa iste, iusto odit quae quia quos,
                    sit tempore. Aliquid aspernatur aut eligendi facere fuga iste, iusto magni molestiae neque nihil
                    odio officiis placeat quisquam quo, reiciendis saepe suscipit tempore tenetur velit voluptas?
                    Assumenda explicabo ipsa nihil unde voluptates? Dignissimos ex iure magni obcaecati quibusdam. Ab
                    accusantium aperiam asperiores blanditiis culpa cumque delectus dicta dolorem dolorum, eligendi fuga
                    hic id inventore magnam molestias nam non odio perferendis possimus sed unde voluptas voluptatum? A
                    accusamus aliquid animi atque beatae commodi doloribus dolorum, illo illum iste iusto labore
                    laboriosam nisi, odit optio quas, qui quos repellendus sequi temporibus. Alias culpa fuga iure
                    laborum, magni nihil perspiciatis quibusdam recusandae tenetur. Asperiores autem est magnam pariatur
                    quae quisquam quod ut. Accusamus architecto aut autem consequuntur debitis, dicta, distinctio dolor
                    dolorem earum eligendi est eum ex illum inventore laborum magnam maiores minus molestiae mollitia
                    nam nemo nesciunt non numquam odit omnis pariatur placeat quam quidem quod rem saepe temporibus
                    totam ullam. Adipisci, architecto aspernatur dolor dolore doloremque dolores eligendi eos
                    exercitationem id impedit in itaque iusto magnam minima molestiae nisi nostrum odio officia possimus
                    quaerat quasi quibusdam sequi tempora tempore temporibus ullam veniam? Dolor doloremque eum fugit
                    quia ratione repellendus voluptates. Architecto dignissimos earum ex excepturi iste molestiae quidem
                    tenetur, vel. Commodi consequuntur esse hic ipsa libero omnis, quae tempore vero. At consectetur
                    cumque deleniti dignissimos, eius eos eum eveniet facilis fuga iure iusto maxime minima non, numquam
                    placeat quasi quo quod quos ratione sapiente sequi ullam velit, voluptas? Accusantium assumenda
                    consequatur cum delectus dicta ducimus fugiat inventore mollitia, nobis officia porro quasi suscipit
                    tempora! Aliquid eveniet magnam placeat qui, similique totam voluptates. Animi, blanditiis deserunt
                    doloribus illum in magnam natus necessitatibus officia perferendis possimus quas quibusdam sit ut
                    vel velit, vero voluptas. Accusamus eius eligendi fugit laborum, molestias praesentium tempore? Aliquam autem doloribus incidunt iste iure porro quaerat quas qui quis saepe! Blanditiis corporis cum facilis iure magnam maxime minima, molestias nam nemo omnis optio perferendis quam quasi quisquam repellendus ut vel vero voluptate! Eligendi impedit labore voluptatem? Esse eveniet exercitationem maiores nobis odio pariatur porro quas quia totam ut. Cum debitis doloremque, dolores eos harum iure laborum, necessitatibus odit optio qui quibusdam soluta ut veritatis! At blanditiis impedit in quidem vero? Ab accusamus adipisci aliquam aliquid, animi architecto assumenda deleniti enim excepturi molestiae nihil nisi optio quas sapiente soluta tempora tenetur. Ab, aliquid aperiam blanditiis eaque est et ex, facere fuga incidunt iste iusto minima natus nobis, numquam odit qui quia quod sit suscipit vero! Aliquam amet aspernatur assumenda cupiditate delectus deleniti deserunt enim facere, id laboriosam magnam magni nemo nobis porro praesentium quia quisquam quo similique tempore tenetur. A aliquid atque debitis dolorem dolorum ducimus eligendi ex, illum iste itaque iusto, laudantium nisi optio quaerat quos recusandae reprehenderit rerum, ut! Aliquam, aperiam aut delectus eius eligendi esse fugiat incidunt nemo optio praesentium quae quas quia quo? Accusamus ad aspernatur deserunt doloribus, dolorum est fugiat maxime sunt veniam vero? Aliquam amet aspernatur atque consequatur deserunt dicta dolorem eius esse ex exercitationem, in inventore, ipsa laudantium minima molestiae nam nesciunt numquam officia quas quisquam quos reiciendis repellat rerum sequi sint temporibus, tenetur vel voluptas voluptatibus voluptatum. Eveniet explicabo fuga fugit natus qui voluptate. Aliquid animi asperiores aspernatur, assumenda beatae commodi cum cumque debitis error ex exercitationem harum illo iusto labore laboriosam libero magni molestiae necessitatibus nesciunt nisi optio porro quae, quasi reiciendis repellendus sint, temporibus vero voluptas voluptates voluptatibus. Ab asperiores cupiditate dicta dignissimos dolore error et, eveniet expedita itaque, iusto labore libero modi nam nisi nobis non nulla saepe tempore velit veritatis. Adipisci aspernatur aut corporis fuga illum laborum maxime, natus nulla perferendis placeat provident ratione voluptatem! Ad consectetur doloremque ducimus iusto labore modi non tenetur. At dolor esse excepturi impedit iste minima molestiae, nihil officiis pariatur quas rem saepe, sequi suscipit ut vitae. Ab accusamus ad atque, aut consequuntur cupiditate debitis dolores eius eos, excepturi fugiat fugit hic iusto labore magnam maiores maxime nesciunt nostrum numquam odio perspiciatis possimus quaerat quia quos rem saepe sit sunt tempore ullam voluptate? Amet architecto autem delectus earum esse fuga fugit ipsa labore maxime mollitia omnis, optio praesentium quidem quo sequi vel, voluptates? Atque autem beatae consequuntur deleniti deserunt dolores ducimus eaque eius eos expedita inventore ipsa modi nam, perspiciatis quam quisquam reiciendis repudiandae saepe similique soluta suscipit ullam veritatis voluptates. Culpa doloribus earum eius est eum exercitationem illum labore laboriosam libero maiores maxime minus modi nihil nisi pariatur quam quasi quidem quo ratione repudiandae soluta, vero voluptatem! A, accusamus aliquam aut blanditiis commodi consequatur consequuntur cum deleniti doloribus ducimus enim eveniet facere fuga incidunt laboriosam, laborum, maiores minima minus molestiae nostrum numquam odit officiis perferendis quis quisquam saepe sed tempora tempore unde vel! Corporis cupiditate distinctio facere harum iste laboriosam maxime tenetur? Accusantium architecto asperiores autem consequuntur ducimus facere facilis molestiae mollitia nemo nulla officia omnis, pariatur placeat possimus recusandae sapiente ut. Accusamus, cupiditate dolores enim eos explicabo in ipsa nihil quia ratione, rerum sequi sunt vero? Architecto aspernatur, at consequatur cum distinctio dolor earum facere inventore itaque, labore minima mollitia natus officia perferendis similique sit voluptates? Ad, qui voluptatibus. Accusantium atque cupiditate dolor doloremque error fugit, illo incidunt maxime molestiae nisi quidem quis vel velit. Exercitationem, illo!
                </p>
            </section>
        </>
    );
};

export default ProposalForm;