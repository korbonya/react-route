import { useNavigate } from "react-router-dom"


export default function index() {
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/dashboard')
    }


  return (
    <div className="flex justify-center items-center min-h-screen">
       <div className="max-w-xl shadow rounded-lg py-2 px-4">
        <h1 className="font-bold text-2xl text-center">Connexion</h1>
        <form action="" onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <label className="flex flex-col ">Email
                <input className="border-2 " type="text" />
            </label>
            <label className="flex flex-col">Mot de passe
                <input className="border-2 " type="text" />
            </label>
          <input type="submit" value='connexion' className="px-4 py-1 bg-orange-300 cursor-pointer hover:bg-orange-200" />
        </form>
       </div>
    </div>
  )
}
