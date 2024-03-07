
const BikeCard = ({ imgUrl, changeBigBikeImg, bigBikeImg }) => {

    const handleClick = () => {
        if (bigBikeImg !== imgUrl.bigBike) {
            changeBigBikeImg(imgUrl.bigBike)
        }
    }

    return (
        <div
            className='border-4 rounded-xl cursor-pointer max-sm:flex-1'
            onClick={handleClick}>
            <div className={`flex justify-center items-center ${bigBikeImg === imgUrl.bigBike ? 'bg-gray-300 ' : 'bg-gray-100'} rounded-l bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4`}>
                <img src={imgUrl.thumbnail}
                    alt="bike collection"
                    width={127}
                    height={103}
                    className='object-cover'
                />
            </div>
        </div>
    )
}

export default BikeCard