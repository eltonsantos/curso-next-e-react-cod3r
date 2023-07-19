import Customer from "../core/Customer";
import { EditIcon, TrashIcon } from "./Icons";

interface TableProps {
  customers: Customer[]
  selectedCustomer?: (customer: Customer) => void
  removedCustomer?: (customer: Customer) => void
}

export default function Table(props: TableProps) {

  const showActions = props.removedCustomer || props.selectedCustomer

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions ? <th className="p-4">Ações</th> : false}
      </tr>
    )
  }

  function renderDatas() {
    return props.customers?.map((customer, i) => {
      return (
        <tr key={customer.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{customer.id}</td>
          <td className="text-left p-4">{customer.name}</td>
          <td className="text-left p-4">{customer.age}</td>
          {showActions ? renderActions(customer) : false}
        </tr>
      )
    })
  }

  function renderActions(customer: Customer) {
    return (
      <td className="flex justify-center">
        {props.selectedCustomer ? (
          <button onClick={() => props.selectedCustomer?.(customer)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
            {EditIcon}
          </button>
        ) : false}
        {props.removedCustomer ? (
          <button onClick={() => props.removedCustomer?.(customer)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
            {TrashIcon}
          </button>
        ) : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderDatas()}
      </tbody>
    </table>
  )
}