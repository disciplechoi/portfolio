import selfie from './img/IMG_0849.JPG'

export default function Header(){
    return (
        <>
            <header className='text-left'>
                <p className="font-bold text-center">PORTFOLIO</p>
            <div className="pt-16 fade-in-box ">
                <div>
                    <img className="selfie" src={selfie} alt="selfie" />
                    
                </div>
               
                
                <div className='pt-5'>
                    <div className="text-3xl pt-5">
                        <h1 className="font-bold">Jihye Soriano (Full Stack Developer) </h1>
                        <p></p>
                    </div>
                    <p className="pt-5">
                    Dedicated and skilled Full Stack Developer with one year of experience in configuring, customizing, and maintaining cloud-based web applications. Additionally, I bring six months of experience in the logistics industry as a Front-end Developer, specializing in building dynamic e-commerce user interfaces. Prior to this, I spent three years as a SQL Developer in the financial sector, focusing on maintaining the security of the Oracle banking system.
                    </p>
                    <ul className="pt-5">
                    <li>📧 : choijam1229@gmail.com</li>
                    <li>📍 : NYC</li>
                    <li>📚 : Bachelor of Computer Science Engineering </li>
                    </ul>
                </div>     
            </div>
            
             </header>
        </>
        
    )

}