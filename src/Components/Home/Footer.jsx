import React from "react";

// icons
import {FaFacebook, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {SiGmail} from "react-icons/si";
import useZenuiStore from "@/Store/Index.js";
import SectionWrapper from "./SectionWrapper.jsx";
import {GoArrowUpRight} from "react-icons/go";

// i18n
import { useTranslation } from 'react-i18next';

const Footer = ({needMuchMargin = true}) => {
    const { t } = useTranslation();
    const {theme} = useZenuiStore()

    const [result, setResult] = React.useState("");

    const onSubmitSubscribe = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a60501d5-436f-454c-9d4f-a716f4d286c7");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult(t('footer.subscription_success'));
            event.target.reset();
            setTimeout(() => {
                setResult('')
            }, 4000)
        } else {
            console.error("Error", data);
        }
    };

    return (
        <footer
            className={`${needMuchMargin ? 'mt-16' : 'mt-8'} 1404px:px-12 w-full border-t border-gray-100 pb-8 transition-all duration-500 dark:border-darkBorderColor`}>
            <SectionWrapper className='mt-8 max-w-[1600px]'>
                <div
                    className="w-full flex 640px:flex-row flex-col flex-wrap 1024px:gap-0 gap-8 justify-between items-start">
                    <div className="w-full 640px:w-[40%] 1024px:w-[28%]">
                        <img src="/footer_logo.png" alt="logo" className="w-[150px] 640px:w-[180px] my-3"/>

                        <p className="dark:text-darkSubTextColor text-black/70 text-[1rem]">
                            {t('footer.description')}
                        </p>

                        <div className="flex items-center gap-4 mt-5">
                            <a href="https://web.facebook.com/zenuilabs" target='_blank' rel="noreferrer">
                                <FaFacebook
                                    className="text-black/50 dark:text-darkSubTextColor text-[1.4rem] hover:text-[#0FABCA] transition-colors duration-300"/>
                            </a>

                            <a href="https://www.linkedin.com/company/zenui-labs/" target='_blank' rel="noreferrer">
                                <FaLinkedin
                                    className="text-black/50 dark:text-darkSubTextColor text-[1.4rem] hover:text-[#0FABCA] transition-colors duration-300"/>
                            </a>

                            <a href="https://x.com/zenuilabs" target='_blank' rel="noreferrer">
                                <FaXTwitter
                                    className="text-black/50 dark:text-darkSubTextColor text-[1.4rem] hover:text-[#0FABCA] transition-colors duration-300"/>
                            </a>

                            <a href="mailto:zenuilibrary@gmail.com">
                                <SiGmail
                                    className="text-black/50 dark:text-darkSubTextColor text-[1.4rem] hover:text-[#0FABCA] transition-colors duration-300"/>
                            </a>
                        </div>

                    </div>

                    <div className="flex gap-2 flex-col mt-4">
                        <h3 className="font-[600] dark:text-darkTextColor text-[20px] capitalize">
                            {t('footer.tools')}
                        </h3>
                        <ul className="footer font-[400] text-black/70 dark:text-darkSubTextColor mt-2 text-[1rem] flex flex-col gap-2">
                            <li>
                                <p><a href='/shortcut-generator'>{t('tools_dropdown.shotkey')}</a></p>
                                <span><a href='/shortcut-generator'>{t('tools_dropdown.shotkey')}</a></span>
                            </li>
                            <li>
                                <p><a href='/color-palette'>{t('tools_dropdown.color_palettes')}</a></p>
                                <span><a href='/color-palette'>{t('tools_dropdown.color_palettes')}</a></span>
                            </li>
                            <li>
                                <p><a href='/icons'>{t('tools_dropdown.icons')}</a></p>
                                <span><a href='/icons'>{t('tools_dropdown.icons')}</a></span>
                            </li>
                            <li>
                                <p><a href='/config-generator'>{t('tools_dropdown.config_ai')}</a></p>
                                <span><a href='/config-generator'>{t('tools_dropdown.config_ai')}</a></span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex gap-2 flex-col mt-4">
                        <h3 className="font-[600] dark:text-darkTextColor text-[20px] capitalize">
                            {t('footer.products')}
                        </h3>
                        <ul className="footer font-[400] text-black/70 dark:text-darkSubTextColor mt-2 text-[1rem] flex flex-col gap-2">
                            <li>
                                <p><a href='https://vueui.zenui.net/' target='_blank' rel='noreferrer'>ZenUI Library
                                    Vue</a></p>
                                <span><a href='https://vueui.zenui.net/' target='_blank' rel='noreferrer'>ZenUI Library Vue</a></span>
                            </li>
                            <li>
                                <p><a href='https://react-hooks.zenui.net/' target='_blank' rel='noreferrer'>React
                                    Hooks</a></p>
                                <span><a href='https://react-hooks.zenui.net/' target='_blank' rel='noreferrer'>React Hooks</a></span>
                            </li>
                            <li>
                                <p><a href='https://color-picker.zenui.net/' target='_blank' rel='noreferrer'>ZenUI
                                    Color Picker</a></p>
                                <span><a href='https://color-picker.zenui.net/' target='_blank' rel='noreferrer'>ZenUI Color Picker</a></span>
                            </li>
                            <li>
                                <p><a href='https://readmestudio.zenui.net/' target='_blank' rel='noreferrer'>Readme
                                    Studio</a></p>
                                <span><a href='https://readmestudio.zenui.net/' target='_blank' rel='noreferrer'>Readme Studio</a></span>
                            </li>
                            <li>
                                <p><a href='https://www.npmjs.com/package/zenui-image-react' target='_blank'
                                      rel='noreferrer'>ZenUI Image React</a></p>
                                <span><a href='https://www.npmjs.com/package/zenui-image-react' target='_blank'
                                         rel='noreferrer'>ZenUI Image React</a></span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex gap-2 flex-col mt-4">
                        <h3 className="font-[600] dark:text-darkTextColor text-[20px] capitalize">
                            {t('footer.company')}
                        </h3>
                        <ul className="footer font-[400] text-[1rem] dark:text-darkSubTextColor mt-2 text-black/70 flex flex-col gap-2">
                            <li>
                                <p><a href='/contributors'>{t('navbar.contributors')}</a></p>
                                <span><a href='/contributors'>{t('navbar.contributors')}</a></span>
                            </li>
                            <li>
                                <p><a href='/privacy-policy'>Privacy policy</a></p>
                                <span><a href='/privacy-policy'>Privacy policy</a></span>
                            </li>
                            <div className='relative'>
                                <div
                                    className='w-2 h-2 animate-[ping_1.5s_linear_infinite] absolute -top-0.5 right-0 bg-green-500 rounded-full'></div>
                                <li>
                                    <p><a href='/zenui-hero-docs'>Become ZenUI Hero</a></p>
                                    <span><a href='/zenui-hero-docs'>Become ZenUI Hero</a></span>
                                </li>
                            </div>
                            <li>
                                <p><a href='https://github.com/Asfak00/zenui-library/releases' target='_blank'
                                      className='flex items-center
                                 gap-1' rel="noreferrer">Changelog
                                    <GoArrowUpRight className='text-[1.1rem] mt-0.5'/>
                                </a></p>
                                <span><a href='https://github.com/Asfak00/zenui-library/releases' target='_blank'
                                         className='flex items-center
                                 gap-1' rel="noreferrer">Changelog
                                <GoArrowUpRight className='text-[1.1rem] mt-0.5'/>
                                </a></span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-2 flex-col mt-4">
                        <h3 className="font-[600] dark:text-darkTextColor text-[20px] capitalize">
                            {t('footer.join_newsletter')}
                        </h3>

                        <form onSubmit={onSubmitSubscribe} className='mt-2'>
                            <label
                                htmlFor="email"
                                className="text-black/70 text-[1rem] dark:text-darkSubTextColor font-[400] mb-2"
                            >
                                {t('footer.your_email')}
                            </label>
                            <div className="relative mt-1">
                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    required
                                    placeholder="example@gmail.com"
                                    className="py-3 pl-4 pr-[120px] border dark:text-darkTextColor dark:placeholder:text-darkSubTextColor/50 focus:border-[#0FABCA] dark:border-darkBorderColor w-full bg-transparent border-gray-200 rounded-md focus:ring-0 outline-none"
                                />
                                <button type="submit"
                                        className={`absolute top-0 h-full right-0 px-4 text-white bg-[#0FABCA] rounded-r-md transition-all duration-300`}>
                                    {t('footer.subscribe')}
                                </button>
                            </div>
                        </form>
                        <p className='text-[14px] text-[#0FABCA]'>{result}</p>
                    </div>
                </div>

                <div
                    className='mt-14 1024px:mx-auto flex w-[250px] flex-wrap 1024px:flex-nowrap 1024px:items-center 1024px:justify-center 1024px:w-[800px] gap-4 1024px:gap-8'>
                    <a href='https://web.facebook.com/share/g/D8DbMaprfWPksSGF/' target='_blank'
                       className='border border-blue-600 rounded-high flex w-full py-[5px] px-2.5 gap-3 items-center'
                       rel="noreferrer">
                        <img src='https://i.ibb.co.com/vJynhGR/Facebook-Logo-2023.png'
                             alt='facebook' className='w-[28px]'/>

                        <div>
                            <h4 className='text-[0.9rem] leading-[22px] font-[600] dark:text-darkTextColor text-blue-600'>{t('footer.facebook_community')}</h4>
                            <p className='text-[0.7rem] font-[300] dark:text-darkSubTextColor text-gray-700'>180+
                                {t('footer.members')}</p>
                        </div>
                    </a>

                    {
                        theme === 'dark' ? (
                            <a href="https://www.producthunt.com/posts/zenui-library-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-zenui&#0045;library&#0045;2"
                               className='cursor-pointer w-full rounded-md flex items-center gap-[14px]'
                               target="_blank" rel="noreferrer"><img
                                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=490875&theme=dark&t=1746465887663"
                                alt="ZENUI&#0032;LIBRARY - Free&#0032;Templates&#0044;&#0032;Components&#0032;&#0038;&#0032;Icons&#0032;for&#0032;Developers | Product Hunt"/></a>
                        ) : (
                            <a href="https://www.producthunt.com/posts/zenui-library-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-zenui&#0045;library&#0045;2"
                               className='cursor-pointer w-full rounded-md flex items-center gap-[14px]'
                               target="_blank" rel="noreferrer"><img
                                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=490875&theme=light&t=1746458743385"
                                alt="ZENUI&#0032;LIBRARY - Free&#0032;Templates&#0044;&#0032;Components&#0032;&#0038;&#0032;Icons&#0032;for&#0032;Developers | Product Hunt"/></a>
                        )
                    }


                    <a href='https://discord.gg/ysqmqNapZW' target='_blank'
                       className='border border-blue-400 rounded-high flex w-full py-[5px] px-2.5 gap-2 items-center'
                       rel="noreferrer">
                        <img src='https://i.ibb.co.com/V07rXpTJ/download.png'
                             alt='facebook' className='w-[30px] rounded-full'/>

                        <div>
                            <h4 className='text-[0.9rem] leading-[22px] font-[600] dark:text-darkTextColor text-blue-500'>{t('footer.discord_community')}</h4>
                            <p className='text-[0.7rem] font-[300] dark:text-darkSubTextColor text-gray-700'>120+
                                {t('footer.members')}</p>
                        </div>
                    </a>

                </div>

                <div
                    className="w-full border-t dark:border-darkBorderColor border-gray-100 flex items-center 425px:flex-row flex-col 425px:gap-0 gap-5 justify-center mt-12 pt-6">
                    <p className="text-gray-400 dark:text-darkSubTextColor/70 font-normal text-center text-[0.8rem]">
                        {t('footer.product_of')} <a href='https://zenui.net' target="_blank"
                                        className='text-brandColor'>@zenui-labs</a>
                    </p>
                </div>
            </SectionWrapper>
        </footer>
    );
};

export default Footer;