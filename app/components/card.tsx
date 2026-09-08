export default function Card({title, description, bottom, iconHead, iconStyle}: {title: string, description: string, bottom: string, iconHead?: string, iconStyle?: React.CSSProperties}) {
    return(
        <div
        className="flex flex-col rounded-xl shadow-sm bg-dark "
        >
            <div
            className="p-5 border-b border-gray-200 font-bold text-4xl"
            >
                {title}
                <i 
                className={`fa-solid fa-${iconHead} ml-2 fa-rotate-by`} 
                style={iconStyle}
                ></i>
            </div>
            <div
            className="p-5 flex flex-col"
            >
                {description}
            </div>
            <div
            className="p-5 border-t border-gray-200"
            >
                {bottom}
            </div>
        </div>
    );
}
