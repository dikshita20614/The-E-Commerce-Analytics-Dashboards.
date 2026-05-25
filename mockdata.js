// Analytics Data Structure for Chart Engine
const mockDashboardData = {
    "7days": {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        sales: [1200, 1900, 3000, 5000, 2300, 3400, 4100],
        orders: 142,
        users: 89
    },
    "30days": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        sales: [15000, 21000, 18000, 24000],
        orders: 580,
        users: 342
    }
};

// Stateful Application Trackers (Simulates Live Database Entries)
let globalProductsState = [
    { id: "PROD-101", name: "Wireless Mechanical Keyboard", category: "Electronics", price: 129.99, stock: 42 },
    { id: "PROD-102", name: "Ergonomic Office Chair", category: "Furniture", price: 349.50, stock: 12 },
    { id: "PROD-103", name: "UltraWide 4K Monitor", category: "Electronics", price: 499.99, stock: 0 },
    { id: "PROD-104", name: "Noise Cancelling Headphones", category: "Audio", price: 199.99, stock: 85 }
];

const globalOrdersState = [
    { id: "ORD-9482", customer: "Sarah Jenkins", items: "1x Wireless Keyboard", total: 129.99, status: "Delivered" },
    { id: "ORD-9483", customer: "Michael Chen", items: "1x UltraWide Monitor", total: 499.99, status: "Processing" },
    { id: "ORD-9484", customer: "Emma Rodriguez", items: "2x Ergonomic Chair", total: 699.00, status: "Shipped" },
    { id: "ORD-9485", customer: "David Kim", items: "1x Headphones", total: 199.99, status: "Delivered" }
];