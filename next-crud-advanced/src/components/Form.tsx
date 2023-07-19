import { useState } from "react";
import Customer from "../core/Customer";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  customer: Customer
  changeCustomer?: (customer: Customer) => void
  canceled?: () => void
}

export default function Form(props: FormProps) {
  const id = props.customer?.id
  const [name, setName] = useState(props.customer?.name ?? '')
  const [age, setAge] = useState(props.customer?.age ?? 0)

  return (
    <div>
      {id ? (
        <Input
          readonly
          text="Código"
          value={id}
          className="mb-5"
        />
      ) : false}
      <Input
        text="Nome"
        value={name}
        changedValue={setName}
        className="mb-5"
      />
      <Input
        text="Idade"
        type="number"
        value={age}
        changedValue={setAge}
      />
      <div className="flex justify-end mt-7">
        <Button color="blue" className="mr-2"
          onClick={() => props.changeCustomer?.(new Customer(name, +age, id))}>
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={props.canceled}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}