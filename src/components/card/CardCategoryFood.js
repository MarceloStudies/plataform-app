export default function CardCategoryFood(props) {
    var color = props.color == null ? 'red' : props.color;
    return(
<div class="flex justify-center items-center min-w-40 w-1/4 h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <button class="flex flex-col items-center ">
        <img class={`w-24 h-24 mb-3 border-2 border-${color}-500 rounded-full shadow-lg`} src="https://img.freepik.com/fotos-premium/brocolis-isolado-em-um-fundo-branco_120872-31309.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Verduras</h5>
        <span class="text-sm text-amber-500 dark:text-amber-400">Visual Designer</span>
    </button>
</div>

    );
}