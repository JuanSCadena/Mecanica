export default function JsonLd() {
    const autoRepairSchema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "@id": "https://www.proveedoralagasca.com/#autorepair",
        name: "Proveedora La Gasca",
        alternateName: "Proveedora Lagasca",
        description:
            "Taller mecánico automotriz y venta de repuestos originales en Quito, Ecuador. Especialistas en reparación de motores, escáner computarizado, frenos, suspensión, alineación y balanceo. Servicio experto en todo el Distrito Metropolitano de Quito con más de 20 años de experiencia.",
        url: "https://www.proveedoralagasca.com",
        telephone: "+593-995-054-220",
        email: "proveedoralagasca@gmail.com",
        image: "https://www.proveedoralagasca.com/images/img_header.png",
        logo: "https://www.proveedoralagasca.com/images/img_header.png",
        priceRange: "$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Efectivo, Tarjeta de Crédito, Tarjeta de Débito, Transferencia Bancaria",

        address: {
            "@type": "PostalAddress",
            streetAddress: "Av. la Gasca Oe6-41 y Francisco Viteri",
            addressLocality: "Quito",
            addressRegion: "Pichincha",
            postalCode: "170150",
            addressCountry: "EC",
        },

        geo: {
            "@type": "GeoCoordinates",
            latitude: -0.1985,
            longitude: -78.5065,
        },

        /* ─── GEO-SEO CRÍTICO: areaServed cubre TODO Quito ─── */
        areaServed: [
            {
                "@type": "City",
                name: "Quito",
                sameAs: "https://es.wikipedia.org/wiki/Quito",
            },
            {
                "@type": "AdministrativeArea",
                name: "Distrito Metropolitano de Quito",
                sameAs: "https://es.wikipedia.org/wiki/Distrito_Metropolitano_de_Quito",
            },
            {
                "@type": "Place",
                name: "Norte de Quito",
            },
            {
                "@type": "Place",
                name: "Centro de Quito",
            },
            {
                "@type": "Place",
                name: "Sur de Quito",
            },
            {
                "@type": "Place",
                name: "Valle de los Chillos",
            },
            {
                "@type": "Place",
                name: "Valle de Cumbayá-Tumbaco",
            },
            {
                "@type": "Place",
                name: "Barrio La Gasca, Quito",
            },
        ],

        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "15:00",
            },
        ],

        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios de Taller Mecánico y Repuestos en Quito",
            itemListElement: [
                {
                    "@type": "OfferCatalog",
                    name: "Servicios Mecánicos",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Reparación de Motores en Quito",
                                description:
                                    "Servicio completo de reparación y mantenimiento de motores a gasolina y diésel en Quito.",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Diagnóstico Computarizado / Escáner Automotriz",
                                description:
                                    "Escaneo computarizado para detectar fallas electrónicas y mecánicas con equipos de última generación.",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Frenos y Suspensión",
                                description:
                                    "Reparación y cambio de pastillas, discos de freno, amortiguadores y sistemas de suspensión.",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Cambio de Aceite y Lubricantes",
                                description:
                                    "Cambio de aceite con lubricantes Mobil, Valvoline y Havoline. Filtros originales.",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Alineación y Balanceo",
                                description:
                                    "Alineación computarizada y balanceo de llantas para mayor estabilidad y menor desgaste.",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Sistema Eléctrico Automotriz",
                                description:
                                    "Diagnóstico y reparación de sistemas de arranque, alternador, luces y cableado eléctrico.",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Aire Acondicionado Automotriz",
                                description:
                                    "Mantenimiento, recarga y reparación de sistemas de climatización vehicular.",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Enderezada y Pintura",
                                description:
                                    "Reparación de carrocería con acabados de fábrica y pintura automotriz profesional.",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Mecánica General en Quito",
                                description:
                                    "Mantenimiento preventivo y correctivo integral para todo tipo de vehículos.",
                            },
                        },
                    ],
                },
                {
                    "@type": "OfferCatalog",
                    name: "Repuestos Automotrices Originales",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Product",
                                name: "Repuestos Originales Chevrolet, Kia, Toyota y más",
                                description:
                                    "Venta de repuestos automotrices originales y de alta calidad de marcas líderes: Bosch, Mobil, Valvoline, KYB, Valeo, NGK, SKF, NTN y más.",
                            },
                        },
                    ],
                },
            ],
        },

        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "150",
            bestRating: "5",
            worstRating: "1",
        },

        sameAs: [
            "https://www.facebook.com/proveedoralagasca",
            "https://www.instagram.com/proveedoralagasca",
        ],
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.proveedoralagasca.com/#website",
        url: "https://www.proveedoralagasca.com",
        name: "Proveedora La Gasca",
        description:
            "Taller mecánico y repuestos automotrices en Quito, Ecuador",
        publisher: {
            "@id": "https://www.proveedoralagasca.com/#autorepair",
        },
        inLanguage: "es",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(autoRepairSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}
