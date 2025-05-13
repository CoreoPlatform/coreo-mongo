export const Loader = () => {
    return (
        <div id="spinner" className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-opacity-75"></div>
        </div>
    )
}