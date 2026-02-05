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
                        title: "Input",
                        url: "/components/input-text",
                        parent: 'FORM'
                    },
                    {
                        title: "Textarea",
                        url: "/components/input-textarea",
                        parent: 'FORM'
                    },
                    {
                        title: "Number",
                        url: "/components/input-number",
                        parent: 'FORM'
                    },
                    {
                        title: "Checkbox",
                        url: "/components/input-checkbox",
                        parent: 'FORM'
                    },
                    {
                        title: "Switch",
                        url: "/components/input-switch",
                        parent: 'FORM'
                    },
                    {
                        title: "Strong Password",
                        url: "/components/strong-password",
                        parent: 'FORM'
                    },
                    {
                        title: "Select",
                        url: "/components/input-select",
                        parent: 'FORM'
                    },
                    {
                        title: "Radio",
                        url: "/components/input-radio",
                        parent: 'FORM'
                    },
                    {
                        title: "Range",
                        url: "/components/input-range",
                        parent: 'FORM'
                    },
                    {
                        title: "File",
                        url: "/components/input-file",
                        parent: 'FORM'
                    },
                    {
                        title: "OTP Input",
                        url: "/components/otp-input",
                        parent: 'FORM'
                    },
                    {
                        label: t('sidebar.buttons'),
                    },
                    {
                        title: "Normal Button",
                        url: "/components/normal-button",
                        parent: 'BUTTONS'
                    },
                    {
                        title: "Login Button",
                        url: "/components/login-buttons",
                        parent: 'BUTTONS'
                    },
                    {
                        title: "Dropdown Button",
                        url: "/components/dropdown-button",
                        parent: 'BUTTONS'
                    },
                    {
                        title: "Animated Button",
                        url: "/components/animated-button",
                        parent: 'BUTTONS',
                        isUpdated: true
                    },
                    {
                        label: t('sidebar.surfaces'),
                    },
                    {
                        title: "Drag & Drop",
                        url: "/components/drag-and-drop",
                        parent: 'SURFACES'
                    },
                    {
                        title: "Comparison Card",
                        url: "/components/comparison-card",
                        parent: 'SURFACES',
                    },
                    {
                        title: "Cards",
                        url: "/components/cards",
                        parent: 'SURFACES'
                    },
                    {
                        title: "Drawer",
                        url: "/components/drawer",
                        parent: 'SURFACES',
                        isNewComponent: true,
                    },
                    {
                        title: "Animated Cards",
                        url: "/components/animated-cards",
                        parent: 'SURFACES'
                    },
                    {
                        title: "Image Cropper",
                        url: "/components/image-cropper",
                        parent: 'SURFACES',
                    },
                    {
                        title: "Accordion",
                        url: "/components/according",
                        parent: 'SURFACES'
                    },
                    {
                        title: "App bar",
                        url: "/components/appbar",
                        parent: 'SURFACES'
                    },
                    {
                        title: "Image Gallery",
                        url: "/components/image-gallery",
                        parent: 'SURFACES'
                    },
                    {
                        title: "Carousel",
                        url: "/components/carousel",
                        parent: 'SURFACES',
                        isUpdated: true,
                    },
                    {
                        label: t('sidebar.navigation'),
                    },
                    {
                        title: "Pagination",
                        url: "/components/pagination",
                        parent: 'NAVIGATION'
                    },
                    {
                        title: "Progress Bar",
                        url: "/components/progress-bar",
                        parent: 'NAVIGATION',
                        isUpdated: true,
                    },
                    {
                        title: "Chip",
                        url: "/components/chip",
                        parent: 'NAVIGATION'
                    },
                    {
                        title: "Marquee",
                        url: "/components/marquee",
                        parent: 'NAVIGATION',
                    },
                    // {
                    //     title: "Slider",
                    //     url: "/components/slider",
                    //     parent: 'NAVIGATION',
                    //     isNewComponent: true,
                    // },
                    {
                        title: "Timer",
                        url: "/components/timer",
                        parent: 'NAVIGATION'
                    },
                    {
                        title: "Breadcrumb",
                        url: "/components/breadcrumb",
                        parent: 'NAVIGATION',
                        isUpdated: true
                    },
                    {
                        title: "Rating",
                        url: "/components/rating",
                        parent: 'NAVIGATION'
                    },
                    {
                        title: "Stepper",
                        url: "/components/stepper",
                        parent: 'NAVIGATION'
                    },
                    {
                        title: "Modal",
                        url: "/components/modal",
                        parent: 'NAVIGATION',
                        isUpdated: true,
                    },
                    {
                        title: "Tabs",
                        url: "/components/tabs",
                        parent: 'NAVIGATION'
                    },
                    {
                        label: t('sidebar.feedback'),
                    },
                    {
                        title: "Context Menu",
                        url: "/components/context-menu",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: "Skeleton",
                        url: "/components/skeleton",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: "Tree Dropdown",
                        url: "/components/tree-dropdown",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: "Alert Message",
                        url: "/components/alert-message",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: "Dialog",
                        url: "/components/dialog-message",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: "Testimonial",
                        url: "/components/testimonials",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: "Loader",
                        url: "/components/loader",
                        parent: 'FEEDBACK'
                    },
                    {
                        title: "Notification",
                        url: "/components/notification",
                        parent: 'FEEDBACK'
                    },
                    {
                        label: t('sidebar.data_display'),
                    },
                    {
                        title: "Badge",
                        url: "/components/badge",
                        parent: 'DATA DISPLAY'
                    },
                    {
                        title: "Table",
                        url: "/components/table",
                        parent: 'DATA DISPLAY'
                    },
                    {
                        title: "Redo & Undo",
                        url: "/components/redo-undo",
                        parent: 'DATA DISPLAY',
                    },
                    {
                        title: "Github Activity Graph",
                        url: "/components/github-activity-graph",
                        parent: 'DATA DISPLAY',
                    },
                    {
                        title: "Tooltip",
                        url: "/components/tooltip",
                        parent: 'DATA DISPLAY'
                    },
                    {
                        title: "Pie Chart",
                        url: "/components/pie-chart",
                        parent: 'DATA DISPLAY'
                    },
                    {
                        title: "Graph Chart",
                        url: "/components/graph-chart",
                        parent: 'DATA DISPLAY',
                        isNewComponent: true
                    },
                    {
                        title: "Timeline",
                        url: "/components/timeline",
                        parent: 'DATA DISPLAY',
                    },
                    {
                        label: t('sidebar.ecommerce'),
                    },
                    {
                        title: "Product Card",
                        url: "/components/product-card",
                        parent: 'E-COMMERCE',
                    },
                    {
                        title: "Ads Card",
                        url: "/components/ads-card",
                        parent: 'E-COMMERCE',
                    },
                    {
                        label: t('sidebar.randoms'),
                    },
                    {
                        title: "Code",
                        url: "/components/code",
                        parent: 'RANDOMS'
                    },
                    {
                        title: "Snippet",
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
                        title: "Magic Card",
                        url: "/animations/magic-card",
                        parent: 'CARDS'
                    },
                    {
                        title: "Reveal Card",
                        url: "/animations/reveal-card",
                        parent: 'CARDS'
                    },
                    {
                        title: "Magnet Card",
                        url: "/animations/magnet-card",
                        parent: 'CARDS'
                    },
                    {
                        label: t('sidebar.layouts'),
                    },
                    {
                        title: "Sorting Animation",
                        url: "/animations/sorting-animation",
                        parent: 'LAYOUTS'
                    },
                    {
                        title: "Layout Switcher",
                        url: "/animations/layout-switcher",
                        parent: 'LAYOUTS'
                    },
                    {
                        title: "Drag Animations",
                        url: "/animations/drag-animations",
                        parent: 'LAYOUTS'
                    },
                    {
                        title: "Animated Accordion",
                        url: "/animations/animated-accordion",
                        parent: 'LAYOUTS'
                    },
                    {
                        label: t('sidebar.buttons'),
                    },
                    {
                        title: "Reaction Trail",
                        url: "/animations/reaction-trail",
                        parent: 'BUTTONS',
                        isUpdated: true,
                    },
                    {
                        title: "Hover Effects",
                        url: "/animations/hover-effects",
                        parent: 'BUTTONS'
                    },
                    {
                        label: t('sidebar.visuals'),
                    },
                    {
                        title: "Text Effects",
                        url: "/animations/text-effects",
                        parent: 'VISUALS',
                        isUpdated: true,
                    },
                    {
                        title: "Background Animations",
                        url: "/animations/background-animations",
                        parent: 'VISUALS'
                    },
                    {
                        title: "Chat Screen",
                        url: "/animations/chat-screen",
                        parent: 'VISUALS'
                    },
                    {
                        title: "Dropdown Animations",
                        url: "/animations/dropdown-animations",
                        parent: 'VISUALS'
                    },
                    {
                        title: "Mouse Navigations",
                        url: "/animations/mouse-navigations",
                        isNewComponent: true,
                        parent: 'VISUALS'
                    },
                    {
                        title: "Gallery View",
                        url: "/animations/gallery-view",
                        parent: 'VISUALS'
                    },
                    {
                        title: "Search Placeholder",
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
                        title: "Responsive Navbar",
                        url: "/blocks/responsive-navbar",
                        parent: 'Sections'
                    },
                    {
                        title: "Hero Section",
                        url: "/blocks/hero-section",
                        parent: 'Sections'
                    },
                    {
                        title: "Pricing Section",
                        url: "/blocks/pricing-section",
                        parent: 'Sections'
                    },
                    {
                        title: "Responsive Footer",
                        url: "/blocks/responsive-footer",
                        parent: 'Sections'
                    },
                    {
                        label: t('sidebar.form'),
                    },
                    {
                        title: "Contact Form",
                        url: "/blocks/contact-form",
                        parent: 'Form'
                    },
                    {
                        title: "Multi-Step Form",
                        url: "/blocks/multi-step-form",
                        parent: 'Form'
                    },
                    {
                        title: "Newsletter Form",
                        url: "/blocks/newsletter-form",
                        parent: 'Form'
                    },
                    {
                        label: t('sidebar.empty_pages'),
                    },
                    {
                        title: "404 Page",
                        url: "/blocks/404-page",
                        parent: 'Empty Pages'
                    },
                    {
                        title: "Empty Page",
                        url: "/blocks/empty-page",
                        parent: 'Empty Pages'
                    },
                    {
                        label: t('sidebar.ecommerce'),
                    },
                    {
                        title: "Offer Grid",
                        url: "/blocks/offer-grid",
                        parent: 'E-Commerce',
                    },
                    {
                        title: "Product Details Page",
                        url: "/blocks/product-details-page",
                        parent: 'E-Commerce',
                    },
                    {
                        title: "Checkout Page",
                        url: "/blocks/checkout-page",
                        parent: 'E-Commerce',
                    },
                    {
                        label: t('sidebar.random'),
                    },
                    {
                        title: "Responsive Search Bar",
                        url: "/blocks/responsive-search-bar",
                        parent: 'Random'
                    },
                    {
                        title: "Responsive Sidebar",
                        url: "/blocks/responsive-sidebar",
                        parent: 'Random'
                    },
                ]}
            />
        </>
    )
}

export default Content