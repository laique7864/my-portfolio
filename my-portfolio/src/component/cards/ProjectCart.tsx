import React from 'react'
interface  IProjectArray {
    name:string;
    description:string,
    skills:string[]
}
interface Props {
    item:IProjectArray
}
function ProjectCart({item} :Props) {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-base mb-2">{item.name}</div>
    <p className="text-gray-700 text-base text-justify ">
        {item.description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
{item?.skills.map(
    (skill) =>
    {
        return(
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{skill}</span>

        )
    }
)}
    
  </div>
</div>
    </>
  )
}

export default ProjectCart