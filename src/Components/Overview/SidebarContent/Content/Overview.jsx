import React from "react";

import ContentHeader from "@shared/ContentHeader";

import {Helmet} from "react-helmet";
import BlocksFooter from "@shared/Block/BlocksFooter.jsx";

// i18n
import { useTranslation } from 'react-i18next';

const Overview = () => {
    const { t } = useTranslation();

    return (
        <aside className='w-full 640px:pl-[2.5rem] px-6 640px:px-10'>

            <h1 className="font-[600] pt-0 text-[2.5rem] 1024px:text-[3rem] uppercase text-brandColor">
                {t('overview.title')}
            </h1>
            <p className="w-full text-text dark:text-darkSubTextColor text-[1rem]">
                {t('overview.intro')}
            </p>

            <div className="mt-8 w-full text-text">
                <ContentHeader text={t('overview.about_title')}/>
                <p className="mt-3 dark:text-darkSubTextColor">
                    {t('overview.about_desc_1')}
                </p>
                <p className="mt-4 dark:text-darkSubTextColor">
                    {t('overview.about_desc_2_prefix')} <a href="https://vueui.zenui.net/" target="_blank"
                                 className="text-brandColor hover:underline" rel="noreferrer">Vue</a>{t('overview.about_desc_2_suffix')}
                </p>
            </div>

            <div className="mt-8 w-full text-text">
                <ContentHeader text={t('overview.what_get_title')}/>
                <ul className="flex flex-col gap-3 list-disc ml-8 mt-3">
                    <li className="p-0 hover:bg-transparent border-none dark:text-darkSubTextColor hover:border-none hover:font-[400] hover:bg-secondary">
                        <b>{t('overview.reusable_components_title')}</b> {t('overview.reusable_components_desc')}
                    </li>
                    <li className="p-0 hover:bg-transparent border-none dark:text-darkSubTextColor hover:border-none hover:font-[400] hover:bg-secondary">
                        <b>{t('overview.templates_title')}</b> {t('overview.templates_desc')}
                    </li>
                    <li className="p-0 hover:bg-transparent border-none dark:text-darkSubTextColor hover:border-none hover:font-[400] hover:bg-secondary">
                        <b>{t('overview.blocks_title')}</b> {t('overview.blocks_desc')}
                    </li>
                    <li className="p-0 hover:bg-transparent border-none dark:text-darkSubTextColor hover:border-none hover:font-[400] hover:bg-secondary">
                        <b>{t('overview.icons_title')}</b> {t('overview.icons_desc')}
                    </li>
                    <li className="p-0 hover:bg-transparent border-none dark:text-darkSubTextColor hover:border-none hover:font-[400] hover:bg-secondary">
                        <b>{t('overview.animated_title')}</b> {t('overview.animated_desc')}
                    </li>
                    <li className="p-0 hover:bg-transparent border-none dark:text-darkSubTextColor hover:border-none hover:font-[400] hover:bg-secondary">
                        <b>{t('overview.color_palette_title')}</b> {t('overview.color_palette_desc')}
                    </li>
                </ul>
            </div>

            <div className="mt-8 w-full text-text">
                <ContentHeader text={t('overview.advantages_title')}/>
                <ul className="flex flex-col gap-3 list-disc ml-8 mt-3">
                    <li className="p-0 hover:bg-transparent border-none dark:text-darkSubTextColor hover:border-none hover:font-[400] hover:bg-secondary">
                        <b>{t('overview.no_dependencies_title')}</b> {t('overview.no_dependencies_desc')}
                    </li>
                    <li className="p-0 hover:bg-transparent border-none dark:text-darkSubTextColor hover:border-none hover:font-[400] hover:bg-secondary">
                        <b>{t('overview.customizability_title')}</b> {t('overview.customizability_desc')}
                    </li>
                    <li className="p-0 hover:bg-transparent border-none dark:text-darkSubTextColor hover:border-none hover:font-[400] hover:bg-secondary">
                        <b>{t('overview.design_title')}</b> {t('overview.design_desc')}
                    </li>
                    <li className="p-0 hover:bg-transparent border-none dark:text-darkSubTextColor hover:border-none hover:font-[400] hover:bg-secondary">
                        <b>{t('overview.prebuild_title')}</b> {t('overview.prebuild_desc')}
                    </li>
                    <li className="p-0 hover:bg-transparent border-none dark:text-darkSubTextColor hover:border-none hover:font-[400] hover:bg-secondary">
                        <b>{t('overview.community_title')}</b> {t('overview.community_desc')}
                    </li>
                </ul>
            </div>

            <BlocksFooter isBackButton={false} forwardName='Installation' forwardUrl='/docs/installation'/>

            <Helmet>
                <title>Get-Started - Overview</title>
            </Helmet>
        </aside>
    );
};

export default Overview;