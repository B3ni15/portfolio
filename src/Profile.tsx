const Profile = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl border-solid border-2 border-cyan-700">
                <h1 className="text-4xl font-bold mb-6 text-center">Profilom</h1>
                <div className='flex justify-center'>
                    <img src="https://avatars.githubusercontent.com/u/90302291?v=4" alt="Profile" className="rounded-full w-32 h-32" />
                </div>
                <h2 className="text-2xl font-bold my-4 text-center"><a href='https://github.com/B3ni15' target='_blank' rel='noopener noreferrer'>devbeni</a></h2>
                <p className="text-lg text-center">

                    <a href="https://komarev.com/ghpvc/?username=B3ni15">
                        <img src="https://komarev.com/ghpvc/?username=B3ni15&label=Visitors&color=0e75b6&style=flat" alt="Profile visitor" />
                    </a>

                    <h3>
                        <samp>&gt; Hey There!, I am
                            <b><a target="_blank" rel='noopener noreferrer' href="https://devbeni.tech"> Balló Benedek</a></b>
                        </samp>
                    </h3>

                    <p>
                        <samp>
                            <br />
                            I am a full stack web application developer from <b>Budapest</b>
                            <br />
                            <br />
                        </samp>
                    </p>

                    <p className="mt-4">
                        ✌️ &emsp; Enjoy to do programming and sharing knowledge <br /><br />
                        ❤️ &emsp; Love to writing code and learning new features<br /><br />
                        📧 &emsp; Reach me anytime: ballobeni08@gmail.com<br /><br />
                        💬 &emsp; Ask me about anything <a href="https://github.com/b3ni15/b3ni15/issues" className="text-cyan-500 hover:text-cyan-300 underline">here</a>
                    </p>

                    <h3 className="mt-6 text-center text-xl font-semibold">Use To Code</h3>

                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        <span className="badge">Javascript</span>
                        <span className="badge">Typescript</span>
                        <span className="badge">React</span>
                        <span className="badge">Nodejs</span>
                        <span className="badge">Express.js</span>
                        <span className="badge">MongoDB</span>
                        <span className="badge">HTML</span>
                        <span className="badge">CSS3</span>
                        <span className="badge">Tailwind</span>
                        <span className="badge">Bootstrap</span>
                        <span className="badge">VSCode</span>
                        <span className="badge">Git</span>
                    </div>

                    <h3 className="mt-8 text-center text-lg font-semibold">Thanks for watching 😉</h3>
                </p>
            </div>
        </div>
    );
}

export default Profile;