import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderContentsProps = {
    order: OrderItem[]
}

export default function OrderContents({order}: OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.length === 0
                ? <p className="text-center">La orden está vacía</p>
                : (
                    order.map( item => (
                        <div key={item.id}>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity}
                            </p>
                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}
