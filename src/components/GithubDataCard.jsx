

const GithubDataCard = (item) => {

  return (
    <div id='githubDataCard' className='pl-6 border border-[#151A21] hover:border-[#7EE787] rounded-xl h-auto w-auto bg-[#252C36]'>
      <h3 className='mt-6 font-jetBrains font-bold text-5xl text-[#7EE787]'>{item.elem.count}</h3>
      <p className='mt-2 mb-6 font-ibmPlex text-sm text-[#B6C0CA]'>{item.elem.name}</p>
    </div>
  )
}

export default GithubDataCard