import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { IoChevronDownCircleOutline, IoChevronUpCircleOutline } from "react-icons/io5"

const Accordion = () => {

    const items = [
        {
            title: "Accueil personnalisé à l'aéroport",
            content: "Un agent vous attend dès l’arrivée pour vous accompagner avec attention."
        },
        {
            title: "Assistance à l'enregistrement",
            content: "Optimisez vos démarches avec un accompagnement fluide à chaque étape."
        },
        {
            title: "Surveillance bagages et sécurité",
            content: "Vos effets personnels sont pris en charge avec rigueur et transparence."
        },
        {
            title: "Coordination avec les compagnies",
            content: "Communication proactive pour gérer imprévus, retards ou changements."
        },
        {
            title: "Support multicanal 24/7",
            content: "Restez informé par WhatsApp ou téléphone à tout moment du voyage."
        },
        {
            title: "Voyage adapté à chaque profil",
            content: "Solutions dédiées pour VIP, familles, étudiants, missions humanitaires, etc."
        },
    ]
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <Disclosure key={index}>
            {({ open }) => (
                <div>
                    <DisclosureButton className={`w-full text-left bg-white rounded-sm p-4 flex items-center justify-between ${open ? "border-l-2" : "border mb-4"}`}>
                        <span className="font-bold text-lg">{item.title}</span>
                            { open ?  <IoChevronUpCircleOutline className="w-5 h-5 text-green" /> : <IoChevronDownCircleOutline className="w-5 h-5 text-gray-500" /> }
                    </DisclosureButton>
                    <DisclosurePanel className="bg-white p-4 border-l-2 border-green rounded-sm mb-2">
                        <p className="text-gray-600">{item.content}</p>
                    </DisclosurePanel>
                </div>
            )}
        </Disclosure>
      ))}
    </div>
  )
}

export default Accordion
