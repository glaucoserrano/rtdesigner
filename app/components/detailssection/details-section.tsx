import { Button } from "@/components/ui/button"
import { MessageCircleMore } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const DetailsSection = () =>{
    return (
        <section className="bg-pink-500 py-12 px-4 sm:px-6 lg:px-8">
            <div className="
                max-w-6xl 
                mx-auto 
                grid 
                grid-cols-1 
                md:grid-cols-2 
                gap-2
                md:gap-8">
                {/* fotos das clientes */}
                <div className="grid grid-rows-2 gap-4">
                    <div className="relative 
                        w-full 
                        h-80 
                        rounded-lg 
                        overflow-hidden 
                        shadow-md"
                    >
                        <Image src="/cliente1.jpeg" alt="Unhas pintadas" fill className="object-cover" /> 
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
                            <Image src="/cliente2.jpeg" alt="Unhas pintadas" fill className="object-cover" />
                        </div>
                        <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
                            <Image src="/cliente3.jpeg" alt="Unhas pintadas" fill className="object-cover" />
                        </div>
                    </div>
                </div>
                {/* texto sobre o serviço */}
                <div className="text-pink-900">
                    <h2 className="text-3xl font-bold mb-4">
                        Procedimentos
                    </h2>
                    <ul className="list-disc list-inside mb-6 text-lg space-y-2">
                        <li>Manicure/pedicure</li>
                        <li>Spa dos Pés</li> 
                        <li>Banho de Gel</li>
                        <li>Blindagem de Calcium</li>
                        <li>Alongamento (Fibra de vidro)</li>
                    </ul>
                    <Link href="" target="_blank" rel="noopener noreferrer" >
                        <Button className="
                            bg-purple-500 
                            hover:bg-purple-700 
                            text-white 
                            rounded-full
                            px-6
                            py-3
                            flex
                            items-center
                            gap-2"
                        >
                            <MessageCircleMore className="w-6 h-6" />
                            Agendar Horário
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}