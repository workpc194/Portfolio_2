

const SkillCard = (item) => {
  return (
    <div id='skillCard' className='p-6 bg-[#151A21] rounded-xl border border-[#252C36]'>
      <h3 className='font-jetBrains font-bold text-sm text-[#9AA6B2]'>{item.elem.name}</h3>
      <div className='w-full flex flex-wrap gap-2 pt-4'>
        {item.elem.skill.map((items, idx) => {
          return <span key={idx} className='font-jetBrains font-medium text-sm text-[#E6EDF3] border rounded-[6px] border-[#3A4552] px-3 py-1.5'>{items}</span>
        })}
      </div>
    </div>
  )
}

export default SkillCard