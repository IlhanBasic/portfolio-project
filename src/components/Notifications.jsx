export default function Notifications ({error}){
    return <div className={`${error!='success'?'error-box':'success-box'}`}>
        {error!=='success' && <p>Error: {error} ❌</p>}
    </div>
}