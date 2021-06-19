//HAS-A  - dependancy injection.

class OrderRepository {
    constructor() { }
    public findAll(): string {
        return 'Orders'
    }
}
class OrderService {
    //orderRepo: OrderRepository;
    constructor(private orderRepo: OrderRepository) {
      //  this.orderRepo = orderRepo
    }
    public findAll(): string {
        return this.orderRepo.findAll();
    }
}
// let orderRepo = new OrderRepository()
// let orderService = new OrderService(orderRepo)
let orderService = new OrderService(new OrderRepository())
console.log(orderService.findAll())