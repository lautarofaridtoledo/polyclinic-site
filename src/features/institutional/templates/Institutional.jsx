import React from 'react';
import banner from '../../../assets/images/global/institutional.webp';
import InstitutionalPrinciples from '../molecules/InstitutionalPrinciples';
import institutional from '../../../json/institutional.json';
import SectionTitle from '../../shared/atoms/SectionTitle';

const Institutional = () =>
    (
        <section id={'institucional'} className='mx-auto pt-3'>
            <SectionTitle name={'Institucional'} img={banner}/>
            <div className='w-[90vw] mx-auto'>
                <InstitutionalPrinciples institutional={institutional}/>
            </div>
        </section>
    )

export default Institutional;
