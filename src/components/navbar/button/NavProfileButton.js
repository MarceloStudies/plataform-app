export default function NavProfileButton() {
  return (
    <button
      data-tooltip-target="tooltip-profile"
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 rounded-e-full lg:rounded-none hover:lg:rounded-b-full  hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <svg
        className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
      <span className="sr-only">Profile</span>
    </button>
  );
}
