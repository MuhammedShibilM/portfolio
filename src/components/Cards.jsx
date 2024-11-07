const Cards = ({ title, year, description }) => {
    return (
        <>
            <div className="bg-gray-600 p-3 rounded-md space-y-3">
                <h3 className=" font-bold text-pink-500">{year}</h3>
                <h2 className="text-xl font-bold">{title}</h2>
                <h4 className="text-gray-300 text-sm font-semibold">{description}</h4>
            </div>
        </>
    )
}

export default Cards;