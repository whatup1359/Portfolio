
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <>
      <div className="mt-20 w-full">
          <div className="text-4xl flex items-center justify-center">
            <p>Education</p>
            <GraduationCap size={50} className="ml-4" />
          </div>

          <div className="flex justify-between px-150 mt-15 mb-5">
            <span>2015-2018</span>
            <span>2019-2022</span>
          </div>

          <div className="px-140">
            <div className="border" />
          </div>

          <div>
            <div className="flex justify-between px-130 mt-5">
              <div className="space-y-1">
                <ul className="text-3xl mb-4">High School</ul>
                <li>Suankularb Wittayalai Thonburi School</li>
                <li>English & Japanese Program</li>
                <li>GPA:</li>
              </div>

              <div className="space-y-1">
                <ul className="text-3xl mb-4">Bachelor's Degree</ul>
                <li>Kasetsart University Bangkhen</li>
                <li>Bachelor of Science in Geography</li>
                <li>GPA: 2.79</li>
                <li>TOEIC: 730</li>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default Education;
