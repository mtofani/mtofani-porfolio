
import RolesItem from './RolesItem'
import roles from '../contents/roles.json'
export default function Roles() {
  return (
    <div className="relative flex flex-col text-white">
      <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-gray-700"></div>
      {roles.length > 0 ? (
        roles.map((role, index) => (
          <RolesItem key={index} role={role} />
        ))
      ) : (
        <p>No roles available</p>
      )}
    </div>
  )
}