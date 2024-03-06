

export default function Margon(){
    return(

        <main className="w-full h-full flex flex-col justify-center bg-gradient-to-r from-green-400 to-stone-800 ">
            <div className="flex flex-col w-full h-36 justify-start items-center">
                <div className="flex flex-col w-full  justify-start text-center text-3xl items-center gap-1 mb-4">
                    <h1 className="text-green-200 font-bold uppercase">Margon Company</h1>
                    {/* <h2 className="text-2xl text-txt_secondary dark:text-txtDark_primary italic">
                        Seja bem-vindo!
                    </h2> */}
                </div>
            </div>

            <div className=" flex flex-col md:flex-row container bg-white  h-auto self-center justify-center items-center gap-4">
                <div className="flex w-1/2 md:1/3 h-72 bg-red-600 max-w-72 m-4 rounded-full "></div>




            </div>

        </main>
    )
}