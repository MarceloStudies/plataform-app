export default function NavHomeButton({ company} ) {
  let color;
  switch (company) {
    case "margon":
      color = "green";
      break;
    case "imogon":
      color = "teal";
      break;
    case "holyhouse":
      color = "amber";
      break;
    default:
      color = "gray";
      break;
  }
  return (
    <button
      data-tooltip-target="tooltip-home"
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 rounded-s-full lg:rounded-none  hover:lg:rounded-t-full  hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <svg
                className={`w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-${color}-600 dark:group-hover:text-${color}-500`}

        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"
        ></path>
      </svg>
      <span className="sr-only">Home</span>
    </button>
  );
}
