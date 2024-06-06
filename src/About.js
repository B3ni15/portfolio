import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl border-solid border-2 border-cyan-700">
                <h1 className="text-4xl font-bold mb-6 text-center">Rólam</h1>
                <p className="text-lg text-center leading-relaxed">
                    Helló, Balló Benedek vagyok, <span className='underline decoration-sky-500/30'>15</span> éves és egy <span className='underline decoration-sky-500/30'>Fullstack Developer</span>.
                    Szigetszentmiklóson élek, és kb. 2-3 éve foglalkozom komolyan webfejlesztéssel. 15 évesen már nagyon sok projektben vettem részt, és több még ma is működik! 
                </p>
                <p className="text-lg text-center leading-relaxed mt-4">
                    Ha kíváncsi vagy, nézd meg a <a href="/projects" className="text-cyan-500 hover:text-cyan-300 underline">Projektjeimet</a>!
                </p>
            </div>
        </div>
    );
}

export default About;