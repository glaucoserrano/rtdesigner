export const Footer = () =>{
    return(
        <footer className="bg-pink-100 py-4 px-6 shadow-sm bottom-0 left-0 right-0 z-50">
            <div className="container max-w-6xl mx-auto text-center">
                <p className="text-gray-700 text-sm">
                    &copy; {new Date().getFullYear()} Raquel Torres Designer de Unhas. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}