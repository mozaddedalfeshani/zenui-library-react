import {FiArrowUpRight} from "react-icons/fi";

// i18n
import { useTranslation } from 'react-i18next';

const NewsBoard = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-brandColor flex items-center justify-center gap-1 w-full px-5 py-3 md:h-[50px]">
            <p className="text-base text-white text-center font-medium">
                {t('home.newsboard_prefix')}
                <a
                href="https://vueui.zenui.net"
                target="_blank"
                rel="noreferrer"
                className="hover:underline">{t('home.newsboard_link')}</a>
                {t('home.newsboard_suffix')}
                <FiArrowUpRight className='text-white text-[1.4rem] inline ml-1'/>
            </p>
        </section>
    );
};

export default NewsBoard;