import LoadingSkeletion from 'react-loading-skeleton'

function HomeLoading() {
    return (
        <div className='w-full'>
            <div className="flex justify-center py-5">
                <LoadingSkeletion height={40} width={560} />
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item}>
                        <LoadingSkeletion height={400} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeLoading