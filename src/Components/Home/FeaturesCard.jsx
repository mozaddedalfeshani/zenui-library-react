import React from 'react';
import ComponentIcon from "@/SvgIcons/ComponentIcon.jsx";
import CopyToUseIcon from "@/SvgIcons/CopyToUseIcon.jsx";
import ResponsiveIcon from "@/SvgIcons/ResponsiveIcon.jsx";
import ExampleTemplateIcon from "@/SvgIcons/ExampleTemplateIcon.jsx";
import DesignPartIcon from "@/SvgIcons/DesignPartIcon.jsx";
import CodeBoxIcon from "@/SvgIcons/CodeBoxIcon.jsx";
import TailwindCssIcon from "@/SvgIcons/TailwindCssIcon.jsx";
import SectionHead from "./SectionHead.jsx";
import SectionWrapper from "./SectionWrapper.jsx";

// i18n
import { useTranslation } from 'react-i18next';

const FeaturesCard = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <ComponentIcon/>,
            title: t('home.features.500_components'),
            description: t('home.features.500_components_desc'),
            delay: 700
        },
        {
            icon: <CopyToUseIcon/>,
            title: t('home.features.easy_to_use'),
            description: t('home.features.easy_to_use_desc'),
            delay: 1000
        },
        {
            icon: <ResponsiveIcon/>,
            title: t('home.features.responsive_design'),
            description: t('home.features.responsive_design_desc'),
            delay: 1300
        },
        {
            icon: <ExampleTemplateIcon/>,
            title: t('home.features.free_templates'),
            description: t('home.features.free_templates_desc'),
            delay: 1600
        },
        {
            icon: <CodeBoxIcon/>,
            title: t('home.features.developer_friendly'),
            description: t('home.features.developer_friendly_desc'),
            delay: 1600
        },
        {
            icon: <DesignPartIcon/>,
            title: t('home.features.modern_design'),
            description: t('home.features.modern_design_desc'),
            delay: 1600
        },
        {
            icon: <TailwindCssIcon/>,
            title: t('home.features.tailwind_css'),
            description: t('home.features.tailwind_css_desc'),
            delay: 1600
        },
    ];

    return (
        <SectionWrapper>
            <SectionHead
                description={t('home.features.description')} title={t('home.features.title')} isSubjet={t('home.features.subject')}/>

            <div
                className="grid grid-cols-1 640px:grid-cols-2 1024px:grid-cols-3 gap-8 mt-14 relative max-w-[1300px] mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-high border dark:shadow-[0px_80px_50px_-32px_rgba(255,255,255,0.02)] shadow-[0px_80px_50px_-32px_rgba(107,110,148,.04)] dark:border-darkBorderColor transition-all duration-500 border-gray-100"
                    >
                        <div className="mb-3">
                            {feature.icon}
                            <h4 className="text-text mt-6 dark:text-darkTextColor font-[600] text-[1.4rem]">
                                {feature.title}
                            </h4>
                        </div>
                        <p className="text-[1rem] dark:text-darkSubTextColor text-black/60">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default FeaturesCard;