export default function NavSettingButton({ company }) {
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
  function toggleTheme() {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.getElementById("central").className = " ";
    } else {
      localStorage.theme = "dark";
      document.getElementById("central").className = "dark";
    }
  }
  return (
    <button
      data-tooltip-target="tooltip-settings"
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      onClick={toggleTheme}
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
          d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
        />
      </svg>
      <span className="sr-only">Settings</span>
    </button>
  );
}
