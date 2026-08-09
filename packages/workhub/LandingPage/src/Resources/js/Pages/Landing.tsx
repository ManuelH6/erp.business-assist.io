import { Head, usePage } from '@inertiajs/react';
import { useCallback } from 'react';
import { getAdminSetting, getImagePath } from '@/utils/helpers';
import CookieConsent from "@/components/cookie-consent";
// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Modules from './components/Modules';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Type definitions for better type safety
interface SectionData {
    [key: string]: any;
}

interface SectionVisibility {
    [key: string]: boolean;
}

interface ConfigSections {
    sections?: SectionData;
    section_visibility?: SectionVisibility;
    section_order?: string[];
    colors?: {
        primary: string;
        secondary: string;
        accent: string;
    };
}

interface LandingProps {
    settings?: {
        company_name?: string;
        contact_email?: string;
        contact_phone?: string;
        contact_address?: string;
        config_sections?: ConfigSections;
    };
}

export default function Landing({ settings }: LandingProps) {
    const getSectionData = (key: string) => {
        return settings?.config_sections?.sections?.[key] || {};
    };
    const { adminAllSetting } = usePage().props as any;
    const favicon = getAdminSetting('favicon');
    const faviconUrl = favicon ? getImagePath(favicon) : null;

    const colors = settings?.config_sections?.colors || {
        primary: '#10b77f',
        secondary: '#022B3A',
        accent: '#DDE5E9'
    };

    const hexToRgb = (hex: string) => {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };

    const darkenColor = (hex: string, percent: number) => {
        const cleanHex = hex.replace('#', '');
        const num = parseInt(cleanHex, 16);
        const amt = Math.round(2.55 * percent);
        let R = (num >> 16) - amt;
        let G = (num >> 8 & 0x00FF) - amt;
        let B = (num & 0x0000FF) - amt;

        R = R < 0 ? 0 : R > 255 ? 255 : R;
        G = G < 0 ? 0 : G > 255 ? 255 : G;
        B = B < 0 ? 0 : B > 255 ? 255 : B;

        return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    };

    const primaryColor = colors.primary || '#10b77f';
    const secondaryColor = colors.secondary || '#022B3A';
    const accentColor = colors.accent || '#DDE5E9';

    const rgbPrimary = hexToRgb(primaryColor) || { r: 249, g: 115, b: 22 };
    const rgbSecondary = hexToRgb(secondaryColor) || { r: 2, g: 43, b: 58 };
    const primaryHoverColor = darkenColor(primaryColor, 10);

    const dynamicCss = `
        :root {
            --landing-primary: ${primaryColor};
            --landing-primary-hover: ${primaryHoverColor};
            --landing-secondary: ${secondaryColor};
            --landing-accent: ${accentColor};
            --rgb-landing-primary: ${rgbPrimary.r}, ${rgbPrimary.g}, ${rgbPrimary.b};
            --rgb-landing-secondary: ${rgbSecondary.r}, ${rgbSecondary.g}, ${rgbSecondary.b};
        }

        .bg-\\[\\#10b77f\\] {
            background-color: var(--landing-primary) !important;
        }
        .text-\\[\\#10b77f\\] {
            color: var(--landing-primary) !important;
        }
        .hover\\:bg-\\[\\#ea580c\\]:hover {
            background-color: var(--landing-primary-hover) !important;
        }
        .hover\\:border-\\[\\#10b77f\\]:hover {
            border-color: var(--landing-primary) !important;
        }
        .group-hover\\:bg-\\[\\#10b77f\\]:hover, .group:hover .group-hover\\:bg-\\[\\#10b77f\\] {
            background-color: var(--landing-primary) !important;
        }
        .group-hover\\:border-\\[\\#10b77f\\]:hover, .group:hover .group-hover\\:border-\\[\\#10b77f\\] {
            border-color: var(--landing-primary) !important;
        }
        .group-hover\\:text-\\[\\#10b77f\\]:hover, .group:hover .group-hover\\:text-\\[\\#10b77f\\] {
            color: var(--landing-primary) !important;
        }
        .hover\\:text-\\[\\#10b77f\\]:hover {
            color: var(--landing-primary) !important;
        }

        .bg-\\[\\#022B3A\\] {
            background-color: var(--landing-secondary) !important;
        }
        .text-\\[\\#022B3A\\] {
            color: var(--landing-secondary) !important;
        }

        .from-\\[\\#10b77f\\] {
            --tw-gradient-from: var(--landing-primary) !important;
            --tw-gradient-to: var(--landing-primary) !important;
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }
        .to-amber-500 {
            --tw-gradient-to: var(--landing-accent) !important;
        }

        .shadow-\\[0_0_20px_rgba\\(249\\,115\\,22\\,0\\.3\\)\\] {
            box-shadow: 0 0 20px rgba(var(--rgb-landing-primary), 0.3) !important;
        }
        .hover\\:shadow-\\[0_0_30px_rgba\\(249\\,115\\,22\\,0\\.5\\)\\]:hover {
            box-shadow: 0 0 30px rgba(var(--rgb-landing-primary), 0.5) !important;
        }
        .bg-\\[\\#10b77f\\]\\/20 {
            background-color: rgba(var(--rgb-landing-primary), 0.2) !important;
        }
        .bg-\\[\\#10b77f\\]\\/5 {
            background-color: rgba(var(--rgb-landing-primary), 0.05) !important;
        }
        .bg-gradient-to-t.from-\\[\\#10b77f\\]\\/20 {
            --tw-gradient-from: rgba(var(--rgb-landing-primary), 0.2) !important;
            --tw-gradient-to: transparent !important;
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }
    `;

    const isSectionVisible = (key: string) => {
        return settings?.config_sections?.section_visibility?.[key] !== false;
    };

    const sectionOrder = settings?.config_sections?.section_order ||
        ['header', 'hero', 'stats', 'features', 'modules', 'benefits', 'gallery', 'cta', 'footer'];

    const renderSection = useCallback((sectionKey: string) => {
        if (!isSectionVisible(sectionKey)) return null;

        switch (sectionKey) {
            case 'header':
                return <Header key={sectionKey} settings={settings} />;
            case 'hero':
                return <Hero key={sectionKey} settings={settings} />;
            case 'stats':
                return null;
            case 'features':
                return <Features key={sectionKey} settings={settings} />;
            case 'modules':
                return <Modules key={sectionKey} settings={settings} />;
            case 'benefits':
                return <Benefits key={sectionKey} settings={settings} />;
            case 'gallery':
                return <Gallery key={sectionKey} settings={settings} />;
            case 'cta':
                return <CTA key={sectionKey} settings={settings} />;
            case 'footer':
                return <Footer key={sectionKey} settings={settings} />;
            default:
                return null;
        }
    }, [settings, isSectionVisible]);

    return (
        <div className="min-h-screen bg-white">
            <Head title={`${settings?.company_name || 'Assist Hub'} - All-in-One Business Management Solution`}>
                {faviconUrl && <link rel="icon" type="image/x-icon" href={faviconUrl} />}
                <style>{dynamicCss}</style>
            </Head>

            {/* Render sections in order */}
            {sectionOrder.map(sectionKey => renderSection(sectionKey))}

            <CookieConsent settings={adminAllSetting || {}} />
        </div>
    );
}