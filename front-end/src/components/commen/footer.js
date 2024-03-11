import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    /* footer ui  */
    return (
        <footer className="bg-gray-800">
            <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <div className="flex flex-shrink-0 items-center">
                    <div className='flex gap-1 items-center'>
                        <div className=' font-medium text-xl text-white '><span className=' text-yellow-500'>F</span>ashion</div>
                        <div>
                            <FontAwesomeIcon className='h-6 w-6' icon={faBagShopping} beatFade style={{ color: "#ffffff", }} />
                        </div>
                        <div className=' font-medium text-xl text-white '><span className=' text-yellow-500'>H</span>ub</div>
                    </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>

                <div className="flex -mx-2">
                    <a href="#" className="mx-2" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", }} />
                    </a>

                    <a href="#" className="mx-2" aria-label="Github">
                        <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;