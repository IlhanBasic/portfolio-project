export default function Input({label,type,...props}){
    return <div className='form-control'>
        <label htmlFor="">{label}</label>
        {type=='text' && <input type="text" {...props} required />}
        {type=='email' && <input type="email" {...props} required/>}
        {type=='textarea' && <textarea {...props} required></textarea>}
    </div>
}