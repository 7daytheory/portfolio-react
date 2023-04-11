import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';

const Tech = () => {
    return (
        <>
        <p className={`${styles.sectionSubText} flex justify-center mt-[-40px]`}>Technology I have worked with</p><br />
            <h3 className={`${styles.sectionHeadText} flex justify-center`}>Tech Stacks.</h3>
            <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
            </div>
        </>
    )
}

export default SectionWrapper(Tech, 'tech');