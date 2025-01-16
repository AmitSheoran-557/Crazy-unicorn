import React, { useState, useRef } from 'react';
import CustomHeading from '../common/CustomHeading';
import FooterLogo from '../assets/images/png/footer-logo.png';
import { MEDIA_ICONS } from '../utils/helper';
import CustomButton from '../common/CustomButton';
import FooterClouds from '../assets/images/png/footer-clouds.png';
import Rainbow from '../assets/images/png/rainbow.png';
import FooterBottomStars from '../assets/images/png/footer-left-bottom-stars.png';
import { Email } from '../utils/icons';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

function Footer() {
    const [formValue, setFormValue] = useState({
        email: ''
    });

    const formRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        emailjs
          .sendForm('service_vubs3cl', 'template_lb5dsje', formRef.current, {
            publicKey: 'Psw6rvjLDppWVhvBu',
          })
          .then(
            (result) => {

              Swal.fire({
                title: 'Success',
                text: 'Your email has been sent successfully',
                icon: 'success',
                confirmButtonText: 'Thanks',
              }).then(() => {
                setFormValue({ email: '' });
              });
              console.log('SUCCESS!', result);
            },
            (error) => {
              Swal.fire({
                title: 'Error',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
              });
              console.log('FAILED...', error.text);
            }
          );

        if (formValue.email === '') {
            alert('Please enter a valid email address.');
            return;
        }
    };

    return (
        <div className='relative overflow-hidden bg-footer bg-no-repeat bg-cover bg-top pt-[265px] max-lg:pt-24 max-md:pt-16 max-sm:pt-12 px-4'>
            <img className='pointer-events-none absolute bottom-0 left-0 w-full max-w-[500px] z-10 animate-stars' src={FooterBottomStars} alt="footer stars" />
            <img
                className='pointer-events-none absolute bottom-0 left-0 w-full z-[3] animate-clouds'
                src={FooterClouds}
                alt="footer clouds"
            />
            <img
                className='pointer-events-none absolute bottom-0 right-0 w-full z-[2]'
                src={FooterClouds}
                alt="footer clouds"
            />
            <img
                className='pointer-events-none absolute bottom-40 max-xl:bottom-52 max-lg:bottom-32 max-md:bottom-0 max-md:max-w-[180px] max-lg:max-w-[250px] right-0 w-full xl:max-[800px] max-w-[400px] max-xl:max-w-[300px] z-[1] animate-rainbow'
                src={Rainbow}
                alt="rainbow"
            />
            <div className='relative z-[3]'>
            <CustomHeading title="Sign up for the latest news" className="text-center" />
            <p className='text-center max-w-[660px] mx-auto text-custom-xl max-md:text-base leading-[170%] font-comic'>
                Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed aenean egestas ut sit.
            </p>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                action='#'
                className='bg-white max-w-[521px] text-black placeholder:text-black placeholder:opacity-70 max-sm:max-w-[330px] mx-auto mt-[50px] max-lg:mt-11 max-md:mt-8 max-sm:mt-5 py-2 pl-[19px] pr-[9px] rounded-[10px] w-full flex items-center'
            >
                <Email/>
                <input
                    required
                    value={formValue.email}
                    onChange={e => setFormValue({ ...formValue, email: e.target.value })}
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Your email'
                    className='px-[9px] font-comic placeholder:font-comic w-full py-[15px] outline-none'
                />
                <div className="border-linear-gradient max-w-max rounded-xl mt-2 max-xl:mx-auto">
                    <div className='bg-white md:-translate-x-2 -translate-x-1 md:-translate-y-2 -translate-y-1 rounded-xl'>
                    <CustomButton
                        className="uppercase py-[10px] px-[29px] !text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#B62AFF] to-[#FF0DF2]"
                        title='Subscribe'
                        type="submit"
                        disabled={formValue.email === ''}
                    />
                    </div>
                </div>
            </form>
            </div>
            <div className='mt-[287px] max-xl:mt-40 max-lg:mt-24 max-md:mt-16 max-sm:mt-10 relative z-10'>
                <img className='max-w-[172px] max-md:max-w-[130px] mx-auto bg-transparent' src={FooterLogo} alt="footer logo" />
                <div className='flex justify-center gap-5 mt-[60px] max-md:mt-12 max-sm:mt-5'>
                    {MEDIA_ICONS.map((obj, i) => (
                        <div key={i}>
                            <a className='hover:scale-110 transition-all ease-in-out duration-300' target='_blank' href={obj.link}>{obj.icon}</a>
                        </div>
                    ))}
                </div>
                <p className='text-center text-black opacity-70 text-xl pt-[63px]  pb-[60px] max-md:py-11 max-sm:py-6 font-comic'>Copyright@CrazyUnicorn.com</p>
            </div>
        </div>
    );
}

export default Footer;
