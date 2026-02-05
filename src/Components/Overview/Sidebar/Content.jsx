import OverviewIcon from "@/SvgIcons/OverviewIcon.jsx";
import InstallationIcon from "@/SvgIcons/InstallationIcon.jsx";
import ResourceIcon from "@/SvgIcons/ResourceIcon.jsx";
import TemplatesIcon from "@/SvgIcons/TemplatesIcon.jsx";
import { CollapseMenu, DefaultMenu } from "./children/Menu/index.jsx";

// i18n
import { useTranslation } from 'react-i18next';

const Content = () => {
    const { t } = useTranslation();

    return (
        <>
            {/*  get starts  */}
            <DefaultMenu
                items={[
                    {
                        bgColor: "bg-blue-600",
                        borderColor: "border-blue-600",
                        textColor: "text-blue-600",
                        title: t('sidebar.overview'),
                        icon: OverviewIcon,
                        url: "/docs/overview",
                    },
                    {
                        bgColor: "bg-green-600",
                        borderColor: "border-green-600",
                        textColor: "text-green-600",
                        title: t('sidebar.installation'),
                        icon: InstallationIcon,
                        url: "/docs/installation",
                    },
                    {
                        bgColor: "bg-purple-600",
                        borderColor: "border-purple-600",
                        textColor: "text-purple-600",
                        title: t('sidebar.resources'),
                        icon: ResourceIcon,
                        url: "/docs/resources",
                    },
                    {
                        bgColor: "bg-indigo-600",
                        borderColor: "border-indigo-600",
                        textColor: "text-indigo-600",
                        title: t('sidebar.templates'),
                        icon: TemplatesIcon,
                        url: "/templates",
                    },
                ]}
            />
            {/*  components  */}
            <CollapseMenu
                title={t('sidebar.components')}
                items={[
                    {
                        title: t('sidebar.all_components'),
                        url: "/components/all-components",
                    },
                    {
                        label: t('sidebar.form'),
                    },
                    {
                        title: t('sidebar.input'),
                        url: "/components/input-text",
                        parent: 'FORM'
                    },
                    {
                        title: t('sidebar.textarea'),
                        url: "/components/input-textarea",
                        parent: 'FORM'
                    },
                    {
                        title: t('sidebar.number'),
                        url: "/components/input-number",
                        parent: 'FORM'
                    },
                    {
                        title: t('sidebar.checkbox'),
                        url: "/components/input-checkbox",
                        parent: 'FORM'
                    },
                    {
                        title: t('sidebar.switch'),
                        url: "/components/input-switch",
                        parent: 'FORM'
                    },
                    {
                        title: t('sidebar.strong_password'),
                        url: "/components/strong-password",
                        parent: 'FORM'
                    },
                    {
                        title: t('sidebar.select'),
                        url: "/components/input-select",
                        parent: 'FORM'
                    },
                    {
                        title: t('sidebar.radio'),
                        url: "/components/input-radio",
                        parent: 'FORM'
                    },
                    {
                        title: t('sidebar.range'),
                        url: "/components/input-range",
                        parent: 'FORM'
                    },
                    {
                        title: t('sidebar.file'),
                        url: "/components/input-file",
                        parent: 'FORM'
                    },
                    {
                        title: t('sidebar.otp_input'),
                        url: "/components/otp-input",
                        parent: 'FORM'
                    },
                    {
                        label: t('sidebar.buttons'),
                    },
                    {
                        title: t('sidebar.normal_button'),
                        url: "/components/normal-button",
                        parent: 'BUTTONS'
                    },
                    {
                        title: t('sidebar.login_button'),
                        url: "/components/login-buttons",
                        parent: 'BUTTONS'
                    },
                    {
                        title: t('sidebar.dropdown_button'),
                        url: "/components/dropdown-button",
                        parent: 'BUTTONS'
                    },
                    {
                        title: t('sidebar.animated_button'),
                        url: "/components/animated-button",
                        parent: 'BUTTONS',
                        isUpdated: true
                    },
                    {
                        label: t('sidebar.surfaces'),
                    },
                    {
                        title: t('sidebar.drag_drop'),
                        url: "/components/drag-and-drop",
                        parent: 'SURFACES'
                    },
                    {
                        title: t('sidebar.comparison_card'),
                        url: "/components/comparison-card",
                        parent: 'SURFACES',
                    },
                    {
                        title: t('sidebar.card_components'),
                        url: "/components/cards",
                        parent: 'SURFACES'
                    },
                    {
                        title: t('sidebar.drawer'),
                        url: "/components/drawer",
                        parent: 'SURFACES',
                        isNewComponent: true,
                    },
                    {
                        title: t('sidebar.animated_cards'),
                        url: "/components/animated-cards",
                        parent: 'SURFACES'
                    },
                    {
                        title: t('sidebar.image_cropper'),
                        url: "/components/image-cropper",
                        parent: 'SURFACES',
                    },
                    {
                        title: t('sidebar.accordion'),
                        url: "/components/according",
                        parent: 'SURFACES'
                    },
                    {
                        title: t('sidebar.app_bar'),
                        url: "/components/appbar",
                        parent: 'SURFACES'
                    },
                    {
                        title: t('sidebar.image_gallery'),
                        url: "/components/image-gallery",
                        parent: 'SURFACES'
                    },
                    {
                        title: t('sidebar.carousel'),
                        url: "/components/carousel",
                        parent: 'SURFACES',
                        isUpdated: true,
                    },
                    {
                        label: t('sidebar.navigation'),
                    },
                    {
                        title: t('sidebar.pagination'),
                        url: "/components/pagination",
                        parent: 'NAVIGATION'
                    },
                    {
                        title: t('sidebar.progress_bar'),
                        url: "/components/progress-bar",
                        parent: 'NAVIGATION',
                        isUpdated: true,
                    },
                    {
                        title: t('sidebar.chip'),
                        url: "/components/chip",
                        parent: 'NAVIGATION'
                    },
                    {
                        title: t('sidebar.marquee'),
                        url: "/components/marquee",
                        parent: 'NAVIGATION',
                    },
                    {
                        title: t('sidebar.timer'),
                        url: "/components/timer",
                        parent: 'NAVIGATION'
                    },
                    {
                        title: t('sidebar.breadcrumb'),
                        url: "/components/breadcrumb",
                        parent: 'NAVIGATION',
                        isUpdated: true
                    },
                    {
                        title: t('sidebar.rating'),
                        url: "/components/rating",
                        parent: 'NAVIGATION'
                    },
                    {
                        title: t('sidebar.stepper'),
                        url: "/components/stepper",
                        parent: 'NAVIGATION'
                    },
                    {
                        title: t('sidebar.modal'),
                        url: "/components/modal",
                        parent: 'NAVIGATION',
                        isUpdated: true,
                    },
                    {
                        title: t('sidebar.tabs'),
                        url: "/components/tabs",
                        parent: 'NAVIGATION'
                    },
                    {
                        label: t('sidebar.feedback'),
                    },
                    {
                        title: t('sidebar.context_menu'),
                        url: "/components/context-menu",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: t('sidebar.skeleton'),
                        url: "/components/skeleton",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: t('sidebar.tree_dropdown'),
                        url: "/components/tree-dropdown",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: t('sidebar.alert_message'),
                        url: "/components/alert-message",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: t('sidebar.dialog'),
                        url: "/components/dialog-message",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: t('sidebar.testimonial'),
                        url: "/components/testimonials",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: t('sidebar.loader'),
                        url: "/components/loader",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: t('sidebar.notification'),
                        url: "/components/notification",
                        parent: 'FEEDBACK'
                    },
                    {
                        label: t('sidebar.data_display'),
                    },
                    {
                        title: t('sidebar.badge'),
                        url: "/components/badge",
                        parent: 'DATA DISPLAY'
                    },
                    {
                        title: t('sidebar.table'),
                        url: "/components/table",
                        parent: 'DATA DISPLAY'
                    },
                    {
                        title: t('sidebar.redo_undo'),
                        url: "/components/redo-undo",
                        parent: 'DATA DISPLAY',
                    },
                    {
                        title: t('sidebar.github_activity_graph'),
                        url: "/components/github-activity-graph",
                        parent: 'DATA DISPLAY',
                    },
                    {
                        title: t('sidebar.tooltip'),
                        url: "/components/tooltip",
                        parent: 'DATA DISPLAY'
                    },
                    {
                        title: t('sidebar.pie_chart'),
                        url: "/components/pie-chart",
                        parent: 'DATA DISPLAY'
                    },
                    {
                        title: t('sidebar.graph_chart'),
                        url: "/components/graph-chart",
                        parent: 'DATA DISPLAY',
                        isNewComponent: true
                    },
                    {
                        title: t('sidebar.timeline'),
                        url: "/components/timeline",
                        parent: 'DATA DISPLAY',
                    },
                    {
                        label: t('sidebar.ecommerce'),
                    },
                    {
                        title: t('sidebar.product_card'),
                        url: "/components/product-card",
                        parent: 'E-COMMERCE',
                    },
                    {
                        title: t('sidebar.ads_card'),
                        url: "/components/ads-card",
                        parent: 'E-COMMERCE',
                    },
                    {
                        label: t('sidebar.randoms'),
                    },
                    {
                        title: t('sidebar.code'),
                        url: "/components/code",
                        parent: 'RANDOMS'
                    },
                    {
                        title: t('sidebar.snippet'),
                        url: "/components/snippet",
                        parent: 'RANDOMS'
                    },
                ]}
            />
            {/*  animations  */}
            <CollapseMenu
                title={t('sidebar.animations')}
                items={[
                    {
                        title: t('sidebar.installation'),
                        url: "/animations/installation",
                    },
                    {
                        label: t('sidebar.cards'),
                    },
                    {
                        title: t('sidebar.magic_card'),
                        url: "/animations/magic-card",
                        parent: 'CARDS'
                    },
                    {
                        title: t('sidebar.reveal_card'),
                        url: "/animations/reveal-card",
                        parent: 'CARDS'
                    },
                    {
                        title: t('sidebar.magnet_card'),
                        url: "/animations/magnet-card",
                        parent: 'CARDS'
                    },
                    {
                        label: t('sidebar.layouts'),
                    },
                    {
                        title: t('sidebar.sorting_animation'),
                        url: "/animations/sorting-animation",
                        parent: 'LAYOUTS'
                    },
                    {
                        title: t('sidebar.layout_switcher'),
                        url: "/animations/layout-switcher",
                        parent: 'LAYOUTS'
                    },
                    {
                        title: t('sidebar.drag_animations'),
                        url: "/animations/drag-animations",
                        parent: 'LAYOUTS'
                    },
                    {
                        title: t('sidebar.animated_accordion'),
                        url: "/animations/animated-accordion",
                        parent: 'LAYOUTS'
                    },
                    {
                        label: t('sidebar.buttons'),
                    },
                    {
                        title: t('sidebar.reaction_trail'),
                        url: "/animations/reaction-trail",
                        parent: 'BUTTONS',
                        isUpdated: true,
                    },
                    {
                        title: t('sidebar.hover_effects'),
                        url: "/animations/hover-effects",
                        parent: 'BUTTONS'
                    },
                    {
                        label: t('sidebar.visuals'),
                    },
                    {
                        title: t('sidebar.text_effects'),
                        url: "/animations/text-effects",
                        parent: 'VISUALS',
                        isUpdated: true,
                    },
                    {
                        title: t('sidebar.background_animations'),
                        url: "/animations/background-animations",
                        parent: 'VISUALS'
                    },
                    {
                        title: t('sidebar.chat_screen'),
                        url: "/animations/chat-screen",
                        parent: 'VISUALS'
                    },
                    {
                        title: t('sidebar.dropdown_animations'),
                        url: "/animations/dropdown-animations",
                        parent: 'VISUALS'
                    },
                    {
                        title: t('sidebar.mouse_navigations'),
                        url: "/animations/mouse-navigations",
                        isNewComponent: true,
                        parent: 'VISUALS'
                    },
                    {
                        title: t('sidebar.gallery_view'),
                        url: "/animations/gallery-view",
                        parent: 'VISUALS'
                    },
                    {
                        title: t('sidebar.search_placeholder_comp'),
                        url: "/animations/search-placeholder",
                        parent: 'VISUALS',
                        isNewComponent: true
                    },
                ]}
            />
            {/*  blocks  */}
            <CollapseMenu
                title={t('sidebar.blocks')}
                items={[
                    {
                        title: t('sidebar.all_blocks'),
                        url: "/blocks/all-blocks",
                    },
                    {
                        label: t('sidebar.sections'),
                    },
                    {
                        title: t('sidebar.responsive_navbar'),
                        url: "/blocks/responsive-navbar",
                        parent: 'Sections'
                    },
                    {
                        title: t('sidebar.hero_section'),
                        url: "/blocks/hero-section",
                        parent: 'Sections'
                    },
                    {
                        title: t('sidebar.pricing_section'),
                        url: "/blocks/pricing-section",
                        parent: 'Sections'
                    },
                    {
                        title: t('sidebar.responsive_footer'),
                        url: "/blocks/responsive-footer",
                        parent: 'Sections'
                    },
                    {
                        label: t('sidebar.form'),
                    },
                    {
                        title: t('sidebar.contact_form'),
                        url: "/blocks/contact-form",
                        parent: 'Form'
                    },
                    {
                        title: t('sidebar.multi_step_form'),
                        url: "/blocks/multi-step-form",
                        parent: 'Form'
                    },
                    {
                        title: t('sidebar.newsletter_form'),
                        url: "/blocks/newsletter-form",
                        parent: 'Form'
                    },
                    {
                        label: t('sidebar.empty_pages'),
                    },
                    {
                        title: t('sidebar.page_404'),
                        url: "/blocks/404-page",
                        parent: 'Empty Pages'
                    },
                    {
                        title: t('sidebar.empty_page'),
                        url: "/blocks/empty-page",
                        parent: 'Empty Pages'
                    },
                    {
                        label: t('sidebar.ecommerce'),
                    },
                    {
                        title: t('sidebar.offer_grid'),
                        url: "/blocks/offer-grid",
                        parent: 'E-Commerce',
                    },
                    {
                        title: t('sidebar.product_details_page'),
                        url: "/blocks/product-details-page",
                        parent: 'E-Commerce',
                    },
                    {
                        title: t('sidebar.checkout_page'),
                        url: "/blocks/checkout-page",
                        parent: 'E-Commerce',
                    },
                    {
                        label: t('sidebar.random'),
                    },
                    {
                        title: t('sidebar.responsive_search_bar'),
                        url: "/blocks/responsive-search-bar",
                        parent: 'Random'
                    },
                    {
                        title: t('sidebar.responsive_sidebar'),
                        url: "/blocks/responsive-sidebar",
                        parent: 'Random'
                    },
                ]}
            />
        </>
    )
}

export default Content