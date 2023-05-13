import React from 'react';
import banner from '../../../../public/assets/images/global/institutional.webp';
import InstitutionalPrinciples from '../molecules/InstitutionalPrinciples';
import institutional from '../../../json/institutional.json';
import SectionTitle from '../../shared/atoms/SectionTitle';

const Institutional = () =>
    (
        <section id={'institucional'} className='mx-auto pt-3'>
            <SectionTitle name={'Institucional'} />
            <div>
                <img src={banner} alt='specialities banner' className='mx-auto h-[20vh] w-[90vw]' />
            </div>
            <div className='my-5 w-[90vw] mx-auto'>
                <InstitutionalPrinciples institutional={institutional}/>
            </div>
        </section>
    )

export default Institutional;
