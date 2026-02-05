import React, {useState} from 'react';

import SectionHead from "./SectionHead.jsx";
import SectionWrapper from "./SectionWrapper.jsx";

// i18n
import { useTranslation } from 'react-i18next';

const Faq = () => {
    const { t } = useTranslation();
    const [isAccording1, setIsAccording1] = useState(null);
    const [isAccording2, setIsAccording2] = useState(null);

    const accordingData1 = [
        {
            title: t('home.faq.q1'),
            description: t('home.faq.a1'),
        },
        {
            title: t('home.faq.q2'),
            description: t('home.faq.a2'),
        },
        {
            title: t('home.faq.q3'),
            description: t('home.faq.a3'),
        },

        {
            title: t('home.faq.q4'),
            description: t('home.faq.a4'),
        },

        {
            title: t('home.faq.q5'),
            description: t('home.faq.a5'),
        },
    ];

    const accordingData2 = [
        {
            title: t('home.faq.q6'),
            description: t('home.faq.a6'),
        },
        {
            title: t('home.faq.q7'),
            description: t('home.faq.a7'),
        },
        {
            title: t('home.faq.q8'),
            description: t('home.faq.a8'),
        },

        {
            title: t('home.faq.q9'),
            description: t('home.faq.a9'),
        },

        {
            title: t('home.faq.q10'),
            description: t('home.faq.a10'),
        },
    ];

    const handleClick1 = (index) => setIsAccording1((prevIndex) => (prevIndex === index ? null : index));

    const handleClick2 = (index) => setIsAccording2((prevIndex) => (prevIndex === index ? null : index));

    return (
        <SectionWrapper>
            <SectionHead title={t('home.faq.title')} description={t('home.faq.description')}/>

            <section className='mt-14 mb-16 grid grid-cols-1 1024px:grid-cols-2 gap-[15px]'>
                <div className='flex-col flex gap-[15px]'>
                    {accordingData1?.map((according, index) => (
                        <article key={index}
                                 className="border dark:border-darkBorderColor/80 border-border rounded-high p-5">
                            <div
                                className="flex gap-2 cursor-pointer items-center justify-between w-full"
                                onClick={() => handleClick1(index)}>
                                <h2 className={`${isAccording1 === index ? 'dark:text-darkSubTextColor ' : ' dark:text-darkSubTextColor'} font-[600] text-[1.1rem]`}>
                                    {according.title}
                                </h2>
                                <svg
                                    className={`${isAccording1 === index ? 'fill-gray-700 dark:fill-darkSubTextColor' : 'dark:fill-darkSubTextColor'} shrink-0 ml-8`}
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect
                                        y="7"
                                        width="16"
                                        height="2"
                                        rx="1"
                                        className={`transform origin-center transition duration-200 ease-out ${
                                            isAccording1 === index && "!rotate-180"
                                        }`}
                                    />
                                    <rect
                                        y="7"
                                        width="16"
                                        height="2"
                                        rx="1"
                                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                            isAccording1 === index && "!rotate-180"
                                        }`}
                                    />
                                </svg>
                            </div>
                            <div
                                className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                                    isAccording1 === index
                                        ? "grid-rows-[1fr] opacity-100 mt-4"
                                        : "grid-rows-[0fr] opacity-0"
                                }`}>
                                <p className="dark:text-darkSubTextColor text-[1rem] overflow-hidden">
                                    {according.description}
                                </p>
                            </div>
                        </article>
                    ))
                    }
                </div>
                <div className='flex-col flex gap-[15px]'>
                    {accordingData2?.map((according, index) => (
                        <article key={index}
                                 className="border dark:border-darkBorderColor/80 border-border rounded-high p-5">
                            <div
                                className="flex gap-2 cursor-pointer items-center justify-between w-full"
                                onClick={() => handleClick2(index)}>
                                <h2 className={`${isAccording2 === index ? 'dark:text-darkSubTextColor ' : ' dark:text-darkSubTextColor'} font-[600] text-[1.1rem]`}>
                                    {according.title}
                                </h2>
                                <svg
                                    className={`${isAccording2 === index ? 'fill-gray-700 dark:fill-darkSubTextColor' : 'dark:fill-darkSubTextColor'} shrink-0 ml-8`}
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect
                                        y="7"
                                        width="16"
                                        height="2"
                                        rx="1"
                                        className={`transform origin-center transition duration-200 ease-out ${
                                            isAccording2 === index && "!rotate-180"
                                        }`}
                                    />
                                    <rect
                                        y="7"
                                        width="16"
                                        height="2"
                                        rx="1"
                                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                            isAccording2 === index && "!rotate-180"
                                        }`}
                                    />
                                </svg>
                            </div>
                            <div
                                className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                                    isAccording2 === index
                                        ? "grid-rows-[1fr] opacity-100 mt-4"
                                        : "grid-rows-[0fr] opacity-0"
                                }`}>
                                <p className="dark:text-darkSubTextColor text-[1rem] overflow-hidden">
                                    {according.description}
                                </p>
                            </div>
                        </article>
                    ))
                    }
                </div>
            </section>
        </SectionWrapper>
    );
};

export default Faq;