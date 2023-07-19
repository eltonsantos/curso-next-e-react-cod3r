import { useEffect, useState } from "react"
import CollectionCustomer from "../backend/db/CollectionCustomer"
import Customer from "../core/Customer"
import CustomerRepository from "../core/CustomerRepository"
import useTableOrForm from "./useTableOrForm"

export default function useCustomers() {
  const repo: CustomerRepository = new CollectionCustomer()

  const { tableVisible, showTable, showForm } = useTableOrForm()

  const [customer, setCustomer] = useState<Customer>(Customer.empty())
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(customers => {
      setCustomers(customers)
      showTable()
    })
  }

  function selectCustomer(customer: Customer) {
    setCustomer(customer)
    showForm()
  }

  async function removeCustomer(customer: Customer) {
    await repo.remove(customer)
    getAll()
  }

  function newCustomer() {
    setCustomer(Customer.empty())
    showForm()
  }

  async function saveCustomer(customer: Customer) {
    await repo.save(customer)
    getAll()
  }

  return {
    customer,
    customers,
    newCustomer,
    saveCustomer,
    removeCustomer,
    selectCustomer,
    getAll,
    tableVisible,
    showTable
  }
}