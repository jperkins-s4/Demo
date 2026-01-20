// SkyTab Venue - Shared Data Constants
// Note: URLs point to training/demo environments for demonstration purposes

// Navigation Items for Home Page
const NAV_ITEMS = [
    { id: 'overview', label: 'Overview' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'software', label: 'Web Apps' },
    { id: 'wallet', label: 'Wallet' },
    { id: 'integrations', label: 'Integrations' }
];

// Wallet Page Navigation Items
const WALLET_NAV_ITEMS = [
    { id: 'wallet-overview', label: 'Overview' },
    { id: 'wallet-interface', label: 'Interface' },
    { id: 'wallet-capabilities', label: 'Capabilities' },
    { id: 'passes-highlights', label: 'Passes' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'unified-platform', label: 'Platform' },
];

// Hardware Devices (uses Icons from shared-components.js)
const HARDWARE_DEVICES = [
    {
        category: "Handheld / Mobile",
        model: "PAX A800",
        use: "Line-busting, in-seat, hawking & premium service.",
        image: "site/handheld.png",
        iconName: "Smartphone",
        url: "https://s3.amazonaws.com/shift4-payments-files/S4_StadiumHandheldSpecSheet.pdf"
    },
    {
        category: "Fixed POS Terminal",
        model: "PAX L1400 & A3700",
        use: "Concession stands, bars & premium locations.",
        image: "site/fixed-pos.png",
        imageBack: "site/fixed-pos-back.jpg",
        iconName: "Monitor",
        url: "https://s3.amazonaws.com/shift4-payments-files/S4_StadiumWorkstationDetail.pdf"
    },
    {
        category: "Self-Service Kiosk",
        model: "Elo Tablet + Olea Stand",
        use: "Self-order in concessions & premium areas.",
        image: "site/kiosk.png",
        iconName: "Kiosk",
        url: "https://s3.amazonaws.com/shift4-payments-files/S4_Stadium_SelfOrder_SpecSheet.pdf"
    }
];

// Web Apps
const WEB_APPS = [
    {
        title: "Menu Manager",
        desc: "Back-of-house content management",
        details: [
            "Revenue Centers, Items, Modifiers",
            "Venue Settings, Merchant Config",
            "Seat Manifest, Charges & Fees"
        ],
        iconName: "LayoutGrid",
        url: "https://training-menu.ordernext.com"
    },
    {
        title: "Orders",
        desc: "Order Review & Management",
        details: [
            "Search by order #, name, or last 4",
            "View details, filter by date/status",
            "Process refunds, send e-receipts"
        ],
        iconName: "ShoppingCart",
        url: "https://training-refund.ordernext.com"
    },
    {
        title: "Reports",
        desc: "Analytics & Exports",
        details: [
            "Financial reports with filters",
            "Schedule delivery (Email, SFTP, S3)",
            "Export CSV, PDF, PNG"
        ],
        iconName: "BarChart",
        url: "https://training-datanow.ordernext.com"
    },
    {
        title: "Loyalty",
        desc: "Customer Rewards",
        details: [
            "User auth via ticketing or SMS",
            "Award/deduct currency, promotions",
            "View balance history"
        ],
        iconName: "Heart",
        url: "https://training-loyalty.ordernext.com"
    },
    {
        title: "Devices",
        desc: "Device Management",
        details: [
            "View/assign device configs",
            "Link printers to devices",
            "Configure network printers"
        ],
        iconName: "MonitorSmartphone",
        url: "https://training-devices.ordernext.com"
    },
    {
        title: "Access",
        desc: "User & Role Management",
        details: [
            "Manage user accounts & roles",
            "Define Name, Email, Phone",
            "Deactivate user accounts"
        ],
        iconName: "ShieldCheck",
        url: "https://training-access.ordernext.com"
    }
];

// Integration Categories
const INTEGRATION_CATEGORIES = [
    { name: "Ticketing", partners: "Ticketmaster, SeatGeek, AXS, Tickets.com" },
    { name: "Loyalty & Stored Value", partners: "GiveX, Fortress, Lava, FanMaker, Venuetize" },
    { name: "POS Loyalty", partners: "Tapin2, Mashgin, Zippin, Amazon Just Walk Out" },
    { name: "Inventory", partners: "YellowDog, BirchStreet Systems" },
    { name: "Digital Menu Boards", partners: "Triple Play, AmpThink, Spectrio, Ping" }
];

