import Folder from "../reactbit/Folder";

const ProjectCard = (item) => {

  const SIZE = 1.2

  const papers = (p) => [
    <div className="h-full w-full overflow-hidden p-1 text-left">
      <div className="mb-0.5 font-ibmPlex font-bold tracking-wider text-[#4F5A68]">Skills</div>
      {p.tags.map((s) => (
        <div className="text-[#1B1F27] font-jetBrains text-xs" key={s}>• {s}</div>
      ))}
    </div>,
    <div className="h-full w-full overflow-hidden p-1 text-left">
      <div className="mb-0.5 font-ibmPlex font-bold tracking-wider text-[#4F5A68]">Features</div>
      {p.features.map((s) => (
        <div className="text-[#1B1F27] font-jetBrains text-[10px]" key={s}>• {s}</div>
      ))}
    </div>,
    <div className="h-full w-full overflow-hidden p-1 text-left">
      <div className="mb-0.5 font-ibmPlex font-bold tracking-wider text-[#4F5A68]">Points</div>
      {p.points.map((s) => (
        <div className="text-[#1B1F27] font-jetBrains text-[10px]" key={s}>• {s}</div>
      ))}
    </div>
  ]

  return (
    <article id="projectCard" className="flex flex-col items-center text-center">
      <div className="w-full justify-center flex">
        <Folder color={item.elem.color} size={SIZE} items={papers(item.elem)} />
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center mt-5.5">
        <div className="flex gap-1 items-center justify-center">
          <p className="font-jetBrains font-bold text-sm text-[#7EE787]">0{item.elem.id}</p>
          <p className="font-jetBrains font-bold text-sm text-[#9AA6B2]">• {item.elem.category}</p>
        </div>
        <h3 className="font-ibmPlex font-semibold text-2xl leading-7.5 tracking-[0.01em] text-[#E6EDF3] mt-2">{item.elem.name}</h3>
        <p className="font-ibmPlex text-base leading-6 text-[#B6B0CA] mt-2.5">{item.elem.description}</p>
        <a className="py-3 w-19 bg-[#7EE787] font-jetBrains font-bold text-sm text-[#0E1116] rounded-lg mt-4" href={item.elem.source} target="_blank">Source</a>
      </div>
    </article>
  )
}

export default ProjectCard