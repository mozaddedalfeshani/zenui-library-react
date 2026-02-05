import React from 'react';
import {Helmet} from "react-helmet";
import BlocksFooter from "@shared/Block/BlocksFooter.jsx";

// i18n
import { useTranslation } from 'react-i18next';

const Installation = () => {
    const { t } = useTranslation();

    return (
        <div className='w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
            <h1 className='text-[2rem] 425px:text-[2.7rem] font-[600] text-brandColor'>
                {t('installation.title')}
            </h1>
            <div className='mt-3 w-full 1024px:w-[80%]'>
                <p className='text-[1rem] text-gray-900 dark:text-darkSubTextColor'>
                    {t('installation.intro_1_prefix')} <b>{t('installation.intro_1_bold_1')}</b> {t('installation.intro_1_middle')} <b>{t('installation.intro_1_bold_2')}</b>{t('installation.intro_1_suffix')}
                </p>

                <p className='mt-3 text-[1rem] text-gray-900 dark:text-darkSubTextColor'>
                    {t('installation.intro_2')}
                </p>
            </div>

            <div className='w-full 1024px:w-[80%] mt-6'>
                <h3 className='text-[1.5rem] font-[600] text-brandColor'>{t('installation.why_title')}</h3>
                <p className='mt-3 text-[1rem] text-gray-900 dark:text-darkSubTextColor'>
                    {t('installation.why_desc')}
                </p>
            </div>

            <div
                className='mt-6 w-full 1024px:w-[80%]  text-[1rem] text-gray-900 bg-orange-50 p-[15px] rounded-[8px] border-l-[5px] border-orange-400 dark:bg-slate-800 dark:text-darkSubTextColor dark:border-slate-600'>
                {t('installation.icon_warning_prefix')} <a href='https://react-icons.github.io/react-icons/' target='_blank' rel='noreferrer'
                               className='font-bold hover:underline'>{t('installation.icon_warning_link')}</a> {t('installation.icon_warning_suffix')} <span
                className='py-1 px-3 bg-orange-100 dark:bg-slate-900 rounded-md text-[0.9rem] font-mono'>npm install react-icons</span>
            </div>

            <div className='mt-6 w-full 1024px:w-[80%]'>
                <h3 className='text-[1.5rem] font-[600] text-brandColor'>{t('installation.requirements_title')}</h3>
                <p className='mt-3 dark:text-darkSubTextColor'>
                    {t('installation.requirements_desc')}
                </p>
                <ul className='list-disc ml-8 mt-4 flex dark:text-darkSubTextColor flex-col gap-[15px]'>
                    <li>
                        <b>{t('installation.req_tailwind_title')}</b>
                        <span> {t('installation.req_tailwind_desc')}</span>
                    </li>
                    <li>
                        <b>{t('installation.req_react_title')}</b>
                        <span> {t('installation.req_react_desc')}</span>
                    </li>
                    <li>
                        <b>{t('installation.req_next_title')}</b>
                        <span> {t('installation.req_next_desc')}</span>
                    </li>
                </ul>
            </div>

            <div className='mt-6 w-full 1024px:w-[80%]'>
                <h3 className='text-[1.5rem] font-[600] text-brandColor'>{t('installation.setup_title')}</h3>
                <p className='mt-3 text-[1rem] text-gray-900 dark:text-darkSubTextColor'>
                    {t('installation.setup_desc')}
                </p>
                <ul className='list-disc ml-8 mt-4 dark:text-darkSubTextColor flex flex-col gap-[15px]'>
                    <li>
                        <b>{t('installation.req_tailwind_title')}</b>
                        <span> {t('installation.setup_tailwind_desc')}</span>
                        <br/>
                        <a href='https://tailwindcss.com/docs/installation' className='text-brandColor hover:underline'>Tailwind
                            CSS Installation Guide</a>
                    </li>
                    <li>
                        <b>{t('installation.req_react_title')}</b>
                        <span> {t('installation.setup_react_desc')}</span>
                        <br/>
                        <a href='https://tailwindcss.com/docs/guides/create-react-app'
                           className='text-brandColor hover:underline'>React + Tailwind CSS Setup
                            Guide</a>
                    </li>
                    <li>
                        <b>{t('installation.req_next_title')}</b>
                        <span> {t('installation.setup_next_desc')}</span>
                        <br/>
                        <a href='https://tailwindcss.com/docs/guides/nextjs'
                           className='text-brandColor hover:underline'>Next.js
                            + Tailwind CSS Setup Guide</a>
                    </li>
                </ul>
            </div>

            <div
                className='mt-6 w-full 1024px:w-[80%]  text-[1rem] text-gray-900 bg-brandColor/10 p-[15px] rounded-[8px] border-l-[5px] dark:bg-slate-800 dark:text-darkSubTextColor dark:border-slate-600 border-brandColor'>
                {t('installation.final_note')}
            </div>

            <div className='w-full 1024px:w-[80%]'>
                <BlocksFooter backUrl='/docs/overview' backName='overview'
                              forwardUrl='/docs/resources' forwardName='resources'/>
            </div>

            <Helmet>
                <title>Get-Started - Installation</title>
            </Helmet>
        </div>
    );
};

export default Installation;