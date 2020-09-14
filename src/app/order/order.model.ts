class Order {
    constructor(
        public address: string,
        public number: number,
        public optinalAddress: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = [],
        public id?: string
    ) { }
}

class OrderItem {
    constructor(public quantity: number, private menuId: string) { }
}

export {OrderItem, Order}