import CardCategoryFood from "../components/card/CardCategoryFood";

export default function Home() {
    return (
            <main className="flex w-full h-full justify-center px-4 lg:px-16 py-4 ">
                <div className="flex flex-col w-full  h-full  p-4 ">
                    <div id="category-area" className="w-full  h-1/4 flex overflow-x-hidden justify-center gap-4 ">
                    <CardCategoryFood color={'red'}/>
                    <CardCategoryFood color={'blue'}/>
                    </div>

                </div>

            </main>

    )
}