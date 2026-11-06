import { CodeXml, Mail, MessageCircle, UserRound } from 'lucide-react';
import { FaArrowRight } from "react-icons/fa6";

const ContactCard = (item) => {

    return (
        <a href={item.elem.url}>
            <div id='contactCrad' className='bg-[#151A21] border border-[#252C36] rounded-[14px] mb-4 py-5.5 px-6 flex justify-between items-center hover:border-[#7EE787]'>
                <div className='flex gap-5'>
                    <div className='w-12 h-12 flex items-center justify-center bg-[#0E1116] border border-[#3A4552] rounded-xl'>
                        {(item.elem.name === 'email') ? <Mail size={24} color="#7EE787" strokeWidth={1.75} /> : ''}
                        {(item.elem.name === 'whatsapp') ? <MessageCircle size={24} color="#7EE787" strokeWidth={1.75} /> : ''}
                        {(item.elem.name === 'github') ? <CodeXml size={24} color="#7EE787" strokeWidth={1.75} /> : ''}
                        {(item.elem.name === 'linkedin') ? <UserRound size={24} color="#7EE787" strokeWidth={1.75} /> : ''}
                    </div>
                    <div className='flex justify-between flex-col'>
                        <span className='font-jetBrains font-medium text-sm text-[#9AA6B2]'>{item.elem.name}</span>
                        <span className='font-ibmPlex font-semibold text-lg text-[#E6EDF3]'>{item.elem.text}</span>
                    </div>
                </div>
                <FaArrowRight size={22} color='#7EE787' />
            </div>
        </a>
    )
}

export default ContactCard