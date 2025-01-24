import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
    let data = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center bg-pink-400 text-white w-full overflow-hidden mb-[-1px]">
                <div className="container flex flex-col items-center py-2"> 
                    <p className="text-xl font-bold">
                        Blog Pessoal | Copyright: {data}
                    </p>
                    <p className="text-lg">Conecte-se comigo!</p>
                    <div className="flex gap-4">
                        <LinkedinLogo size={48} weight="bold" />
                        <InstagramLogo size={48} weight="bold" />
                        <GithubLogo size={48} weight="bold" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;