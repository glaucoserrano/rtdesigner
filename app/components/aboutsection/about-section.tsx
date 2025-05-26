import Image from "next/image"

export const AboutSection = () =>{
    return (
        <section className="bg-pink-50 py-12 px-4 sm:px8">
            <div className="container max-w-6xl mx-auto flex flex-col 
                sm:flex-row items-center gap-10">
                {/* Image Section apenas para telas maiores */}
                <div className="hidden sm:block w-1/2">
                    <Image 
                        src="/raquel.webp" 
                        alt="Raquel Torres" 
                        width={500} 
                        height={750} 
                        className="rounded-2xl 
                            shadow-lg
                            object-cover 
                            w-full 
                            h-auto" 
                    />
                </div>
                {/* Text Section */}
                <div className="sm:w-1/2 text-pink-900">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Sobre a Raquel
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Raquel Torres é especialista em unhas de gel, com anos de dedicação ao cuidado e 
                        à estética feminina. Seu trabalho é reconhecido por sua atenção aos detalhes, 
                        criatividade e carinho com cada cliente. 
                        Ao longo dos anos, ela construiu uma clientela fiel, 
                        unindo técnica, bom gosto e muito amor pela profissão.
                    </p>
                </div>
            </div>
        </section>
    )
}