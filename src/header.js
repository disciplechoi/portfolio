import selfie from './img/IMG_0849.JPG'

export default function Header(){
    return (
        <>
            <header className='text-left'>
                <p className="font-bold">PORTPOLIO</p>
            <div className="pt-16">
                <img className="selfie" src={selfie} alt="selfie" />
                <div className="text-3xl pt-5">
                    <h1 className="font-bold ">Jihye Soriano</h1>
                    <h2>Full Stack Developer</h2>
                </div>
                
                <div className='pt-5'>
                    <ul>
                    <li>Contact : choijam1229@gmail.com</li>
                    </ul>
                </div>     
            </div>
            
             </header>
        </>
        
    )

}