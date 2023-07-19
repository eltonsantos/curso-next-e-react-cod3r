import Customer from "@/core/Customer"

interface FormProps {
  customer: Customer
  changeCustomer?: (customer: Customer) => void
  canceled?: () => void
}

export default function Form(props: FormProps) {
  return (
    <div></div>
  )
}