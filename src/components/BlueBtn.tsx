const BlueBtn = ({withArrow, classNames, handleClick, children}: {withArrow?: boolean, classNames?: string, handleClick?: () => void, children?: React.ReactNode}) => {
    return (
        <button onClick={handleClick ? handleClick : undefined} className={`bg-[#0066BF] text-center justify-center cursor-pointer max-h-16 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium ${!classNames?.includes('hidden') && 'inline-flex'} items-center gap-2 ${classNames}`}>
            {children}
            {withArrow && <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>}
        </button>
    );
};

export default BlueBtn;
