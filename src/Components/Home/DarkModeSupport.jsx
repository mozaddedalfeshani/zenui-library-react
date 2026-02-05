import React from 'react';

import ComparisonCard from "./ComparisonCard.jsx";
import SectionHead from "./SectionHead.jsx";
import SectionWrapper from "./SectionWrapper.jsx";

// i18n
import { useTranslation } from 'react-i18next';

const DarkModeSupport = () => {
    const { t } = useTranslation();

    return (
        <SectionWrapper className='mt-24 640px:mt-28'>
            <SectionHead
                description={t('home.dark_mode.description')} isSubjet={t('home.dark_mode.subject')}
                title={t('home.dark_mode.title')}/>

            <div
                className='w-full 1024px:w-[80%] mx-auto mt-14 rounded-high dark:shadow-[2px_1px_35px_rgba(255,255,255,0.15)] dark:bg-slate-800 dark:border-slate-700 overflow-hidden bg-white border border-gray-50 p-5 shadow-[2px_1px_20px_rgba(0,0,0,0.04)]'>
                <ComparisonCard/>
            </div>
        </SectionWrapper>
    );
};

export default DarkModeSupport;