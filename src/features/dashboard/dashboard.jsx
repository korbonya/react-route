import StatsCard from "../../components/cards/statsCard"

export default function Dashboard() {
  return (
    <div className="w-full px-4 py-8">
        <div className="grid grid-cols-4 gap-2 w-full">
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
        </div>
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
                           {[3,5,6,6,7,5].map(el => <tr>
                             <td>Mamdou aliou</td>
                             <td>mamadou@gjdj.comm</td>
                             <td>652 525 252  </td>
                           </tr>)}
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
  )
}
