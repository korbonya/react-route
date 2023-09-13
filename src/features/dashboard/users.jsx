import { useGetUsersQuery } from "../userApi"

export default function Users() {
    const { data, error, isLoading } = useGetUsersQuery()

   if(isLoading) return <div>Chargement...</div>
  return (
    <div>
           <div className="mt-8">
            <h1 className="font-semibold">
                Liste des utilisateurs actifs
                </h1>
                <div>
                    <table className="table  w-full text-center mt-4 ">
                        <thead className="">
                           <tr>
                           <th>Nom</th>
                            <th>Email</th>
                            <th>télephone</th>
                            <th>Action</th>
                           </tr>
                        </thead>
                        <tbody className="">
                           {data && data.map(el => <tr>
                             <td>{el.name}</td>
                             <td>{el.email}</td>
                             <td>{el.phone}</td>
                           </tr>)}
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
  )
}
