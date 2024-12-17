
export default function login() {

  const formSubmitHua = (event)=>{
    event.preventDefault()
    // console.log("testing"new FormData(event.target);
    
  }
  return (
    <div className="center h-[calc(100vh - 160px)]">
    <form onSubmit={formSubmitHua} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        Login
        </h2>
      <div class="relative mb-4">
        <label 
        htmlFor="email" 
        className="leading-7 text-sm text-gray-600">
          Email
          </label>
        <input 
        type="email" 
        id="email" 
        name="email"
        required 
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" 
        className="leading-7 text-sm text-gray-600">
          Password
          </label>
        <input 
        type="password" 
        id="password" 
        name="password" 
        required
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button 
      className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Login
        </button>
      <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </form>
   </div>
  )
}

